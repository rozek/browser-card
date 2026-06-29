import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { ValueIsDeck, resolveGeometry } from '../src/BrowserCard'

const Files = [ 'demos/Showcase.bc', 'demos/Tour.bc', 'FeatureTest.bc' ].filter(existsSync)

describe.each(Files)('demo deck %s', (File) => {
  const Deck = JSON.parse(readFileSync(File,'utf8'))

  it('is structurally a valid deck', () => {
    expect(ValueIsDeck(Deck)).toBe(true)
  })

  it('has unique card and widget ids', () => {
    const ids = new Set<string>()
    for (const Card of Deck.Cards) {
      expect(ids.has(Card.Id)).toBe(false); ids.add(Card.Id)
      for (const W of Card.Widgets) { expect(ids.has(W.Id)).toBe(false); ids.add(W.Id) }
    }
  })

  it('has unique widget names per card', () => {
    for (const Card of Deck.Cards) {
      const names = Card.Widgets.map((W:any) => W.Name)
      expect(new Set(names).size).toBe(names.length)
    }
  })

  it('keeps left-width/top-height widgets within the canvas', () => {
    const CW = Deck.CardWidth ?? 600, CH = Deck.CardHeight ?? 450
    for (const Card of Deck.Cards) for (const W of Card.Widgets) {
      if (W.Anchors[0] === 'left-width' && W.Anchors[1] === 'top-height') {
        const R = resolveGeometry(W.Anchors, W.Offsets, CW, CH)
        expect(R.left).toBeGreaterThanOrEqual(0)
        expect(R.top).toBeGreaterThanOrEqual(0)
        expect(R.left + R.width).toBeLessThanOrEqual(CW)
        expect(R.top + R.height).toBeLessThanOrEqual(CH)
      }
    }
  })

  it('every script compiles', () => {
    const compiles = (s:string) => { new Function('return (async () => {\n'+s+'\n})()') }
    expect(() => {
      if (Deck.Script) compiles(Deck.Script)
      for (const Card of Deck.Cards) {
        if (Card.Script) compiles(Card.Script)
        for (const W of Card.Widgets) if (W.Script) compiles(W.Script)
      }
    }).not.toThrow()
  })
})
