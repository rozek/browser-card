import { describe, it, expect } from 'vitest'
import { resolveGeometry, computeOffsets } from '../src/BrowserCard'

const Hs = ['left-width','left-right','width-right'] as const
const Vs = ['top-height','top-bottom','height-bottom'] as const
const W = 600, H = 450

describe('resolveGeometry', () => {
  it('left-width / top-height = direct position+size', () => {
    const R = resolveGeometry(['left-width','top-height'], [10,100,20,50], W, H)
    expect(R).toEqual({ left:10, top:20, width:100, height:50 })
  })
  it('left-right computes width from both margins', () => {
    const R = resolveGeometry(['left-right','top-height'], [10,30,0,40], W, H)
    expect(R.left).toBe(10)
    expect(R.width).toBe(W-10-30)
  })
  it('width-right computes left from right margin', () => {
    const R = resolveGeometry(['width-right','top-height'], [100,30,0,40], W, H)
    expect(R.width).toBe(100)
    expect(R.left).toBe(W-100-30)
  })
  it('height-bottom computes top from bottom margin', () => {
    const R = resolveGeometry(['left-width','height-bottom'], [0,40,30,10], W, H)
    expect(R.height).toBe(30)
    expect(R.top).toBe(H-30-10)
  })
})

describe('computeOffsets is the inverse of resolveGeometry', () => {
  for (const h of Hs) for (const v of Vs) {
    it(`round-trips for [${h}, ${v}]`, () => {
      const Anchors = [h,v] as [typeof h, typeof v]
      const Offsets = [40,120,30,80] as [number,number,number,number]
      const R  = resolveGeometry(Anchors, Offsets, W, H)
      const O2 = computeOffsets(R.left, R.top, R.width, R.height, Anchors, W, H)
      const R2 = resolveGeometry(Anchors, O2, W, H)
      expect(R2).toEqual(R)            // same on-screen rect after the round-trip
    })
  }
})

describe('anchor switch keeps the pixel geometry', () => {
  it('left-width → width-right preserves the rect', () => {
    const before = resolveGeometry(['left-width','top-height'], [50,120,0,0], W, H)
    const O = computeOffsets(before.left, before.top, before.width, before.height,
      ['width-right','top-height'], W, H)
    const after = resolveGeometry(['width-right','top-height'], O, W, H)
    expect(after.left).toBeCloseTo(before.left)
    expect(after.width).toBeCloseTo(before.width)
  })
})
