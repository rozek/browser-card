import { describe, it, expect } from 'vitest'
import { RGBHexOf, AlphaPercentOf, ColorFrom } from '../src/BrowserCard'

describe('RGBHexOf - extracts the #RRGGBB part for the colour picker', () => {
  it('keeps a 6-digit hex', () => {
    expect(RGBHexOf('#1d3461')).toBe('#1d3461')
  })
  it('drops the alpha of an 8-digit hex', () => {
    expect(RGBHexOf('#1d346180')).toBe('#1d3461')
    expect(RGBHexOf('#FFFFFF00')).toBe('#ffffff')
  })
  it('falls back to white for named/rgb/garbage', () => {
    expect(RGBHexOf('transparent')).toBe('#ffffff')
    expect(RGBHexOf('rgba(0,0,0,0.5)')).toBe('#ffffff')
    expect(RGBHexOf('nonsense')).toBe('#ffffff')
  })
})

describe('AlphaPercentOf - reads the opacity as 0..100', () => {
  it('treats null and "transparent" as fully transparent', () => {
    expect(AlphaPercentOf(null as unknown as string)).toBe(0)
    expect(AlphaPercentOf('transparent')).toBe(0)
  })
  it('treats a 6-digit hex / named colour as fully opaque', () => {
    expect(AlphaPercentOf('#1d3461')).toBe(100)
  })
  it('reads the alpha byte of an 8-digit hex', () => {
    expect(AlphaPercentOf('#ffffff00')).toBe(0)
    expect(AlphaPercentOf('#ffffffff')).toBe(100)
    expect(AlphaPercentOf('#ffffff80')).toBe(50)   // 0x80 = 128 ≈ 50%
  })
  it('reads the alpha of an rgba() colour', () => {
    expect(AlphaPercentOf('rgba(0,0,0,0.5)')).toBe(50)
  })
})

describe('ColorFrom - combines an RGB hex with an opacity into #RRGGBBAA', () => {
  it('appends the alpha byte', () => {
    expect(ColorFrom('#1d3461', 100)).toBe('#1d3461ff')
    expect(ColorFrom('#1d3461', 0)).toBe('#1d346100')
    expect(ColorFrom('#1d3461', 50)).toBe('#1d346180')   // 50% → 0x80
  })
  it('clamps out-of-range opacity', () => {
    expect(ColorFrom('#000000', 150)).toBe('#000000ff')
    expect(ColorFrom('#000000', -10)).toBe('#00000000')
  })
  it('tolerates a hex with or without leading #', () => {
    expect(ColorFrom('abcdef', 100)).toBe('#abcdefff')
  })
  it('round-trips with the split helpers (default card colour)', () => {
    const Default = '#ffffff00'
    expect(ColorFrom(RGBHexOf(Default), AlphaPercentOf(Default))).toBe(Default)
  })
})
