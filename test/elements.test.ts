import { describe, it, expect } from 'vitest'
import { AlphaPercentOf } from '../src/BrowserCard'

const Deck = {
  Id:'bc-deck-1', Name:'T', readOnly:false, swipeToAdjacentCard:true, Script:'',
  CardWidth:600, CardHeight:450,
  Cards:[{ Id:'bc-card-1', Name:'C', Color:null, Alpha:1, dontSearch:false, Script:'',
    Widgets:[{ Id:'bc-widget-1', Name:'B', Number:1, Type:'button', zIndex:1,
      Anchors:['left-width','top-height'], Offsets:[10,100,10,30], visible:true,
      Variant:'rounded-rect', showName:true, autoHilite:true, enabled:true, sharedHilite:false,
      Value:'Hi', Script:'' }] }],
}

describe('custom elements', () => {
  it('registers <bc-designer> (full designer) and <bc-deck> (embeddable)', () => {
    expect(customElements.get('bc-designer')).toBeTypeOf('function')
    expect(customElements.get('bc-deck')).toBeTypeOf('function')
  })

  it('<bc-deck> renders the deck chromeless (no menu/bottom bar)', async () => {
    const el = document.createElement('bc-deck')
    el.setAttribute('src', JSON.stringify(Deck))
    document.body.appendChild(el)
    await new Promise((r) => setTimeout(r, 0))
    expect(el.querySelector('.bc-card-canvas')).not.toBeNull()
    expect(el.querySelector('.bc-menu-bar')).toBeNull()
    expect(el.querySelector('.bc-bottom-bar')).toBeNull()
    document.body.removeChild(el)
  })

  it('<bc-deck> with invalid src does not crash and renders no deck', async () => {
    const el = document.createElement('bc-deck')
    el.setAttribute('src', '{ not json')
    expect(() => document.body.appendChild(el)).not.toThrow()
    await new Promise((r) => setTimeout(r, 0))
    expect(el.querySelector('.bc-card-canvas')).toBeNull()
    document.body.removeChild(el)
  })

  it("deck on('render') renders inside the applet; card on('render') renders inside the card", async () => {
    const Scripted = {
      Id:'bc-deck-2', Name:'S', readOnly:false, swipeToAdjacentCard:true,
      CardWidth:600, CardHeight:450,
      Script:"on('render', () => html`<div class=\"deck-marker\"></div>`)",
      Cards:[{ Id:'bc-card-2', Name:'C', Color:null, Alpha:1, dontSearch:false,
        Script:"on('render', () => html`<div class=\"card-marker\"></div>`)",
        Widgets:[] }],
    }
    const el = document.createElement('bc-deck')
    el.setAttribute('src', JSON.stringify(Scripted))
    document.body.appendChild(el)

    // async deck/card scripts run on a timer, then re-render; poll until both
    // render handlers have produced output
    let deckMarker:Element | null = null
    let cardMarker:Element | null = null
    for (let i = 0; i < 100; i++) {
      await new Promise((r) => setTimeout(r, 10))
      deckMarker = el.querySelector('.deck-marker')
      cardMarker = el.querySelector('.card-marker')
      if ((deckMarker != null) && (cardMarker != null)) { break }
    }
    expect(deckMarker).not.toBeNull()
    expect(cardMarker).not.toBeNull()

    // deck render output lives in the deck backdrop, NOT loose at the top of
    // .bc-app (the old bug placed it outside the frame)
    const deckRender = deckMarker!.closest('.bc-deck-render')
    expect(deckRender).not.toBeNull()
    expect(el.querySelector('.bc-app > .deck-marker')).toBeNull()

    // the backdrop shares the card wrapper with the canvas (so it aligns with
    // the card), sitting as a sibling right before .bc-card-canvas
    const canvas  = el.querySelector('.bc-card-canvas')!
    const wrapper = deckRender!.parentElement!
    expect(canvas.parentElement).toBe(wrapper)               // same card wrapper
    expect(wrapper.parentElement!.classList.contains('bc-card-area')).toBe(true)
    expect(deckRender!.compareDocumentPosition(canvas) & Node.DOCUMENT_POSITION_FOLLOWING)
      .toBeTruthy()                                           // backdrop before canvas

    // card render output lives inside the card canvas; the deck backdrop is not
    // nested inside the canvas
    expect(cardMarker!.closest('.bc-card-canvas')).not.toBeNull()
    expect(el.querySelector('.bc-card-canvas .bc-deck-render')).toBeNull()

    // a colour-less card is transparent by default (so the deck render shows
    // through); the white "paper" lives on the wrapper behind it
    const canvasEl = canvas as HTMLElement
    expect(AlphaPercentOf(canvasEl.style.background)).toBe(0)
    const wrapperEl = wrapper as HTMLElement
    expect(AlphaPercentOf(wrapperEl.style.background)).toBe(100)

    document.body.removeChild(el)
  })
})
