import { describe, it, expect } from 'vitest'
import { ValueIsDeck, ValueIsCardJSON, ValueIsWidgetJSON } from '../src/BrowserCard'

const widget = () => ({
  Id:'bc-widget-1', Name:'W', Number:1, Type:'button', zIndex:1,
  Anchors:['left-width','top-height'], Offsets:[0,10,0,10], visible:true, Script:'',
})
const card = () => ({ Id:'bc-card-1', Name:'C', Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[widget()] })
const deck = () => ({ Id:'bc-deck-1', Name:'D', readOnly:false, swipeToAdjacentCard:true, Script:'', Cards:[card()] })

describe('structural validators', () => {
  it('accept valid structures', () => {
    expect(ValueIsWidgetJSON(widget())).toBe(true)
    expect(ValueIsCardJSON(card())).toBe(true)
    expect(ValueIsDeck(deck())).toBe(true)
  })
  it('reject a widget without Anchors/Offsets', () => {
    const W:any = widget(); delete W.Anchors
    expect(ValueIsWidgetJSON(W)).toBe(false)
  })
  it('reject a deck whose card has a broken widget', () => {
    const D:any = deck(); D.Cards[0].Widgets[0].Offsets = [0,1,2]
    expect(ValueIsDeck(D)).toBe(false)
  })
  it('reject non-objects / wrong shape', () => {
    expect(ValueIsDeck(null)).toBe(false)
    expect(ValueIsDeck({ Name:'no cards' })).toBe(false)
  })
  it('survives a JSON round-trip', () => {
    const D = JSON.parse(JSON.stringify(deck()))
    expect(ValueIsDeck(D)).toBe(true)
  })
})
