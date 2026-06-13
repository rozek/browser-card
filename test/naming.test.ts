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
      id:'bc-deck-9000', name:'X', readOnly:false, swipeToAdjacentCard:true, script:'',
      cards:[{ id:'bc-card-9100', name:'C', color:null, alpha:1, dontSearch:false, script:'',
        objects:[{ id:'bc-widget-9999', name:'W', number:1, type:'button', zIndex:1,
          Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, script:'' }] }],
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
})
