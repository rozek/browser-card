import { describe, it, expect, beforeEach } from 'vitest'
import { set, createStore } from 'idb-keyval'
import {
  deckShallBeRemembered, rememberCurrentDeck, setDeckRemembering,
} from '../src/BrowserCard'

const DeckStore = createStore('browser-card','decks')

function makeDeck (Name:string) {
  return {
    Id:'bc-deck-'+Name, Name, readOnly:false, swipeToAdjacentCard:true, Script:'',
    CardWidth:600, CardHeight:450,
    Cards:[{ Id:'bc-card-'+Name, Name:'C', Color:null, Alpha:1, dontSearch:false,
      Script:'', Widgets:[] }],
  }
}

beforeEach(() => {
  localStorage.removeItem('bc-remember-deck')
  localStorage.removeItem('bc-last-deck')
})

describe('remember-deck preference (opt-in, like the MCP "remember token")', () => {
  it('is off by default', () => {
    expect(deckShallBeRemembered()).toBe(false)
  })

  it('enabling stores the flag and the current deck key', () => {
    setDeckRemembering(true, 'bc-deck:Alpha')
    expect(deckShallBeRemembered()).toBe(true)
    expect(localStorage.getItem('bc-remember-deck')).toBe('1')
    expect(localStorage.getItem('bc-last-deck')).toBe('bc-deck:Alpha')
  })

  it('disabling clears both the flag and the pointer', () => {
    setDeckRemembering(true, 'bc-deck:Alpha')
    setDeckRemembering(false, 'bc-deck:Alpha')
    expect(deckShallBeRemembered()).toBe(false)
    expect(localStorage.getItem('bc-remember-deck')).toBeNull()
    expect(localStorage.getItem('bc-last-deck')).toBeNull()
  })

  it('rememberCurrentDeck only writes while enabled', () => {
    rememberCurrentDeck('bc-deck:Beta')                 // disabled ⇒ no write
    expect(localStorage.getItem('bc-last-deck')).toBeNull()

    setDeckRemembering(true, 'bc-deck:Alpha')
    rememberCurrentDeck('bc-deck:Beta')                 // enabled ⇒ pointer follows
    expect(localStorage.getItem('bc-last-deck')).toBe('bc-deck:Beta')
  })

  it('rememberCurrentDeck ignores an empty key', () => {
    setDeckRemembering(true, 'bc-deck:Alpha')
    rememberCurrentDeck('')
    expect(localStorage.getItem('bc-last-deck')).toBe('bc-deck:Alpha')   // unchanged
  })
})

describe('<bc-designer> restores the remembered deck only when enabled', () => {
  it('reopens the last deck when the option is on', async () => {
    await set('bc-deck:Remembered Deck', makeDeck('Remembered Deck'), DeckStore)
    setDeckRemembering(true, 'bc-deck:Remembered Deck')

    const el = document.createElement('bc-designer')
    document.body.appendChild(el)

    let ok = false
    for (let i = 0; i < 100; i++) {
      await new Promise((r) => setTimeout(r, 10))
      if ((el.textContent ?? '').includes('Remembered Deck')) { ok = true; break }
    }
    expect(ok).toBe(true)
    document.body.removeChild(el)
  })

  it('shows the default deck when the option is off', async () => {
    await set('bc-deck:Remembered Deck', makeDeck('Remembered Deck'), DeckStore)
    // option off (cleared in beforeEach), but a pointer is irrelevant without the flag
    localStorage.setItem('bc-last-deck', 'bc-deck:Remembered Deck')

    const el = document.createElement('bc-designer')
    document.body.appendChild(el)

    await new Promise((r) => setTimeout(r, 200))
    expect(el.textContent ?? '').not.toContain('Remembered Deck')
    document.body.removeChild(el)
  })

  it('also restores when a "name" attribute pins a default deck (the option wins)', async () => {
    await set('bc-deck:Pinned Default', makeDeck('Pinned Default'), DeckStore)
    await set('bc-deck:Resumed Deck',   makeDeck('Resumed Deck'),   DeckStore)
    setDeckRemembering(true, 'bc-deck:Resumed Deck')

    const el = document.createElement('bc-designer')
    el.setAttribute('name', 'Pinned Default')
    document.body.appendChild(el)

    let resumed = false
    for (let i = 0; i < 100; i++) {
      await new Promise((r) => setTimeout(r, 10))
      if ((el.textContent ?? '').includes('Resumed Deck')) { resumed = true; break }
    }
    expect(resumed).toBe(true)
    document.body.removeChild(el)
  })
})
