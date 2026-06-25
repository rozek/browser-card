import { describe, it, expect } from 'vitest'
import {
  newInternalId, prepareLoadedDeck, stripInternalIds, stripComputedGeometry,
  normalizeWidgetOrder, normalizedName, uniqueNameIn, flattenCards,
} from '../src/BrowserCard'

describe('newInternalId', () => {
  it('is monotonic and type-prefixed', () => {
    const a = newInternalId('widget')
    const b = newInternalId('widget')
    expect(a).toMatch(/^bc-widget-\d+$/)
    expect(b).toMatch(/^bc-widget-\d+$/)
    const na = Number(a.split('-').at(-1))
    const nb = Number(b.split('-').at(-1))
    expect(nb).toBe(na+1)
  })
})

const sampleDeck = ():any => ({
  Id:'bc-deck-9000', Name:'X', readOnly:false, swipeToAdjacentCard:true, Script:'',
  Cards:[{ Id:'bc-card-9100', Name:'C', Color:null, Alpha:1, dontSearch:false, Script:'',
    Widgets:[{ Id:'bc-widget-9999', Name:'W', Number:1, Type:'button', zIndex:1,
      Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Script:'',
      x:5, y:6, Width:10, Height:20, Position:[5,6], Size:[10,20],
      Geometry:{}, changeGeometryTo:() => [0,0,0,0] }] }],
})

describe('normalizeWidgetOrder', () => {
  it('orders widgets by legacy zIndex, then drops zIndex/Number', () => {
    const Deck:any = { Name:'D', Cards:[{ Name:'C', Widgets:[
      { Name:'top',    Type:'shape', Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Number:3, zIndex:3 },
      { Name:'bottom', Type:'shape', Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Number:1, zIndex:1 },
      { Name:'middle', Type:'shape', Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Number:2, zIndex:2 },
    ] }] }
    normalizeWidgetOrder(Deck)
    expect(Deck.Cards[0].Widgets.map((w:any) => w.Name)).toEqual([ 'bottom','middle','top' ])
    for (const w of Deck.Cards[0].Widgets) {
      expect('zIndex' in w).toBe(false)
      expect('Number' in w).toBe(false)
    }
  })

  it('leaves array order untouched when no legacy zIndex is present', () => {
    const Deck:any = { Name:'D', Cards:[{ Name:'C', Widgets:[
      { Name:'first',  Type:'shape', Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true },
      { Name:'second', Type:'shape', Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true },
    ] }] }
    normalizeWidgetOrder(Deck)
    expect(Deck.Cards[0].Widgets.map((w:any) => w.Name)).toEqual([ 'first','second' ])
  })
})

describe('prepareLoadedDeck', () => {
  it('assigns fresh runtime ids to deck, cards and widgets', () => {
    const Deck = sampleDeck()
    prepareLoadedDeck(Deck)
    expect(Deck.Id).toMatch(/^bc-deck-\d+$/)
    expect(Deck.Id).not.toBe('bc-deck-9000')
    expect(Deck.Cards[0].Id).toMatch(/^bc-card-\d+$/)
    expect(Deck.Cards[0].Widgets[0].Id).toMatch(/^bc-widget-\d+$/)
  })

  it('drops computed geometry fields', () => {
    const Deck = sampleDeck()
    prepareLoadedDeck(Deck)
    const Widget = Deck.Cards[0].Widgets[0]
    for (const Key of ['x','y','Width','Height','Position','Size','Geometry','changeGeometryTo']) {
      expect(Key in Widget).toBe(false)
    }
  })
})

describe('stripInternalIds', () => {
  it('removes ids from a clone without touching the original', () => {
    const Deck = sampleDeck()
    const Clone:any = stripInternalIds(Deck)
    expect('Id' in Clone).toBe(false)
    expect('Id' in Clone.Cards[0]).toBe(false)
    expect('Id' in Clone.Cards[0].Widgets[0]).toBe(false)
    expect(Deck.Id).toBe('bc-deck-9000')           // original is untouched
  })
})

describe('stripComputedGeometry', () => {
  it('deletes recomputed widget fields in place', () => {
    const Deck = sampleDeck()
    stripComputedGeometry(Deck)
    const Widget = Deck.Cards[0].Widgets[0]
    expect('Width' in Widget).toBe(false)
    expect('Geometry' in Widget).toBe(false)
    expect(Widget.Anchors).toEqual(['left-width','top-height'])   // sources kept
  })
})

describe('normalizedName', () => {
  it('returns a valid name unchanged', () => {
    expect(normalizedName('Header-2')).toBe('Header-2')
  })
  it('rejects an invalid name', () => {
    expect(() => normalizedName('a b')).toThrow()
  })
})

describe('uniqueNameIn', () => {
  it('appends a counter until unique', () => {
    const used = new Set(['Button','Button 2'])
    expect(uniqueNameIn('Fresh', used)).toBe('Fresh')
    expect(uniqueNameIn('Button', used)).toBe('Button 3')
  })

  it('honours a custom separator when appending', () => {
    const used = new Set(['Field','Field-2'])
    expect(uniqueNameIn('Field', used, '-')).toBe('Field-3')
  })

  it('counts up a trailing " n" instead of appending', () => {
    const used = new Set(['Shape 3','Shape 4'])
    expect(uniqueNameIn('Shape 3', used)).toBe('Shape 5')
  })

  it('counts up a trailing "-n" instead of appending', () => {
    const used = new Set(['Picture-2'])
    expect(uniqueNameIn('Picture-2', used)).toBe('Picture-3')
  })

  it('leaves a numbered name untouched when already unique', () => {
    expect(uniqueNameIn('Label 7', new Set(['Label 1']))).toBe('Label 7')
  })
})

// ---- nested cards (schema A) ----------------------------------------------

const nestedDeck = ():any => ({
  Id:'bc-deck-1', Name:'My/Deck', readOnly:false, swipeToAdjacentCard:true, Script:'',
  Cards:[{
    Id:'bc-card-1', Name:'Pa/rent', Color:null, Alpha:1, dontSearch:false, Script:'',
    Widgets:[{ Id:'bc-widget-1', Name:'Wid/get', Type:'button',
      Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Script:'' }],
    CardList:[{
      Id:'bc-card-2', Name:'Ch/ild', Color:null, Alpha:1, dontSearch:false, Script:'',
      Widgets:[{ Id:'bc-widget-2', Name:'Deep', Type:'shape',
        Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Script:'' }],
    }],
  }],
})

describe('prepareLoadedDeck — nested cards', () => {
  it('assigns fresh ids recursively through CardList', () => {
    const Deck = nestedDeck()
    prepareLoadedDeck(Deck)
    const ids = flattenCards(Deck).map((c:any) => c.Id)
    expect(ids).toHaveLength(2)
    expect(ids.every((id:string) => /^bc-card-\d+$/.test(id))).toBe(true)
    expect(new Set(ids).size).toBe(2)                       // unique
    expect(Deck.Cards[0].CardList[0].Widgets[0].Id).toMatch(/^bc-widget-\d+$/)
  })
  it('strips "/" from deck, card and widget names (incl. nested)', () => {
    const Deck = nestedDeck()
    prepareLoadedDeck(Deck)
    expect(Deck.Name).toBe('MyDeck')
    expect(Deck.Cards[0].Name).toBe('Parent')
    expect(Deck.Cards[0].Widgets[0].Name).toBe('Widget')
    expect(Deck.Cards[0].CardList[0].Name).toBe('Child')
  })
})

describe('stripInternalIds / stripComputedGeometry / normalizeWidgetOrder — nested', () => {
  it('strips ids through nested CardList', () => {
    const Clone:any = stripInternalIds(nestedDeck())
    expect('Id' in Clone.Cards[0].CardList[0]).toBe(false)
    expect('Id' in Clone.Cards[0].CardList[0].Widgets[0]).toBe(false)
  })
  it('normalizes nested widget order without crashing', () => {
    const Deck = nestedDeck()
    normalizeWidgetOrder(Deck)
    stripComputedGeometry(Deck)
    expect(Deck.Cards[0].CardList[0].Widgets[0].Name).toBe('Deep')
  })
})
