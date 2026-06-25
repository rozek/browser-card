import { describe, it, expect } from 'vitest'
import '../src/BrowserCard'                  // registers the <bc-deck> custom element

//------------------------------------------------------------------------------
//  a render-time error in one Visual must stay local: it must neither throw out
//  of the render tree (which would tear down runtime and designer) nor remove
//  the surrounding structure - instead an error indicator appears, while the
//  rest of the deck keeps rendering
//------------------------------------------------------------------------------

  function deckWithCardScript (cardScript:string):any {
    return {
      Id:'bc-deck-safe', Name:'T', readOnly:false, swipeToAdjacentCard:true, Script:'',
      CardWidth:600, CardHeight:450,
      Cards:[{ Id:'bc-card-safe', Name:'C', Color:null, Alpha:1, dontSearch:false,
        Script:cardScript, Widgets:[] }],
    }
  }

  function deckWithWidgetScript (widgetScript:string):any {
    return {
      Id:'bc-deck-safe', Name:'T', readOnly:false, swipeToAdjacentCard:true, Script:'',
      CardWidth:600, CardHeight:450,
      Cards:[{ Id:'bc-card-safe', Name:'C', Color:null, Alpha:1, dontSearch:false, Script:'',
        Widgets:[{ Id:'bc-widget-safe', Name:'B', Number:1, Type:'button', zIndex:1,
          Anchors:['left-width','top-height'], Offsets:[10,100,10,30], visible:true,
          Variant:'rounded-rect', showName:true, autoHilite:true, enabled:true, sharedHilite:false,
          Value:'Hi', Script:widgetScript }] }],
    }
  }

/**** mountUntil — appends a <bc-deck> and polls until "selector" appears ****/
//    card scripts run on a timer and re-render afterwards, so we cannot assert
//    immediately after the canvas first shows up

  async function mountUntil (Deck:any, selector:string):Promise<HTMLElement> {
    const el = document.createElement('bc-deck')
    el.setAttribute('src', JSON.stringify(Deck))
    document.body.appendChild(el)
    for (let Attempt = 0; Attempt < 300; Attempt++) {
      await new Promise((r) => setTimeout(r, 0))
      if (el.querySelector(selector) != null) { break }
    }
    return el
  }

/**** settle — mounts and lets the async scripts run for a fixed number of ticks ****/

  async function settle (Deck:any):Promise<HTMLElement> {
    const el = document.createElement('bc-deck')
    el.setAttribute('src', JSON.stringify(Deck))
    document.body.appendChild(el)
    for (let Attempt = 0; Attempt < 150; Attempt++) {
      await new Promise((r) => setTimeout(r, 0))
    }
    return el
  }

/**** a render handler returning a component whose body throws ****/
//    the reference to "m" is only evaluated while preact reconciles the returned
//    vnode, i.e. outside the try/catch in "renderResult" - exactly the case the
//    BC_SafeSlot boundary has to catch

  const BadRenderScript =
    'const Bad = () => html`<span>${m}</span>`\n' +
    'on(\'render\', () => html`<${Bad}/>`)'

  const GoodRenderScript =
    'on(\'render\', () => html`<span class="ok">ok</span>`)'

describe('render error containment', () => {
  it('a throwing render handler does not tear down the deck, shows an indicator', async () => {
    const el = await mountUntil(deckWithCardScript(BadRenderScript), '.bc-error-indicator')

    expect(el.querySelector('.bc-card-canvas')).not.toBeNull()        // tree survived
    expect(el.querySelector('.bc-error-indicator')).not.toBeNull()   // error surfaced

    document.body.removeChild(el)
  })

  it('a healthy render handler renders normally (boundary is transparent)', async () => {
    const el = await mountUntil(deckWithCardScript(GoodRenderScript), '.ok')

    expect(el.querySelector('.bc-card-canvas')).not.toBeNull()
    expect(el.querySelector('.ok')).not.toBeNull()
    expect(el.querySelector('.bc-error-indicator')).toBeNull()       // no false positive

    document.body.removeChild(el)
  })
})

describe('syntax error handling', () => {
  it('an intrinsic widget with a valid (empty) script runs its behavior', async () => {
    const el = await settle(deckWithWidgetScript(''))

    const widget = el.querySelector('.bc-widget')
    expect(widget).not.toBeNull()
    expect(widget!.innerHTML.length).toBeGreaterThan(0)              // behavior rendered

    document.body.removeChild(el)
  })

  it('a syntactically broken widget script is ignored, the deck stays intact', async () => {
    const el = await settle(deckWithWidgetScript('this is ((( not valid js'))

    // the broken script is ignored: no crash, the deck and the widget box survive.
    // the intrinsic behavior is suppressed too (it is invoked from within the same
    // faulty script), so the widget renders empty until the script is fixed
    expect(el.querySelector('.bc-card-canvas')).not.toBeNull()
    const widget = el.querySelector('.bc-widget')
    expect(widget).not.toBeNull()
    expect(widget!.innerHTML.length).toBe(0)                         // behavior suppressed

    document.body.removeChild(el)
  })
})
