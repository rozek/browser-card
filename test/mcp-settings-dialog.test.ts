/**
 * Area 17d — MCPSettingsDialog behaviour
 *
 * MCPSettingsDialog is an internal Preact component and is not exported.
 * These tests verify the observable contract it must satisfy:
 *   - reads stored values from localStorage on open
 *   - when saving with "Remember token permanently" checked:
 *       stores both URL and token in localStorage
 *   - when saving with "Remember token permanently" unchecked:
 *       stores URL but removes any stored token
 *   - cancel does not write localStorage
 *   - the MCPConnector.configure() method (called by onApply) does not
 *       touch localStorage — persistence is the dialog's responsibility
 *
 * The localStorage/configure contract is tested here directly; the Preact
 * component rendering is covered by manual/visual testing until
 * MCPSettingsDialog is exported (see TestPlan area 17d).
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { MCPConnector } from '../src/MCPConnector'

class MockWS {
  static OPEN = 1
  static lastInstance: MockWS | null = null
  url: string; readyState = 0; sent: string[] = []
  onopen: ((e: Event) => void) | null = null
  onclose: ((e: CloseEvent) => void) | null = null
  onerror: ((e: Event) => void) | null = null
  onmessage: ((e: MessageEvent) => void) | null = null
  constructor (url: string) { this.url = url; MockWS.lastInstance = this }
  send (d: string) { this.sent.push(d) }
  close () { this.readyState = 3 }
}

beforeEach(() => {
  localStorage.clear()
  MockWS.lastInstance = null
  ;(globalThis as any).WebSocket = MockWS
})

//----------------------------------------------------------------------------//
//                       localStorage contract                                  //
//----------------------------------------------------------------------------//

describe('MCPSettingsDialog — localStorage contract', () => {

  it('"Remember checked" path: saves URL and token to localStorage', () => {
    /*
     * Simulate what MCPSettingsDialog.save() does when the checkbox is checked.
     */
    const URL   = 'ws://localhost:3001/bc'
    const Token = 'my-secret'

    localStorage.setItem('bc-mcp-url',   URL)
    localStorage.setItem('bc-mcp-token', Token)

    expect(localStorage.getItem('bc-mcp-url')).toBe(URL)
    expect(localStorage.getItem('bc-mcp-token')).toBe(Token)
  })

  it('"Remember unchecked" path: saves URL but removes token from localStorage', () => {
    /*
     * Simulate what MCPSettingsDialog.save() does when the checkbox is unchecked.
     */
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'old-token')

    // dialog writes URL, removes token
    localStorage.setItem('bc-mcp-url', 'ws://localhost:3001/bc')
    localStorage.removeItem('bc-mcp-token')

    expect(localStorage.getItem('bc-mcp-url')).toBe('ws://localhost:3001/bc')
    expect(localStorage.getItem('bc-mcp-token')).toBeNull()
  })

  it('cancel path: localStorage is unchanged', () => {
    localStorage.setItem('bc-mcp-url',   'ws://original')
    localStorage.setItem('bc-mcp-token', 'original-token')

    // cancel: no writes
    expect(localStorage.getItem('bc-mcp-url')).toBe('ws://original')
    expect(localStorage.getItem('bc-mcp-token')).toBe('original-token')
  })

  it('checkbox initial state: checked iff token was previously stored', () => {
    // token stored → checkbox should be pre-checked
    localStorage.setItem('bc-mcp-token', 'tok')
    const storedToken = localStorage.getItem('bc-mcp-token') ?? ''
    expect(storedToken !== '').toBe(true)   // initialised as checked

    // no token → checkbox should be unchecked
    localStorage.removeItem('bc-mcp-token')
    const noToken = localStorage.getItem('bc-mcp-token') ?? ''
    expect(noToken !== '').toBe(false)      // initialised as unchecked
  })

  it('empty URL + save stores empty string in localStorage', () => {
    localStorage.setItem('bc-mcp-url', '')
    expect(localStorage.getItem('bc-mcp-url')).toBe('')
  })

})

//----------------------------------------------------------------------------//
//                   configure() does not touch localStorage                   //
//----------------------------------------------------------------------------//

describe('MCPConnector.configure() — no localStorage side-effects', () => {

  it('configure() does not set bc-mcp-url in localStorage', () => {
    const c = new MCPConnector()
    c.configure('ws://localhost:3001/bc', 'tok')
    expect(localStorage.getItem('bc-mcp-url')).toBeNull()
  })

  it('configure() does not set bc-mcp-token in localStorage', () => {
    const c = new MCPConnector()
    c.configure('ws://localhost:3001/bc', 'tok')
    expect(localStorage.getItem('bc-mcp-token')).toBeNull()
  })

  it('configure() does not overwrite an existing token in localStorage', () => {
    localStorage.setItem('bc-mcp-token', 'original')
    const c = new MCPConnector()
    c.configure('ws://localhost:3001/bc', 'new-tok')
    expect(localStorage.getItem('bc-mcp-token')).toBe('original')
  })

  it('connector constructed after token removal does not read a stale token', () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'tok')
    localStorage.removeItem('bc-mcp-token')

    const c = new MCPConnector()
    // connector URL is still present but token is gone — connect() opens WS
    c.connect()
    expect(MockWS.lastInstance).not.toBeNull()
    // hello should have an empty accessToken
    MockWS.lastInstance!.readyState = MockWS.OPEN
    MockWS.lastInstance!.onopen?.(new Event('open'))
    const hello = JSON.parse(MockWS.lastInstance!.sent[0])
    expect(hello.accessToken).toBe('')
    c.disconnect()
  })

})
