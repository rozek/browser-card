/*******************************************************************************
*                                                                              *
*                      BrowserCard — MCP Connector                              *
*                                                                              *
*******************************************************************************/

import type { BC_Deck, BC_Card, BC_Widget } from './BrowserCard.js'
import {
  ScriptInstance, buildContext, buildScriptParams, raiseIdCounterTo,
} from './BrowserCard.js'

//----------------------------------------------------------------------------//
//                            context interface                                  //
//----------------------------------------------------------------------------//

/**** BCMCPContext — supplied by DeckView on every render cycle ****/

export interface BCMCPContext {
  getDeck ():          BC_Deck
  getCardIndex ():     number
  mutateDeck (fn: (Deck:BC_Deck) => void): void
  navigate (Card: string | number): void
  saveDeck ():         Promise<void>
  evalInContext (Expression: string): Promise<unknown>
}

//----------------------------------------------------------------------------//
//                             schema key sets                                   //
//----------------------------------------------------------------------------//

const DeckSchemaKeys = new Set([
  'Id','Name','readOnly','swipeToAdjacentCard','Script',
  'CardWidth','CardHeight','SnapToGrid','GridWidth','GridHeight',
  'Cards','Console_LineLimit','Console_CharLimit','Value',
])

const CardSchemaKeys = new Set([
  'Id','Name','Color','Alpha','dontSearch','Script','Widgets','Value',
])

const WidgetSchemaKeys = new Set([
  'Id','Name','Type','Variant','Anchors','Offsets',
  'visible','Script','Value',
  'showName','autoHilite','enabled','sharedHilite','Hilite','IconId',
  'lockText','scrolling','showLines','dontSearch','sharedText',
  'TextAlign','FontSize','FontWeight','Color',
  'FillColor','BorderColor','BorderWidth','ArrowStart','ArrowEnd',
  'Curvature','Sides','CornerRadius',
  'ImageData','actualWidth','actualHeight','Configuration',
])

//----------------------------------------------------------------------------//
//                             geometry helpers                                  //
//----------------------------------------------------------------------------//

type Anchors = [string, string]
type Offsets = [number, number, number, number]

/**** resolveRect — converts Anchors + Offsets to pixel coordinates ****/

function resolveRect (
  Anchors: Anchors, Offsets: Offsets, W: number, H: number
):{x:number, y:number, width:number, height:number} {
  let x: number, Width: number, y: number, Height: number

  switch (true) {
    case (Anchors[0] === 'left-width'):  x = Offsets[0]; Width = Offsets[1]; break
    case (Anchors[0] === 'left-right'):  x = Offsets[0]; Width = W-Offsets[0]-Offsets[1]; break
    default:  Width = Offsets[0]; x = W-Offsets[0]-Offsets[1]
  }
  switch (true) {
    case (Anchors[1] === 'top-height'): y = Offsets[2]; Height = Offsets[3]; break
    case (Anchors[1] === 'top-bottom'): y = Offsets[2]; Height = H-Offsets[2]-Offsets[3]; break
    default:  Height = Offsets[2]; y = H-Offsets[2]-Offsets[3]
  }

  return { x, y, width:Width, height:Height }
}

/**** offsetsFromRect — converts pixel coordinates back to Offsets ****/

function offsetsFromRect (
  x: number, y: number, w: number, h: number,
  Anchors: Anchors, W: number, H: number
):Offsets {
  let h0: number, h1: number, v0: number, v1: number

  switch (true) {
    case (Anchors[0] === 'left-width'):  h0 = x; h1 = w;     break
    case (Anchors[0] === 'left-right'):  h0 = x; h1 = W-x-w; break
    default:  h0 = w; h1 = W-x-w
  }
  switch (true) {
    case (Anchors[1] === 'top-height'):  v0 = y; v1 = h;     break
    case (Anchors[1] === 'top-bottom'):  v0 = y; v1 = H-y-h; break
    default:  v0 = h; v1 = H-y-h
  }

  return [ h0,h1,v0,v1 ]
}

//----------------------------------------------------------------------------//
//                               id generation                                  //
//----------------------------------------------------------------------------//

/**** nextCardID — generates a collision-free card id ****/

function nextCardID (Deck: BC_Deck):string {
  let Max = 0
  for (const Card of Deck.Cards) {
    const N = parseInt(Card.Id.replace('bc-card-', ''), 10)
    if (! isNaN(N)) { Max = Math.max(Max, N) }
  }
  raiseIdCounterTo(Max+1)    // keep the app's shared id counter from re-issuing this id
  return `bc-card-${Max+1}`
}

/**** nextWidgetID — generates a collision-free widget id ****/

function nextWidgetID (Deck: BC_Deck):string {
  let Max = 0
  for (const Card of Deck.Cards) {
    for (const Widget of Card.Widgets) {
      const N = parseInt(Widget.Id.replace('bc-widget-', ''), 10)
      if (! isNaN(N)) { Max = Math.max(Max, N) }
    }
  }
  raiseIdCounterTo(Max+1)    // keep the app's shared id counter from re-issuing this id
  return `bc-widget-${Max+1}`
}

//----------------------------------------------------------------------------//
//                              target resolution                                //
//----------------------------------------------------------------------------//

type RawTarget = 'deck' | { Card:BC_Card } | { Card:BC_Card, Widget:BC_Widget }

/**** resolveTarget — maps a target path string to the matching deck object ****/

function resolveTarget (Target: string, Deck: BC_Deck):RawTarget | null {
  if (Target === 'deck') { return 'deck' }

  const Parts  = Target.split('/')
  const Card   = Deck.Cards.find((c) => c.Id === Parts[0]) ?? null
  if (Card == null) { return null }
  if (Parts.length === 1) { return { Card } }

  const Widget = Card.Widgets.find((w) => w.Id === Parts[1]) ?? null
  if (Widget == null) { return null }
  return { Card, Widget }
}

//----------------------------------------------------------------------------//
//                              widget defaults                                  //
//----------------------------------------------------------------------------//

const WidgetDefaults: Record<string, Partial<BC_Widget>> = {
  button:  { Variant:'rounded-rect' as any, showName:true, autoHilite:true, enabled:true, sharedHilite:false },
  field:   { Variant:'opaque' as any, lockText:false, scrolling:false, showLines:false,
             dontSearch:false, sharedText:false, Value:'' },
  shape:   { Variant:'rectangle' as any, FillColor:'#ffffff', BorderColor:'#000000', BorderWidth:1 },
  picture: { Variant:'scale-aspect-fit' as any, ImageData:'', actualWidth:0, actualHeight:0, autoHilite:false },
  generic: {},
}

//----------------------------------------------------------------------------//
//                              MCP connector                                    //
//----------------------------------------------------------------------------//

export class MCPConnector {

  #URL:            string
  #Token:          string
  #Context:        BCMCPContext | null = null
  #WS:             WebSocket | null = null
  #reconnectTimer: ReturnType<typeof setTimeout> | null = null
  #prevCardName:   string | null = null

  constructor () {
    this.#URL   = localStorage.getItem('bc-mcp-url')   ?? ''
    this.#Token = localStorage.getItem('bc-mcp-token') ?? ''
  }

  /**** setContext — called by DeckView after every render to keep state current ****/

  setContext (Context: BCMCPContext | null):void {
    this.#Context = Context
    if ((Context != null) && this.#isConnected) {
      const CardName = Context.getDeck().Cards[Context.getCardIndex()]?.Name ?? null
      if (CardName !== this.#prevCardName) {
        this.#prevCardName = CardName
        this.#WS?.send(JSON.stringify({ type:'notify', event:'card_changed', cardName:CardName }))
      }
    }
  }

  /**** configure — applies new settings and reconnects (persistence handled by caller) ****/

  configure (URL: string, Token: string):void {
    this.#URL   = URL
    this.#Token = Token
    this.disconnect()
    if (URL !== '') { this.connect() }
  }

  /**** connect — opens the WebSocket connection if a URL is configured ****/

  connect ():void {
    if (this.#URL === '') { return }
    this.#connect()
  }

  /**** disconnect — closes the connection and stops auto-reconnect ****/

  disconnect ():void {
    if (this.#reconnectTimer != null) {
      clearTimeout(this.#reconnectTimer)
      this.#reconnectTimer = null
    }
    if (this.#WS != null) {
      this.#WS.onclose = null
      this.#WS.close()
      this.#WS = null
    }
  }

  /**** connectionStatus — returns a snapshot suitable for the status tool ****/

  get connectionStatus ():{connected:boolean, url:string} {
    return { connected:this.#isConnected, url:this.#URL }
  }

  get #isConnected ():boolean {
    return (this.#WS != null) && (this.#WS.readyState === WebSocket.OPEN)
  }

  /**** #connect — internal: establishes the WebSocket and wires handlers ****/

  #connect ():void {
    const WS = new WebSocket(this.#URL)
      WS.onopen = () => {
        const Deck     = this.#Context?.getDeck()
        const CardIdx  = this.#Context?.getCardIndex() ?? 0
        WS.send(JSON.stringify({
          type:        'hello',
          accessToken: this.#Token,
          deckName:    Deck?.Name         ?? '',
          currentCard: Deck?.Cards[CardIdx]?.Name ?? null,
        }))
      }

      WS.onmessage = async ({ data }) => {
        let Request: { id:string, method:string, params:Record<string,unknown> }
        try { Request = JSON.parse(data as string) } catch (Signal) { return }

        let result: unknown  = null
        let error:  string | null = null
        try {
          result = await this.#handle(Request.method, Request.params ?? {})
        } catch (Signal) {
          error = (Signal as Error).message
        }
        WS.send(JSON.stringify({ id:Request.id, result, error }))
      }

      WS.onclose = () => {
        this.#WS = null
        this.#reconnectTimer = setTimeout(() => this.#connect(), 3_000)
      }

      WS.onerror = () => { WS.close() }

    this.#WS = WS
  }

  /**** #ctx — throws when no deck is loaded ****/

  get #ctx ():BCMCPContext {
    if (this.#Context == null) { throw new Error('no deck loaded') }
    return this.#Context
  }

  //--------------------------------------------------------------------------//
  //                               dispatcher                                   //
  //--------------------------------------------------------------------------//

  /**** #handle — routes a method string to its handler ****/

  async #handle (Method: string, Params: Record<string,unknown>):Promise<unknown> {
    switch (true) {
      case (Method === 'deck_get'):        return this.#DeckGet()
      case (Method === 'deck_patch'):      return this.#DeckPatch(Params)
      case (Method === 'deck_save'):       return this.#DeckSave()
      case (Method === 'list_cards'):      return this.#listCards()
      case (Method === 'list_widgets'):    return this.#listWidgets(Params)
      case (Method === 'find'):            return this.#find(Params)
      case (Method === 'card_get'):        return this.#CardGet(Params)
      case (Method === 'card_patch'):      return this.#CardPatch(Params)
      case (Method === 'card_add'):        return this.#CardAdd(Params)
      case (Method === 'card_delete'):     return this.#CardDelete(Params)
      case (Method === 'card_reorder'):    return this.#CardReorder(Params)
      case (Method === 'widget_get'):      return this.#WidgetGet(Params)
      case (Method === 'widget_patch'):    return this.#WidgetPatch(Params)
      case (Method === 'widget_add'):      return this.#WidgetAdd(Params)
      case (Method === 'widget_delete'):   return this.#WidgetDelete(Params)
      case (Method === 'widget_transfer'): return this.#WidgetTransfer(Params)
      case (Method === 'widget_reorder'):  return this.#WidgetReorder(Params)
      case (Method === 'widget_get_rect'): return this.#WidgetGetRect(Params)
      case (Method === 'widget_set_rect'): return this.#WidgetSetRect(Params)
      case (Method === 'script_get'):      return this.#ScriptGet(Params)
      case (Method === 'script_set'):      return this.#ScriptSet(Params)
      case (Method === 'extras_get'):      return this.#ExtrasGet(Params)
      case (Method === 'extras_set'):      return this.#ExtrasSet(Params)
      case (Method === 'extras_delete'):   return this.#ExtrasDelete(Params)
      case (Method === 'live_eval'):       return this.#LiveEval(Params)
      case (Method === 'live_send'):       return this.#LiveSend(Params)
      case (Method === 'live_navigate'):   return this.#LiveNavigate(Params)
      case (Method === 'live_screenshot'): return this.#LiveScreenshot()
      default: throw new Error(`unknown method: ${Method}`)
    }
  }

  //--------------------------------------------------------------------------//
  //                              deck handlers                                 //
  //--------------------------------------------------------------------------//

  #DeckGet () {
    const Deck = this.#ctx.getDeck()
    return {
      Name:                Deck.Name,
      readOnly:            Deck.readOnly,
      swipeToAdjacentCard: Deck.swipeToAdjacentCard,
      Script:              Deck.Script,
      CardWidth:           Deck.CardWidth  ?? 600,
      CardHeight:          Deck.CardHeight ?? 450,
      SnapToGrid:          (Deck as any).SnapToGrid  ?? false,
      GridWidth:           (Deck as any).GridWidth   ?? 10,
      GridHeight:          (Deck as any).GridHeight  ?? 10,
    }
  }

  #DeckPatch (Params: Record<string,unknown>):null {
    const Props = (Params.props ?? {}) as Partial<BC_Deck>
    const Allowed = [
      'Name','readOnly','swipeToAdjacentCard','Script',
      'CardWidth','CardHeight','SnapToGrid','GridWidth','GridHeight',
    ] as const
    this.#ctx.mutateDeck((Deck) => {
      for (const Key of Allowed) {
        if (Key in Props) { (Deck as any)[Key] = (Props as any)[Key] }
      }
    })
    return null
  }

  async #DeckSave ():Promise<null> {
    await this.#ctx.saveDeck()
    return null
  }

  //--------------------------------------------------------------------------//
  //                          navigation handlers                               //
  //--------------------------------------------------------------------------//

  #listCards () {
    return this.#ctx.getDeck().Cards.map((Card) => ({   // position = array order
      id:           Card.Id,
      name:         Card.Name,
      widget_count: Card.Widgets.length,
      has_script:   Card.Script.trim() !== '',
    }))
  }

  #listWidgets (Params: Record<string,unknown>) {
    const Deck   = this.#ctx.getDeck()
    const CardID = Params.card_id as string
    const Card   = Deck.Cards.find((c) => c.Id === CardID)
    if (Card == null) { throw new Error(`card not found: ${CardID}`) }

    const W = Deck.CardWidth  ?? 600
    const H = Deck.CardHeight ?? 450

    return Card.Widgets.map((Widget) => {
      const Rect = resolveRect(
        Widget.Anchors as any as Anchors,
        Widget.Offsets as any as Offsets,
        W, H
      )
      return {
        id:      Widget.Id,
        name:    Widget.Name,
        type:    Widget.Type,
        variant: (Widget as any).Variant,
        visible: Widget.visible,
        rect:    Rect,
      }
    })
  }

  #find (Params: Record<string,unknown>) {
    const Deck   = this.#ctx.getDeck()
    const Query  = (Params.query ?? {}) as Record<string,unknown>
    const Scope  = (Query.scope as string) ?? 'all'
    const Results: unknown[] = []

    const nameRE   = Query.namePattern    ? new RegExp(Query.namePattern as string, 'i')    : null
    const scriptRE = Query.scriptContains ? new RegExp(Query.scriptContains as string, 'i') : null
    const valueStr = Query.valueContains as string | undefined
    const typeFilter = Query.widgetType as string | undefined

    const matchesCard = (Card: BC_Card) =>
      (! nameRE   || nameRE.test(Card.Name))   &&
      (! scriptRE || scriptRE.test(Card.Script))

    const matchesWidget = (Widget: BC_Widget) => {
      if (typeFilter && (Widget.Type !== typeFilter)) { return false }
      const Value = (Widget as any).Value as string ?? ''
      return (! nameRE   || nameRE.test(Widget.Name))   &&
             (! scriptRE || scriptRE.test(Widget.Script)) &&
             (! valueStr || Value.includes(valueStr))
    }

    if (Scope !== 'widgets') {
      for (const Card of Deck.Cards) {
        if (matchesCard(Card)) {
          Results.push({
            target:  Card.Id,
            type:    'card',
            name:    Card.Name,
            excerpt: Card.Script.slice(0, 120),
          })
        }
      }
    }

    if (Scope !== 'cards') {
      for (const Card of Deck.Cards) {
        for (const Widget of Card.Widgets) {
          if (matchesWidget(Widget)) {
            const Value = (Widget as any).Value as string ?? ''
            Results.push({
              target:  `${Card.Id}/${Widget.Id}`,
              type:    Widget.Type,
              name:    Widget.Name,
              excerpt: Value || Widget.Script.slice(0, 120),
            })
          }
        }
      }
    }

    return Results
  }

  //--------------------------------------------------------------------------//
  //                              card handlers                                 //
  //--------------------------------------------------------------------------//

  #CardGet (Params: Record<string,unknown>) {
    const Card = this.#requireCard(Params.card_id as string)
    return {
      Name:       Card.Name,
      Color:      (Card as any).Color  ?? null,
      Alpha:      (Card as any).Alpha  ?? 1,
      dontSearch: Card.dontSearch,
      Script:     Card.Script,
    }
  }

  #CardPatch (Params: Record<string,unknown>):null {
    const CardID = Params.card_id as string
    const Props  = (Params.props ?? {}) as Record<string,unknown>
    this.#ctx.mutateDeck((Deck) => {
      const Card = Deck.Cards.find((c) => c.Id === CardID)
      if (Card == null) { throw new Error(`card not found: ${CardID}`) }
      for (const Key of [ 'Name','Color','Alpha','dontSearch','Script' ]) {
        if (Key in Props) { (Card as any)[Key] = Props[Key] }
      }
    })
    return null
  }

  #CardAdd (Params: Record<string,unknown>):string {
    const Props    = (Params.props ?? {}) as Record<string,unknown>
    const Index    = Params.index as number | undefined
    let NewID      = ''
    this.#ctx.mutateDeck((Deck) => {
      NewID = nextCardID(Deck)
      const NewCard = {
        Id:         NewID,
        Name:       Props.Name       ?? 'New Card',
        Color:      Props.Color      ?? null,
        Alpha:      Props.Alpha      ?? 1,
        dontSearch: Props.dontSearch ?? false,
        Script:     Props.Script     ?? '',
        Widgets:    [],
      } as unknown as BC_Card
      Index == null
        ? Deck.Cards.push(NewCard)
        : Deck.Cards.splice(Index, 0, NewCard)
    })
    return NewID
  }

  #CardDelete (Params: Record<string,unknown>):null {
    const CardID = Params.card_id as string
    this.#ctx.mutateDeck((Deck) => {
      const Idx = Deck.Cards.findIndex((c) => c.Id === CardID)
      if (Idx < 0) { throw new Error(`card not found: ${CardID}`) }
      Deck.Cards.splice(Idx, 1)
    })
    return null
  }

  #CardReorder (Params: Record<string,unknown>):null {
    const CardID   = Params.card_id as string
    const NewIndex = Params.new_index as number
    this.#ctx.mutateDeck((Deck) => {
      const Idx = Deck.Cards.findIndex((c) => c.Id === CardID)
      if (Idx < 0) { throw new Error(`card not found: ${CardID}`) }
      const [ Card ] = Deck.Cards.splice(Idx, 1)
      Deck.Cards.splice(NewIndex, 0, Card)
    })
    return null
  }

  //--------------------------------------------------------------------------//
  //                             widget handlers                                //
  //--------------------------------------------------------------------------//

  #WidgetGet (Params: Record<string,unknown>) {
    const { Widget } = this.#requireWidget(Params.card_id as string, Params.widget_id as string)
    return { ...Widget }
  }

  #WidgetPatch (Params: Record<string,unknown>):null {
    const Props = (Params.props ?? {}) as Record<string,unknown>
    this.#ctx.mutateDeck((Deck) => {
      const { Widget } = this.#requireWidgetIn(
        Deck, Params.card_id as string, Params.widget_id as string
      )
      for (const [ Key, Value ] of Object.entries(Props)) {
        if (Key === 'Type') { continue }   // Type is immutable
        (Widget as any)[Key] = Value
      }
    })
    return null
  }

  #WidgetAdd (Params: Record<string,unknown>):string {
    const CardID = Params.card_id as string
    const Type   = Params.type as string
    const Props  = (Params.props ?? {}) as Record<string,unknown>
    const Rect   = Params.rect as { x:number, y:number, width:number, height:number } | undefined
    const Index  = Params.index as number | undefined   // 0-based stacking position
    let NewID    = ''

    this.#ctx.mutateDeck((Deck) => {
      const Card = Deck.Cards.find((c) => c.Id === CardID)
      if (Card == null) { throw new Error(`card not found: ${CardID}`) }

      NewID = nextWidgetID(Deck)
      const W = Deck.CardWidth  ?? 600
      const H = Deck.CardHeight ?? 450

      const Anc: Anchors = [ 'left-width','top-height' ]
      const DefaultRect  = Rect ?? { x:W/4, y:H/4, width:W/2, height:H/2 }
      const Offs         = offsetsFromRect(
        DefaultRect.x, DefaultRect.y, DefaultRect.width, DefaultRect.height, Anc, W, H
      )
      const NewWidget = {               // appended last ⇒ on top of the stack
        ...WidgetDefaults[Type] ?? {},
        ...Props,
        Id:      NewID,
        Name:    (Props.Name as string) ?? `${Type} ${Card.Widgets.length+1}`,
        Type,
        Anchors: Anc,
        Offsets: Offs,
        visible: Props.visible ?? true,
        Script:  Props.Script  ?? '',
      } as unknown as BC_Widget

      Index == null
        ? Card.Widgets.push(NewWidget)
        : Card.Widgets.splice(Math.max(0, Math.min(Card.Widgets.length, Math.round(Index))), 0, NewWidget)
    })
    return NewID
  }

  #WidgetDelete (Params: Record<string,unknown>):null {
    const CardID   = Params.card_id as string
    const WidgetID = Params.widget_id as string
    this.#ctx.mutateDeck((Deck) => {
      const Card = Deck.Cards.find((c) => c.Id === CardID)
      if (Card == null) { throw new Error(`card not found: ${CardID}`) }
      const Idx = Card.Widgets.findIndex((w) => w.Id === WidgetID)
      if (Idx < 0) { throw new Error(`widget not found: ${WidgetID}`) }
      Card.Widgets.splice(Idx, 1)
    })
    return null
  }

  #WidgetTransfer (Params: Record<string,unknown>):null {
    this.#ctx.mutateDeck((Deck) => {
      const Src = Deck.Cards.find((c) => c.Id === Params.src_card_id)
      const Dst = Deck.Cards.find((c) => c.Id === Params.dst_card_id)
      if (Src == null) { throw new Error(`source card not found: ${Params.src_card_id}`) }
      if (Dst == null) { throw new Error(`destination card not found: ${Params.dst_card_id}`) }
      const Idx = Src.Widgets.findIndex((w) => w.Id === Params.widget_id)
      if (Idx < 0) { throw new Error(`widget not found: ${Params.widget_id}`) }
      const [ Widget ] = Src.Widgets.splice(Idx, 1)
      Dst.Widgets.push(Widget)
    })
    return null
  }

  #WidgetReorder (Params: Record<string,unknown>):null {
    const CardID   = Params.card_id as string
    const WidgetID = Params.widget_id as string
    const NewIndex = Params.new_index as number   // 0-based stacking position
    this.#ctx.mutateDeck((Deck) => {
      const Card = Deck.Cards.find((c) => c.Id === CardID)
      if (Card == null) { throw new Error(`card not found: ${CardID}`) }
      const Idx = Card.Widgets.findIndex((w) => w.Id === WidgetID)
      if (Idx < 0) { throw new Error(`widget not found: ${WidgetID}`) }
      const [ Widget ] = Card.Widgets.splice(Idx, 1)
      const Target = Math.max(0, Math.min(Card.Widgets.length, Math.round(NewIndex)))
      Card.Widgets.splice(Target, 0, Widget)
    })
    return null
  }

  //--------------------------------------------------------------------------//
  //                            geometry handlers                               //
  //--------------------------------------------------------------------------//

  #WidgetGetRect (Params: Record<string,unknown>) {
    const Deck = this.#ctx.getDeck()
    const { Widget } = this.#requireWidgetIn(Deck, Params.card_id as string, Params.widget_id as string)
    const Rect = resolveRect(
      Widget.Anchors as any as Anchors,
      Widget.Offsets as any as Offsets,
      Deck.CardWidth  ?? 600,
      Deck.CardHeight ?? 450,
    )
    return { ...Rect, anchors:Widget.Anchors }
  }

  #WidgetSetRect (Params: Record<string,unknown>):null {
    const Rect    = Params.rect as { x:number, y:number, width:number, height:number }
    const Anchors = (Params.anchors as Anchors | undefined) ?? [ 'left-width','top-height' ]
    this.#ctx.mutateDeck((Deck) => {
      const { Widget } = this.#requireWidgetIn(Deck, Params.card_id as string, Params.widget_id as string)
      const W = Deck.CardWidth  ?? 600
      const H = Deck.CardHeight ?? 450
      Widget.Anchors = Anchors as any
      Widget.Offsets = offsetsFromRect(Rect.x, Rect.y, Rect.width, Rect.height, Anchors, W, H) as any
    })
    return null
  }

  //--------------------------------------------------------------------------//
  //                            scripting handlers                              //
  //--------------------------------------------------------------------------//

  #ScriptGet (Params: Record<string,unknown>):string {
    const Target = resolveTarget(Params.target as string, this.#ctx.getDeck())
    if (Target == null) { throw new Error(`target not found: ${Params.target}`) }
    if (Target === 'deck')       { return this.#ctx.getDeck().Script }
    if (! ('Widget' in Target))  { return Target.Card.Script }
    return Target.Widget.Script
  }

  #ScriptSet (Params: Record<string,unknown>):null {
    const TargetStr = Params.target as string
    const Script    = Params.script as string
    this.#ctx.mutateDeck((Deck) => {
      const Target = resolveTarget(TargetStr, Deck)
      if (Target == null) { throw new Error(`target not found: ${TargetStr}`) }
      if (Target === 'deck')      { Deck.Script = Script; return }
      if (! ('Widget' in Target)) { Target.Card.Script = Script; return }
      Target.Widget.Script = Script
    })
    return null
  }

  //--------------------------------------------------------------------------//
  //                              extras handlers                               //
  //--------------------------------------------------------------------------//

  #rawTarget (TargetStr: string, Deck: BC_Deck):Record<string,unknown> {
    const Target = resolveTarget(TargetStr, Deck)
    if (Target == null) { throw new Error(`target not found: ${TargetStr}`) }
    if (Target === 'deck')       { return Deck as any }
    if (! ('Widget' in Target))  { return Target.Card as any }
    return Target.Widget as any
  }

  #schemaKeysFor (TargetStr: string):Set<string> {
    if (TargetStr === 'deck')       { return DeckSchemaKeys }
    if (! TargetStr.includes('/'))  { return CardSchemaKeys }
    return WidgetSchemaKeys
  }

  #ExtrasGet (Params: Record<string,unknown>):Record<string,unknown> {
    const TargetStr  = Params.target as string
    const Raw        = this.#rawTarget(TargetStr, this.#ctx.getDeck())
    const SchemaKeys = this.#schemaKeysFor(TargetStr)
    const Extras: Record<string,unknown> = {}
    for (const [ Key, Value ] of Object.entries(Raw)) {
      if (! SchemaKeys.has(Key)) { Extras[Key] = Value }
    }
    return Extras
  }

  #ExtrasSet (Params: Record<string,unknown>):null {
    const TargetStr = Params.target as string
    const Key       = Params.key as string
    if (this.#schemaKeysFor(TargetStr).has(Key)) {
      throw new Error(`"${Key}" is a reserved schema key`)
    }
    this.#ctx.mutateDeck((Deck) => {
      this.#rawTarget(TargetStr, Deck)[Key] = Params.value
    })
    return null
  }

  #ExtrasDelete (Params: Record<string,unknown>):null {
    const TargetStr = Params.target as string
    const Key       = Params.key as string
    this.#ctx.mutateDeck((Deck) => {
      delete this.#rawTarget(TargetStr, Deck)[Key]
    })
    return null
  }

  //--------------------------------------------------------------------------//
  //                         live interaction handlers                          //
  //--------------------------------------------------------------------------//

  async #LiveEval (Params: Record<string,unknown>):Promise<unknown> {
    return this.#ctx.evalInContext(Params.expression as string)
  }

  async #LiveSend (Params: Record<string,unknown>):Promise<unknown> {
    const Target  = Params.target  as string
    const Message = Params.message as string
    const Args    = (Params.args as unknown[]) ?? []
    const argStr  = Args.length > 0 ? ', ' + Args.map((a) => JSON.stringify(a)).join(', ') : ''
    return this.#ctx.evalInContext(
      `Widget(${JSON.stringify(Target)})?.triggered(${JSON.stringify(Message)}${argStr})`
    )
  }

  async #LiveNavigate (Params: Record<string,unknown>):Promise<null> {
    this.#ctx.navigate(Params.card as string | number)
    return null
  }

  async #LiveScreenshot ():Promise<string | null> {
    const html2canvas = (globalThis as any).html2canvas as
      ((el:Element, opts?:Record<string,unknown>) => Promise<HTMLCanvasElement>) | undefined
    if (html2canvas == null) {
      throw new Error(
        'html2canvas not found — add ' +
        '<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script> ' +
        'to the page'
      )
    }
    const Canvas = document.querySelector('.bc-card-canvas') as HTMLElement | null
    if (Canvas == null) { throw new Error('card canvas element not found') }
    const Snapshot = await html2canvas(Canvas, { useCORS:true })
    return Snapshot.toDataURL('image/png')
  }

  //--------------------------------------------------------------------------//
  //                              private helpers                               //
  //--------------------------------------------------------------------------//

  #requireCard (CardID: string):BC_Card {
    const Card = this.#ctx.getDeck().Cards.find((c) => c.Id === CardID)
    if (Card == null) { throw new Error(`card not found: ${CardID}`) }
    return Card
  }

  #requireWidget (CardID: string, WidgetID: string):{ Card:BC_Card, Widget:BC_Widget } {
    return this.#requireWidgetIn(this.#ctx.getDeck(), CardID, WidgetID)
  }

  #requireWidgetIn (
    Deck: BC_Deck, CardID: string, WidgetID: string
  ):{ Card:BC_Card, Widget:BC_Widget } {
    const Card = Deck.Cards.find((c) => c.Id === CardID)
    if (Card == null) { throw new Error(`card not found: ${CardID}`) }
    const Widget = Card.Widgets.find((w) => w.Id === WidgetID)
    if (Widget == null) { throw new Error(`widget not found: ${WidgetID}`) }
    return { Card, Widget }
  }
}
