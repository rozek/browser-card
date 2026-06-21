import { describe, it, expect } from 'vitest'
import {
  newInternalId, adjustIdCounterFor, normalizedName, uniqueNameIn,
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

describe('adjustIdCounterFor', () => {
  it('lifts the counter above the highest existing numeric id', () => {
    const Deck:any = {
      Id:'bc-deck-9000', Name:'X', readOnly:false, swipeToAdjacentCard:true, Script:'',
      Cards:[{ Id:'bc-card-9100', Name:'C', Color:null, Alpha:1, dontSearch:false, Script:'',
        Widgets:[{ Id:'bc-widget-9999', Name:'W', Number:1, Type:'button', zIndex:1,
          Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Script:'' }] }],
    }
    adjustIdCounterFor(Deck)
    const next = Number(newInternalId('widget').split('-').at(-1))
    expect(next).toBeGreaterThan(9999)
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
