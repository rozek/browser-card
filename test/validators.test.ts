import { describe, it, expect } from 'vitest'
import {
  ValueIsName, ValueIsIdentifier, ValueIsLocation, ValueIsDimension,
  ValueIsAnchors, ValueIsOffsets, ValueIsColor,
  ValueIsTime, ValueIsDate, ValueIsMonth,
  ValueIsSerializableValue, ValueIsSerializableObject,
  acceptableNumberInRange, acceptableInteger, acceptableBoolean, acceptableColor,
} from '../src/BrowserCard'

describe('basic value validators', () => {
  it('ValueIsName', () => {
    expect(ValueIsName('Hello')).toBe(true)
    expect(ValueIsName('a-b_c2')).toBe(true)
    expect(ValueIsName('1bad')).toBe(false)
    expect(ValueIsName('with space')).toBe(false)
    expect(ValueIsName(42)).toBe(false)
  })
  it('ValueIsIdentifier', () => {
    expect(ValueIsIdentifier('$x_1')).toBe(true)
    expect(ValueIsIdentifier('1x')).toBe(false)
  })
  it('ValueIsLocation / ValueIsDimension', () => {
    expect(ValueIsLocation(-5)).toBe(true)
    expect(ValueIsLocation(NaN)).toBe(false)
    expect(ValueIsLocation(Infinity)).toBe(false)
    expect(ValueIsDimension(0)).toBe(true)
    expect(ValueIsDimension(-1)).toBe(false)
  })
})

describe('geometry validators', () => {
  it('ValueIsAnchors', () => {
    expect(ValueIsAnchors(['left-width','top-height'])).toBe(true)
    expect(ValueIsAnchors(['nope','top-height'])).toBe(false)
    expect(ValueIsAnchors(['left-width'])).toBe(false)
  })
  it('ValueIsOffsets', () => {
    expect(ValueIsOffsets([0,1,2,3])).toBe(true)
    expect(ValueIsOffsets([0,1,2])).toBe(false)
    expect(ValueIsOffsets([0,1,2,'x'])).toBe(false)
  })
})

describe('format validators', () => {
  it('ValueIsColor', () => {
    expect(ValueIsColor('#1d6fd8')).toBe(true)
    expect(ValueIsColor('red')).toBe(true)
    expect(ValueIsColor('rgb(0,0,0)')).toBe(true)
    expect(ValueIsColor('not a color!!')).toBe(false)
  })
  it('date/time patterns', () => {
    expect(ValueIsTime('12:30')).toBe(true)
    expect(ValueIsTime('1230')).toBe(false)
    expect(ValueIsDate('2026-06-12')).toBe(true)
    expect(ValueIsMonth('2026-06')).toBe(true)
    expect(ValueIsDate('2026/06/12')).toBe(false)
  })
})

describe('serializable validators', () => {
  it('accepts plain nested data', () => {
    expect(ValueIsSerializableValue({ a:[1,2,{ b:'x' }], c:null })).toBe(true)
    expect(ValueIsSerializableObject({ a:1 })).toBe(true)
  })
  it('rejects functions', () => {
    expect(ValueIsSerializableValue({ f:() => 1 })).toBe(false)
  })
})

describe('acceptables coerce or reject', () => {
  it('acceptableNumberInRange', () => {
    expect(acceptableNumberInRange('5', 0, 10)).toBe(5)
    expect(acceptableNumberInRange(11, 0, 10)).toBeUndefined()
    expect(acceptableNumberInRange('x', 0, 10)).toBeUndefined()
  })
  it('acceptableInteger', () => {
    expect(acceptableInteger('7')).toBe(7)
    expect(acceptableInteger('7.5')).toBeUndefined()
  })
  it('acceptableBoolean', () => {
    expect(acceptableBoolean('true')).toBe(true)
    expect(acceptableBoolean('false')).toBe(false)
    expect(acceptableBoolean(true)).toBe(true)
    expect(acceptableBoolean('maybe')).toBeUndefined()
  })
  it('acceptableColor', () => {
    expect(acceptableColor('#ffffff')).toBe('#ffffff')
    expect(acceptableColor('zzz!!')).toBeUndefined()
  })
})
