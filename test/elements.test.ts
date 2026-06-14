import { describe, it, expect } from 'vitest'
import '../src/BrowserCard'

const Deck = {
  Id:'bc-deck-1', Name:'T', readOnly:false, swipeToAdjacentCard:true, Script:'',
  CardWidth:600, CardHeight:450,
  Cards:[{ Id:'bc-card-1', Name:'C', Color:null, Alpha:1, dontSearch:false, Script:'',
    Widgets:[{ Id:'bc-widget-1', Name:'B', Number:1, Type:'button', zIndex:1,
      Anchors:['left-width','top-height'], Offsets:[10,100,10,30], visible:true,
      Variant:'rounded-rect', showName:true, autoHilite:true, enabled:true, sharedHilite:false,
      Text:'Hi', Script:'' }] }],
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
})
