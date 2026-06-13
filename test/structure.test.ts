import { describe, it, expect } from 'vitest'
import { ValueIsDeck, ValueIsCardJSON, ValueIsWidgetJSON } from '../src/BrowserCard'

const widget = () => ({
  id:'bc-widget-1', name:'W', number:1, type:'button', zIndex:1,
  Anchors:['left-width','top-height'], Offsets:[0,10,0,10], visible:true, script:'',
})
const card = () => ({ id:'bc-card-1', name:'C', color:null, alpha:1, dontSearch:false, script:'', objects:[widget()] })
const deck = () => ({ id:'bc-deck-1', name:'D', readOnly:false, swipeToAdjacentCard:true, script:'', cards:[card()] })

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
    const D:any = deck(); D.cards[0].objects[0].Offsets = [0,1,2]
    expect(ValueIsDeck(D)).toBe(false)
  })
  it('reject non-objects / wrong shape', () => {
    expect(ValueIsDeck(null)).toBe(false)
    expect(ValueIsDeck({ name:'no cards' })).toBe(false)
  })
  it('survives a JSON round-trip', () => {
    const D = JSON.parse(JSON.stringify(deck()))
    expect(ValueIsDeck(D)).toBe(true)
  })
})
