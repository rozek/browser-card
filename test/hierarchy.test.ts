import { describe, it, expect } from 'vitest'
import {
  sanitizeName, flattenCards, cardTreeIndex, pathOf,
  siblingListOf, moveWouldCycle, moveCardInTree,
} from '../src/BrowserCard'

const card = (Id:string, Name:string, CardList?:any[]) => ({
  Id, Name, Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[],
  ...(CardList ? { CardList } : {}),
})

// Deck:  A
//        ├─ B
//        │  └─ C
//        └─ D
const deck = ():any => ({
  Id:'bc-deck-1', Name:'D', readOnly:false, swipeToAdjacentCard:true, Script:'',
  Cards:[
    card('bc-card-A','A',[
      card('bc-card-B','B',[ card('bc-card-C','C') ]),
      card('bc-card-D','D'),
    ]),
  ],
})

describe('sanitizeName', () => {
  it('strips every "/" from a name', () => {
    expect(sanitizeName('a/b/c')).toBe('abc')
    expect(sanitizeName('Hello World')).toBe('Hello World')   // spaces stay
  })
  it('falls back when the result is empty', () => {
    expect(sanitizeName('/')).toBe('Card')
    expect(sanitizeName('', 'Widget')).toBe('Widget')
    expect(sanitizeName(null, 'Deck')).toBe('Deck')
  })
})

describe('flattenCards', () => {
  it('returns all cards depth-first, parents before children', () => {
    expect(flattenCards(deck()).map((c) => c.Id)).toEqual([
      'bc-card-A','bc-card-B','bc-card-C','bc-card-D',
    ])
  })
  it('equals Deck.Cards for a flat deck', () => {
    const D:any = { Cards:[ card('bc-card-1','x'), card('bc-card-2','y') ] }
    expect(flattenCards(D).map((c) => c.Id)).toEqual(['bc-card-1','bc-card-2'])
  })
})

describe('cardTreeIndex / pathOf', () => {
  it('computes parent, depth and "/"-joined path', () => {
    const Idx = cardTreeIndex(deck())
    expect(Idx.get('bc-card-A')!.Path).toBe('A')
    expect(Idx.get('bc-card-A')!.Depth).toBe(0)
    expect(Idx.get('bc-card-A')!.Parent).toBe(null)
    expect(Idx.get('bc-card-C')!.Path).toBe('A/B/C')
    expect(Idx.get('bc-card-C')!.Depth).toBe(2)
    expect(Idx.get('bc-card-C')!.Parent!.Id).toBe('bc-card-B')
  })
  it('pathOf resolves a single card', () => {
    const D = deck()
    const C = flattenCards(D).find((c) => c.Id === 'bc-card-C')!
    expect(pathOf(D, C)).toBe('A/B/C')
  })
})

describe('siblingListOf', () => {
  it('returns Deck.Cards for a root card', () => {
    const D = deck()
    expect(siblingListOf(D,'bc-card-A')).toBe(D.Cards)
  })
  it('returns the parent CardList for a nested card', () => {
    const D = deck()
    const list = siblingListOf(D,'bc-card-C')
    expect(list!.map((c:any) => c.Id)).toEqual(['bc-card-C'])
  })
  it('returns null for an unknown id', () => {
    expect(siblingListOf(deck(),'nope')).toBe(null)
  })
})

describe('moveWouldCycle', () => {
  it('detects moving a card under itself', () => {
    expect(moveWouldCycle(deck(),'bc-card-B','bc-card-B')).toBe(true)
  })
  it('detects moving a card under its own descendant', () => {
    expect(moveWouldCycle(deck(),'bc-card-A','bc-card-C')).toBe(true)
  })
  it('allows a valid move and a move to root', () => {
    expect(moveWouldCycle(deck(),'bc-card-D','bc-card-B')).toBe(false)
    expect(moveWouldCycle(deck(),'bc-card-C', null)).toBe(false)
  })
})

describe('moveCardInTree', () => {
  it('re-parents a card with its subtree', () => {
    const D = deck()
    expect(moveCardInTree(D,'bc-card-B','bc-card-D',0)).toBe(true)
    const Idx = cardTreeIndex(D)
    expect(Idx.get('bc-card-B')!.Parent!.Id).toBe('bc-card-D')
    expect(Idx.get('bc-card-C')!.Path).toBe('A/D/B/C')   // child travels along
  })
  it('moves a nested card to the deck root', () => {
    const D = deck()
    expect(moveCardInTree(D,'bc-card-C', null, 0)).toBe(true)
    expect(D.Cards.map((c:any) => c.Id)).toContain('bc-card-C')
    expect(cardTreeIndex(D).get('bc-card-C')!.Depth).toBe(0)
  })
  it('refuses a cyclic move and changes nothing', () => {
    const D = deck()
    const before = JSON.stringify(D)
    expect(moveCardInTree(D,'bc-card-A','bc-card-C',0)).toBe(false)
    expect(JSON.stringify(D)).toBe(before)
  })
  it('refuses an unknown card/parent', () => {
    expect(moveCardInTree(deck(),'nope', null, 0)).toBe(false)
    expect(moveCardInTree(deck(),'bc-card-D','nope', 0)).toBe(false)
  })
  it('reorders within the same sibling list', () => {
    const D = deck()                                     // B,D are siblings under A
    expect(moveCardInTree(D,'bc-card-D','bc-card-A',0)).toBe(true)
    expect(D.Cards[0].CardList.map((c:any) => c.Id)).toEqual(['bc-card-D','bc-card-B'])
  })
})

describe('cascade delete (structural)', () => {
  it('removing a subtree drops all its descendants', () => {
    const D = deck()
    const list = siblingListOf(D,'bc-card-B')!           // A's CardList
    list.splice(list.findIndex((c:any) => c.Id === 'bc-card-B'), 1)
    expect(flattenCards(D).map((c) => c.Id)).toEqual(['bc-card-A','bc-card-D'])
  })
})
