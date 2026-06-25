import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { MCPConnector } from '../src/MCPConnector'
import type { BCMCPContext } from '../src/MCPConnector'
import type { BC_Deck, BC_Card } from '../src/BrowserCard'
import { flattenCards } from '../src/BrowserCard'

//----------------------------------------------------------------------------//
//                            fake WebSocket                                    //
//----------------------------------------------------------------------------//

class MockWS {
  static CONNECTING = 0
  static OPEN       = 1
  static CLOSING    = 2
  static CLOSED     = 3

  static lastInstance: MockWS | null = null

  url:       string
  readyState = MockWS.CONNECTING
  sent:      string[] = []

  onopen:    ((e: Event) => void)         | null = null
  onmessage: ((e: MessageEvent) => void)  | null = null
  onclose:   ((e: CloseEvent) => void)    | null = null
  onerror:   ((e: Event) => void)         | null = null

  constructor (url: string) {
    this.url = url
    MockWS.lastInstance = this
  }

  send (data: string) { this.sent.push(data) }

  close () {
    this.readyState = MockWS.CLOSED
    this.onclose?.(new CloseEvent('close'))
  }

  triggerOpen () {
    this.readyState = MockWS.OPEN
    this.onopen?.(new Event('open'))
  }

  triggerMessage (data: unknown) {
    this.onmessage?.(
      new MessageEvent('message', { data: JSON.stringify(data) })
    )
  }

  triggerClose () {
    this.readyState = MockWS.CLOSED
    this.onclose?.(new CloseEvent('close'))
  }
}

/**** helper: resolve pending microtasks ****/
const tick = () => new Promise<void>((r) => setTimeout(r, 0))

/**** helper: parse last sent message ****/
const lastSent = (ws: MockWS) => JSON.parse(ws.sent[ws.sent.length - 1])

//----------------------------------------------------------------------------//
//                            fake BCMCPContext                                 //
//----------------------------------------------------------------------------//

function makeDeck (): BC_Deck {
  return {
    Id: 'bc-deck-1', Name: 'Test', readOnly: false,
    swipeToAdjacentCard: true, Script: '',
    CardWidth: 600, CardHeight: 450,
    Cards: [{
      Id: 'bc-card-1', Name: 'Card 1',
      Color: null, Alpha: 1, dontSearch: false, Script: '',
      Widgets: [{
        Id:      'bc-widget-1', Name: 'button 1', Number: 1,
        Type:    'button', zIndex: 1,
        Anchors: ['left-width', 'top-height'] as any,
        Offsets: [10, 100, 10, 30] as any,
        visible: true, Script: '',
        Variant: 'rounded-rect', showName: true,
        autoHilite: true, enabled: true, sharedHilite: false,
      } as any],
    } as any],
  } as any
}

function makeCtx (Deck: BC_Deck, cardIndex = 0): BCMCPContext {
  let savedDeck = Deck
  return {
    getDeck:       () => savedDeck,
    getCardIndex:  () => cardIndex,
    mutateDeck:    (fn) => { fn(savedDeck) },
    navigate:      vi.fn(),
    saveDeck:      vi.fn().mockResolvedValue(undefined),
    evalInContext: vi.fn().mockResolvedValue('eval-result'),
  }
}

/**** helper: send a request and wait for response ****/
async function invoke (
  ws: MockWS, method: string, params: Record<string,unknown> = {}
): Promise<{ result: unknown; error: string | null }> {
  ws.triggerMessage({ id: 'req-1', method, params })
  await tick()
  return lastSent(ws)
}

//----------------------------------------------------------------------------//
//                              test setup                                      //
//----------------------------------------------------------------------------//

beforeEach(() => {
  MockWS.lastInstance = null
  localStorage.clear()
  ;(globalThis as any).WebSocket = MockWS
})

afterEach(() => {
  delete (globalThis as any).WebSocket
  vi.useRealTimers()
})

//============================================================================//
//                        17a — connection management                           //
//============================================================================//

describe('MCPConnector — connection management', () => {

  it('constructor reads URL and token from localStorage', () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'secret')
    const c = new MCPConnector()
    expect(c.connectionStatus.url).toBe('ws://localhost:3001/bc')
    expect(c.connectionStatus.connected).toBe(false)  // not yet connected
  })

  it('connect() with a stored URL opens a WebSocket', () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'secret')
    const c = new MCPConnector()
    c.connect()
    expect(MockWS.lastInstance).not.toBeNull()
    expect(MockWS.lastInstance!.url).toBe('ws://localhost:3001/bc')
  })

  it('connect() without URL is a no-op', () => {
    const c = new MCPConnector()
    c.connect()
    expect(MockWS.lastInstance).toBeNull()
  })

  it('connectionStatus.connected is true after onopen', () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'secret')
    const c = new MCPConnector()
    c.connect()
    MockWS.lastInstance!.triggerOpen()
    expect(c.connectionStatus.connected).toBe(true)
  })

  it('disconnect() closes the socket and stops reconnect', () => {
    vi.useFakeTimers()
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'secret')
    const c = new MCPConnector()
    c.connect()
    const ws = MockWS.lastInstance!
    ws.triggerOpen()
    c.disconnect()
    expect(ws.readyState).toBe(MockWS.CLOSED)
    MockWS.lastInstance = null
    vi.advanceTimersByTime(5_000)          // no reconnect timer should fire
    expect(MockWS.lastInstance).toBeNull()
  })

  it('configure() updates URL/token and reconnects', () => {
    const c = new MCPConnector()
    c.configure('ws://localhost:3001/bc', 'tok')
    expect(MockWS.lastInstance).not.toBeNull()
    expect(MockWS.lastInstance!.url).toBe('ws://localhost:3001/bc')
  })

  it('configure() does NOT touch localStorage', () => {
    const c = new MCPConnector()
    c.configure('ws://localhost:3001/bc', 'tok')
    expect(localStorage.getItem('bc-mcp-url')).toBeNull()
    expect(localStorage.getItem('bc-mcp-token')).toBeNull()
  })

  it('configure("") disconnects and does not reconnect', () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'secret')
    const c = new MCPConnector()
    c.connect()
    const firstWS = MockWS.lastInstance!
    firstWS.triggerOpen()
    MockWS.lastInstance = null
    c.configure('', 'tok')
    expect(firstWS.readyState).toBe(MockWS.CLOSED)
    expect(MockWS.lastInstance).toBeNull()
  })

  it('auto-reconnects 3 s after an unexpected close', () => {
    vi.useFakeTimers()
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'secret')
    const c = new MCPConnector()
    c.connect()
    const ws = MockWS.lastInstance!
    ws.triggerOpen()
    MockWS.lastInstance = null

    ws.triggerClose()                       // unexpected close — fires registered onclose
    expect(MockWS.lastInstance).toBeNull()  // timer not yet elapsed
    vi.advanceTimersByTime(3_000)
    expect(MockWS.lastInstance).not.toBeNull()  // reconnected
    c.disconnect()
  })

})

//============================================================================//
//                          17b — WebSocket protocol                            //
//============================================================================//

describe('MCPConnector — WebSocket protocol', () => {

  it('sends hello with token, deckName and currentCard on open', () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'my-token')
    const c   = new MCPConnector()
    const Deck = makeDeck()
    c.setContext(makeCtx(Deck))
    c.connect()
    MockWS.lastInstance!.triggerOpen()
    const msg = lastSent(MockWS.lastInstance!)
    expect(msg.type).toBe('hello')
    expect(msg.accessToken).toBe('my-token')
    expect(msg.deckName).toBe('Test')
    expect(msg.currentCard).toBe('Card 1')
  })

  it('responds with { id, result } for a known method', async () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'tok')
    const c = new MCPConnector()
    c.setContext(makeCtx(makeDeck()))
    c.connect()
    const ws = MockWS.lastInstance!
    ws.triggerOpen()
    ws.sent = []

    const resp = await invoke(ws, 'deck_get')
    expect(resp.id).toBe('req-1')
    expect(resp.error).toBeNull()
    expect((resp.result as any).Name).toBe('Test')
  })

  it('responds with { id, error } for an unknown method', async () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'tok')
    const c = new MCPConnector()
    c.setContext(makeCtx(makeDeck()))
    c.connect()
    const ws = MockWS.lastInstance!
    ws.triggerOpen()
    ws.sent = []

    const resp = await invoke(ws, 'no_such_method')
    expect(resp.id).toBe('req-1')
    expect(typeof resp.error).toBe('string')
    expect(resp.result).toBeNull()
  })

  it('sends card_changed notification when context card changes', () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'tok')
    const c   = new MCPConnector()
    const Deck = makeDeck()
    Deck.Cards.push({
      Id:'bc-card-2', Name:'Card 2',
      Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[],
    } as any)
    c.setContext(makeCtx(Deck, 0))  // current card = 'Card 1'
    c.connect()
    const ws = MockWS.lastInstance!
    ws.triggerOpen()
    ws.sent = []

    c.setContext(makeCtx(Deck, 1))  // change to 'Card 2'
    const msg = lastSent(ws)
    expect(msg.type).toBe('notify')
    expect(msg.event).toBe('card_changed')
    expect(msg.cardName).toBe('Card 2')
  })

  it('does not send notification when card name is unchanged', () => {
    localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
    localStorage.setItem('bc-mcp-token', 'tok')
    const c   = new MCPConnector()
    const Deck = makeDeck()
    c.connect()
    const ws = MockWS.lastInstance!
    ws.triggerOpen()
    c.setContext(makeCtx(Deck, 0))  // first call while connected — initialises prevCardName
    ws.sent = []

    c.setContext(makeCtx(Deck, 0))  // same card — no notification expected
    expect(ws.sent).toHaveLength(0)
  })

})

//============================================================================//
//                          17c — tool handlers                                 //
//============================================================================//

async function withConnector (
  fn: (ws: MockWS, ctx: BCMCPContext, Deck: BC_Deck) => Promise<void>
) {
  localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
  localStorage.setItem('bc-mcp-token', 'tok')
  const c   = new MCPConnector()
  const Deck = makeDeck()
  const ctx  = makeCtx(Deck)
  c.setContext(ctx)
  c.connect()
  const ws = MockWS.lastInstance!
  ws.triggerOpen()
  ws.sent = []
  await fn(ws, ctx, Deck)
  c.disconnect()
}

describe('MCPConnector — tool handlers', () => {

  it('connectionStatus property works without context', () => {
    // connection_status is answered server-side in the MCP layer, not via WebSocket.
    // The connector exposes it as a plain property for the MCP server to read.
    localStorage.setItem('bc-mcp-url', 'ws://localhost:3001/bc')
    const c = new MCPConnector()
    expect(c.connectionStatus.connected).toBe(false)
    expect(c.connectionStatus.url).toBe('ws://localhost:3001/bc')
    c.connect()
    MockWS.lastInstance!.triggerOpen()
    expect(c.connectionStatus.connected).toBe(true)
    c.disconnect()
    expect(c.connectionStatus.connected).toBe(false)
  })

  it('deck_get returns DeckSchemaKeys fields (no Cards, no Id)', async () => {
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'deck_get')
      const r = resp.result as any
      expect(r.Name).toBe('Test')
      expect(r.CardWidth).toBe(600)
      expect(r.Cards).toBeUndefined()
      expect(r.Id).toBeUndefined()
    })
  })

  it('deck_patch merges allowed keys and ignores Id/Cards', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      await invoke(ws, 'deck_patch', { props:{ Name:'Changed', Id:'x', Cards:[] } })
      expect(Deck.Name).toBe('Changed')
      expect(Deck.Id).toBe('bc-deck-1')     // unchanged
      expect(Deck.Cards).toHaveLength(1)    // unchanged
    })
  })

  it('deck_save calls ctx.saveDeck()', async () => {
    await withConnector(async (ws, ctx) => {
      await invoke(ws, 'deck_save')
      expect(ctx.saveDeck).toHaveBeenCalled()
    })
  })

  it('list_cards returns all cards with index and widget count', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      Deck.Cards.push({
        Id:'bc-card-2', Name:'Card 2',
        Color:null, Alpha:1, dontSearch:false, Script:'has script', Widgets:[],
      } as any)
      const resp = await invoke(ws, 'list_cards')
      const list = resp.result as any[]
      expect(list).toHaveLength(2)
      expect(list[0]).toMatchObject({ id:'bc-card-1', name:'Card 1', widget_count:1 })
      expect(list[1]).toMatchObject({ id:'bc-card-2', name:'Card 2', widget_count:0, has_script:true })
      expect('index' in list[0]).toBe(false)
    })
  })

  it('card_get returns card props (no Id, no Widgets)', async () => {
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'card_get', { card_id:'bc-card-1' })
      const r = resp.result as any
      expect(r.Name).toBe('Card 1')
      expect(r.Id).toBeUndefined()
      expect(r.Widgets).toBeUndefined()
    })
  })

  it('card_get returns error for unknown card', async () => {
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'card_get', { card_id:'bc-card-99' })
      expect(typeof resp.error).toBe('string')
    })
  })

  it('card_patch merges allowed CardSchemaKeys; Id and Widgets are not touched', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      await invoke(ws, 'card_patch', { card_id:'bc-card-1', props:{ Name:'Renamed', Id:'hack', Widgets:[] } })
      const Card = Deck.Cards[0]
      expect(Card.Name).toBe('Renamed')
      expect(Card.Id).toBe('bc-card-1')
      expect(Card.Widgets).toHaveLength(1)
    })
  })

  it('card_add inserts a new card with a unique id', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      const resp = await invoke(ws, 'card_add', { props:{ Name:'New' } })
      expect(resp.error).toBeNull()
      const newId = resp.result as string
      expect(newId).toMatch(/^bc-card-/)
      expect(newId).not.toBe('bc-card-1')
      expect(Deck.Cards.find((c) => c.Id === newId)).toBeDefined()
    })
  })

  it('card_delete removes the card', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      Deck.Cards.push({ Id:'bc-card-2', Name:'C2', Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[] } as any)
      await invoke(ws, 'card_delete', { card_id:'bc-card-2' })
      expect(Deck.Cards.find((c) => c.Id === 'bc-card-2')).toBeUndefined()
    })
  })

  it('card_delete returns error for unknown card', async () => {
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'card_delete', { card_id:'bc-card-99' })
      expect(typeof resp.error).toBe('string')
    })
  })

  it('live_navigate calls ctx.navigate()', async () => {
    await withConnector(async (ws, ctx) => {
      await invoke(ws, 'live_navigate', { card:'Card 1' })
      expect(ctx.navigate).toHaveBeenCalledWith('Card 1')
    })
  })

  it('list_widgets returns widgets for a card', async () => {
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'list_widgets', { card_id:'bc-card-1' })
      const list = resp.result as any[]
      expect(list).toHaveLength(1)
      expect(list[0]).toMatchObject({ id:'bc-widget-1', name:'button 1', type:'button' })
    })
  })

  it('widget_get returns widget fields (spread)', async () => {
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'widget_get', { card_id:'bc-card-1', widget_id:'bc-widget-1' })
      const r = resp.result as any
      expect(r.Id).toBe('bc-widget-1')
      expect(r.Type).toBe('button')
    })
  })

  it('widget_patch merges props; Type is immutable', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      await invoke(ws, 'widget_patch', {
        card_id:'bc-card-1', widget_id:'bc-widget-1',
        props:{ Name:'Renamed Widget', Type:'field' },
      })
      const w = Deck.Cards[0].Widgets[0] as any
      expect(w.Name).toBe('Renamed Widget')
      expect(w.Type).toBe('button')   // immutable
    })
  })

  it('widget_add inserts a new widget with a unique id', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      const resp = await invoke(ws, 'widget_add', {
        card_id:'bc-card-1', type:'field',
      })
      expect(resp.error).toBeNull()
      const newId = resp.result as string
      expect(newId).toMatch(/^bc-widget-/)
      expect(newId).not.toBe('bc-widget-1')
      expect(Deck.Cards[0].Widgets.find((w) => w.Id === newId)).toBeDefined()
    })
  })

  it('widget_add with index inserts at the given stacking position', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      const resp = await invoke(ws, 'widget_add', {
        card_id:'bc-card-1', type:'field', index:0,    // insert at the back
      })
      const newId = resp.result as string
      expect(Deck.Cards[0].Widgets[0].Id).toBe(newId)             // now first
      expect(Deck.Cards[0].Widgets[1].Id).toBe('bc-widget-1')     // pushed back
    })
  })

  it('widget_delete removes the widget', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      await invoke(ws, 'widget_delete', { card_id:'bc-card-1', widget_id:'bc-widget-1' })
      expect(Deck.Cards[0].Widgets).toHaveLength(0)
    })
  })

  it('widget_get_rect / widget_set_rect round-trip preserves geometry', async () => {
    await withConnector(async (ws) => {
      // get current rect
      const r1 = await invoke(ws, 'widget_get_rect', { card_id:'bc-card-1', widget_id:'bc-widget-1' })
      const rect = (r1.result as any)
      expect(rect.x).toBe(10)
      expect(rect.y).toBe(10)
      expect(rect.width).toBe(100)
      expect(rect.height).toBe(30)

      // move and resize
      await invoke(ws, 'widget_set_rect', {
        card_id:'bc-card-1', widget_id:'bc-widget-1',
        rect:{ x:50, y:60, width:200, height:80 },
      })

      // re-read and verify
      const r2 = await invoke(ws, 'widget_get_rect', { card_id:'bc-card-1', widget_id:'bc-widget-1' })
      const rect2 = (r2.result as any)
      expect(rect2.x).toBeCloseTo(50)
      expect(rect2.y).toBeCloseTo(60)
      expect(rect2.width).toBeCloseTo(200)
      expect(rect2.height).toBeCloseTo(80)
    })
  })

  it('extras_get returns only non-schema keys', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      (Deck as any).customProp = 'hello'
      const resp = await invoke(ws, 'extras_get', { target:'deck' })
      const r = resp.result as any
      expect(r.customProp).toBe('hello')
      expect(r.Name).toBeUndefined()
    })
  })

  it('extras_set writes a non-schema key', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      await invoke(ws, 'extras_set', { target:'deck', key:'myExtra', value:42 })
      expect((Deck as any).myExtra).toBe(42)
    })
  })

  it('extras_set rejects schema keys', async () => {
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'extras_set', { target:'deck', key:'Name', value:'hack' })
      expect(typeof resp.error).toBe('string')
    })
  })

  it('extras_delete removes an extra key', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      (Deck as any).toRemove = 'bye'
      await invoke(ws, 'extras_delete', { target:'deck', key:'toRemove' })
      expect('toRemove' in Deck).toBe(false)
    })
  })

  it('live_eval delegates to ctx.evalInContext', async () => {
    await withConnector(async (ws, ctx) => {
      const resp = await invoke(ws, 'live_eval', { expression:'1+1' })
      expect(ctx.evalInContext).toHaveBeenCalledWith('1+1')
      expect(resp.result).toBe('eval-result')
    })
  })

  it('live_send constructs a Widget().triggered() call and delegates to evalInContext', async () => {
    await withConnector(async (ws, ctx) => {
      await invoke(ws, 'live_send', { target:'button 1', message:'click', args:[1, 'a'] })
      expect(ctx.evalInContext).toHaveBeenCalledWith(
        `Widget("button 1")?.triggered("click", 1, "a")`
      )
    })
  })

  it('live_screenshot throws when html2canvas is absent', async () => {
    delete (globalThis as any).html2canvas
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'live_screenshot')
      expect(typeof resp.error).toBe('string')
      expect(resp.error).toContain('html2canvas')
    })
  })

  it('script_get returns the deck script for target "deck"', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      Deck.Script = 'on("ready", () => {})'
      const resp = await invoke(ws, 'script_get', { target:'deck' })
      expect(resp.result).toBe('on("ready", () => {})')
    })
  })

  it('script_set writes the card script', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      await invoke(ws, 'script_set', { target:'bc-card-1', script:'// hello' })
      expect(Deck.Cards[0].Script).toBe('// hello')
    })
  })

  it('card_reorder moves a card to a new position', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      Deck.Cards.push({ Id:'bc-card-2', Name:'C2', Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[] } as any)
      await invoke(ws, 'card_reorder', { card_id:'bc-card-2', new_index:0 })
      expect(Deck.Cards[0].Id).toBe('bc-card-2')
      expect(Deck.Cards[1].Id).toBe('bc-card-1')
    })
  })

  it('widget_transfer moves a widget between cards', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      Deck.Cards.push({ Id:'bc-card-2', Name:'C2', Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[] } as any)
      await invoke(ws, 'widget_transfer', {
        src_card_id:'bc-card-1', dst_card_id:'bc-card-2', widget_id:'bc-widget-1',
      })
      expect(Deck.Cards[0].Widgets).toHaveLength(0)
      expect(Deck.Cards[1].Widgets).toHaveLength(1)
      expect(Deck.Cards[1].Widgets[0].Id).toBe('bc-widget-1')
    })
  })

  it('widget_reorder moves a widget within its card (0-based stacking)', async () => {
    await withConnector(async (ws, _ctx, Deck) => {
      Deck.Cards[0].Widgets.push({
        Id:'bc-widget-2', Name:'button 2', Type:'button',
        Anchors:['left-width','top-height'] as any, Offsets:[0,1,0,1] as any,
        visible:true, Script:'',
      } as any)
      // widget-1 starts at index 0 (back); move it to the front (index 1)
      const resp = await invoke(ws, 'widget_reorder', {
        card_id:'bc-card-1', widget_id:'bc-widget-1', new_index:1,
      })
      expect(resp.error).toBeNull()
      expect(Deck.Cards[0].Widgets.map((w) => w.Id)).toEqual([ 'bc-widget-2','bc-widget-1' ])
    })
  })

  it('widget_reorder returns an error for an unknown widget', async () => {
    await withConnector(async (ws) => {
      const resp = await invoke(ws, 'widget_reorder', {
        card_id:'bc-card-1', widget_id:'bc-widget-99', new_index:0,
      })
      expect(typeof resp.error).toBe('string')
    })
  })

})

//============================================================================//
//                          nested cards (schema A)                            //
//============================================================================//

// Card 1 ├─ Child A ─ Grandchild
//        └─ Child B
function makeNestedDeck (): BC_Deck {
  const card = (Id:string, Name:string, CardList?:any[]):any => ({
    Id, Name, Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[],
    ...(CardList ? { CardList } : {}),
  })
  return {
    Id:'bc-deck-1', Name:'Test', readOnly:false, swipeToAdjacentCard:true, Script:'',
    CardWidth:600, CardHeight:450,
    Cards:[ card('bc-card-1','Card 1',[
      card('bc-card-2','Child A',[ card('bc-card-3','Grandchild') ]),
      card('bc-card-4','Child B'),
    ]) ],
  } as any
}

async function withDeck (Deck: BC_Deck, fn: (ws: MockWS, Deck: BC_Deck) => Promise<void>) {
  localStorage.setItem('bc-mcp-url',   'ws://localhost:3001/bc')
  localStorage.setItem('bc-mcp-token', 'tok')
  const c = new MCPConnector()
  c.setContext(makeCtx(Deck))
  c.connect()
  const ws = MockWS.lastInstance!
  ws.triggerOpen(); ws.sent = []
  await fn(ws, Deck)
  c.disconnect()
}

const findCard = (Deck: BC_Deck, Id: string):BC_Card =>
  flattenCards(Deck).find((c) => c.Id === Id)!

describe('MCPConnector — nested cards', () => {
  it('list_cards traverses the tree with parent_id / depth / path', async () => {
    await withDeck(makeNestedDeck(), async (ws) => {
      const rows = (await invoke(ws, 'list_cards')).result as any[]
      expect(rows.map((r) => r.id)).toEqual([ 'bc-card-1','bc-card-2','bc-card-3','bc-card-4' ])
      const gc = rows.find((r) => r.id === 'bc-card-3')
      expect(gc.parent_id).toBe('bc-card-2')
      expect(gc.depth).toBe(2)
      expect(gc.path).toBe('Card 1/Child A/Grandchild')
      expect(rows.find((r) => r.id === 'bc-card-2').child_count).toBe(1)
    })
  })

  it('card_get reaches a nested card; card_patch strips "/" from the name', async () => {
    await withDeck(makeNestedDeck(), async (ws, Deck) => {
      expect(((await invoke(ws, 'card_get', { card_id:'bc-card-3' })).result as any).Name).toBe('Grandchild')
      await invoke(ws, 'card_patch', { card_id:'bc-card-3', props:{ Name:'a/b/c' } })
      expect(findCard(Deck,'bc-card-3').Name).toBe('abc')
    })
  })

  it('card_add inserts under a given parent', async () => {
    await withDeck(makeNestedDeck(), async (ws, Deck) => {
      const id = (await invoke(ws, 'card_add', { parent_id:'bc-card-4', props:{ Name:'New' } })).result as string
      expect(findCard(Deck,'bc-card-4').CardList!.map((c) => c.Id)).toEqual([ id ])
    })
  })

  it('card_delete removes the whole subtree (cascade)', async () => {
    await withDeck(makeNestedDeck(), async (ws, Deck) => {
      await invoke(ws, 'card_delete', { card_id:'bc-card-2' })   // Child A + Grandchild
      expect(flattenCards(Deck).map((c) => c.Id)).toEqual([ 'bc-card-1','bc-card-4' ])
    })
  })

  it('card_move re-parents a card and rejects a cycle', async () => {
    await withDeck(makeNestedDeck(), async (ws, Deck) => {
      const ok = await invoke(ws, 'card_move', { card_id:'bc-card-4', parent_id:'bc-card-2', index:0 })
      expect(ok.error).toBeNull()
      expect(findCard(Deck,'bc-card-2').CardList!.some((c) => c.Id === 'bc-card-4')).toBe(true)

      const bad = await invoke(ws, 'card_move', { card_id:'bc-card-1', parent_id:'bc-card-3', index:0 })
      expect(typeof bad.error).toBe('string')           // would create a cycle
    })
  })

  it('card_reorder reorders within the sibling list', async () => {
    await withDeck(makeNestedDeck(), async (ws, Deck) => {
      await invoke(ws, 'card_reorder', { card_id:'bc-card-4', new_index:0 })
      expect(findCard(Deck,'bc-card-1').CardList!.map((c) => c.Id)).toEqual([ 'bc-card-4','bc-card-2' ])
    })
  })
})
