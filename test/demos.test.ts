import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { ValueIsDeck, resolveGeometry } from '../src/BrowserCard'

const Files = [ 'demos/Showcase.bc', 'demos/Tutorial.bc', 'FeatureTest.bc' ].filter(existsSync)

describe.each(Files)('demo deck %s', (File) => {
  const Deck = JSON.parse(readFileSync(File,'utf8'))

  it('is structurally a valid deck', () => {
    expect(ValueIsDeck(Deck)).toBe(true)
  })

  it('has unique card and widget ids', () => {
    const ids = new Set<string>()
    for (const Card of Deck.cards) {
      expect(ids.has(Card.id)).toBe(false); ids.add(Card.id)
      for (const W of Card.objects) { expect(ids.has(W.id)).toBe(false); ids.add(W.id) }
    }
  })

  it('has unique widget names per card', () => {
    for (const Card of Deck.cards) {
      const names = Card.objects.map((W:any) => W.name)
      expect(new Set(names).size).toBe(names.length)
    }
  })

  it('keeps left-width/top-height widgets within the canvas', () => {
    const CW = Deck.CardWidth ?? 600, CH = Deck.CardHeight ?? 450
    for (const Card of Deck.cards) for (const W of Card.objects) {
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
      if (Deck.script) compiles(Deck.script)
      for (const Card of Deck.cards) {
        if (Card.script) compiles(Card.script)
        for (const W of Card.objects) if (W.script) compiles(W.script)
      }
    }).not.toThrow()
  })
})
