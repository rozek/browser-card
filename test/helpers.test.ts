import { describe, it, expect } from 'vitest'
import {
  EOLCount, StringFromArguments, escapedForHTML, resolveBehaviorUrl,
} from '../src/BrowserCard'

describe('console helpers', () => {
  it('EOLCount', () => {
    expect(EOLCount('')).toBe(0)
    expect(EOLCount('no newline')).toBe(0)
    expect(EOLCount('a\nb\nc')).toBe(2)
  })
  it('StringFromArguments formats mixed types', () => {
    expect(StringFromArguments([1,'x',true])).toBe('1xtrue')
    expect(StringFromArguments([null,undefined])).toBe('(null)(undefined)')
    expect(StringFromArguments(['x'], true)).toBe('x\n')
    expect(StringFromArguments([() => 1])).toBe('(function)')
  })
})

describe('escapedForHTML', () => {
  it('escapes the five HTML-sensitive characters', () => {
    expect(escapedForHTML(`& < > " '`)).toBe('&amp; &lt; &gt; &quot; &#39;')
  })
  it('round-trips JSON through a DOM attribute', () => {
    const json = JSON.stringify({ a:'<b> & "c"', d:["'e'"] })
    const el = document.createElement('div')
    el.innerHTML = `<span data-x="${escapedForHTML(json)}"></span>`
    expect(el.querySelector('span')!.getAttribute('data-x')).toBe(json)
  })
})

describe('resolveBehaviorUrl', () => {
  it('passes full URLs through', () => {
    expect(resolveBehaviorUrl('https://x.y/z.js','widget')).toBe('https://x.y/z.js')
  })
  it('resolves a bare name to the repo behaviors folder (lowercase)', () => {
    expect(resolveBehaviorUrl('Blinker','widget'))
      .toBe('https://rozek.github.io/browser-card/behaviors/widgets/Blinker.js')
    expect(resolveBehaviorUrl('X','deck'))
      .toBe('https://rozek.github.io/browser-card/behaviors/decks/X.js')
    expect(resolveBehaviorUrl('X','card'))
      .toBe('https://rozek.github.io/browser-card/behaviors/cards/X.js')
  })
  it('resolves an absolute path against the origin', () => {
    expect(resolveBehaviorUrl('/b/x.js','widget')).toBe(window.location.origin + '/b/x.js')
  })
  it('resolves a relative path against the page', () => {
    expect(resolveBehaviorUrl('./x.js','widget')).toBe(new URL('./x.js', window.location.href).href)
  })
})
