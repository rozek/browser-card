import { describe, it, expect, vi } from 'vitest'
import { buildContext, ScriptInstance } from '../src/BrowserCard'

function makeCtx (overrides:any = {}) {
  const Cards = [{ Name:'A' },{ Name:'B' },{ Name:'C' }] as any
  const nav   = vi.fn()
  const Console = { print:vi.fn(), println:vi.fn(), clearConsole:vi.fn() }
  const CardIndexRef = { current: overrides.index ?? 1 }
  const me = overrides.me ?? null
  const onAnswer = overrides.onAnswer ?? ((_m:string,_b:string[],resolve:Function) => resolve('OK'))
  const onAsk    = overrides.onAsk    ?? ((_p:string,_d:string,resolve:Function) => resolve('typed'))
  const ctx = buildContext(
    {} as any, Cards, me, nav, onAnswer as any, onAsk as any, Console as any, CardIndexRef
  )
  return { ctx, nav, Console, Cards }
}

describe('buildContext - cards & navigation', () => {
  it('card() by name and 1-based index, else null', () => {
    const { ctx } = makeCtx()
    expect(ctx.Card('B')).toMatchObject({ __navType:'card-name', __name:'B' })
    expect(ctx.Card(1)).toMatchObject({ __navType:'card-index', __index:0 })
    expect(ctx.Card('nope')).toBeNull()
    expect(ctx.Card(99)).toBeNull()
  })
  it('CardNumber()/CardCount()', () => {
    const { ctx } = makeCtx({ index:2 })
    expect(ctx.CardNumber()).toBe(3)     // 1-based
    expect(ctx.CardCount()).toBe(3)
  })
  it('go() resolves refs, names and numbers to nav targets', () => {
    const { ctx, nav } = makeCtx()
    ctx.go(ctx.nextCard);  expect(nav).toHaveBeenLastCalledWith({ type:'next' })
    ctx.go('B');           expect(nav).toHaveBeenLastCalledWith({ type:'card-name', name:'B' })
    ctx.go(2);             expect(nav).toHaveBeenLastCalledWith({ type:'card-index', index:1 })
    ctx.go(ctx.Card('C')); expect(nav).toHaveBeenLastCalledWith({ type:'card-name', name:'C' })
  })
})

describe('buildContext - dialogs resolve with values', () => {
  it('answer() resolves with the chosen button', async () => {
    const { ctx } = makeCtx({ onAnswer:(_m:string,b:string[],r:Function) => r(b[1]) })
    expect(await ctx.answer('q','Yes','No')).toBe('No')
  })
  it('ask() resolves with the entered text (or null)', async () => {
    const yes = makeCtx({ onAsk:(_p:string,_d:string,r:Function) => r('hi') })
    expect(await yes.ctx.ask('name?')).toBe('hi')
    const cancel = makeCtx({ onAsk:(_p:string,_d:string,r:Function) => r(null) })
    expect(await cancel.ctx.ask('name?')).toBeNull()
  })
})

describe('buildContext - Widget() & send()', () => {
  it('Widget() finds a widget on the current card by name/index', () => {
    const me:any = { Card:{ WidgetList:[ { Name:'X' }, { Name:'Y' } ] } }
    const { ctx } = makeCtx({ me })
    expect(ctx.Widget('Y')).toMatchObject({ Name:'Y' })
    expect(ctx.Widget(1)).toMatchObject({ Name:'X' })
    expect(ctx.Widget('Z')).toBeNull()
  })
  it('send() resolves false when the target has no script instance', async () => {
    const me:any = { Card:{ WidgetList:[ { Name:'X' } ] } }
    const { ctx } = makeCtx({ me })
    expect(await ctx.send('X','click')).toBe(false)
    expect(await ctx.send('missing','click')).toBe(false)
  })
})

describe('buildContext - me / my / I are synonyms', () => {
  it('all three reference the same proxy', () => {
    const me:any = { Name:'Self' }
    const { ctx } = makeCtx({ me })
    expect(ctx.me).toBe(me)
    expect(ctx.my).toBe(me)
    expect((ctx as any).I).toBe(me)
  })

  it('all three are actually injected as script arguments (usable in code)', async () => {
    const me:any = { Name:'Self' }
    const { ctx } = makeCtx({ me })
    // mirror buildScriptParams: context keys become function parameters
    const Params = ['on', ...Object.keys(ctx), 'seen']
    const inst   = new ScriptInstance()
    const seen:any = {}
    const Args   = [inst.on.bind(inst), ...Object.values(ctx), seen]
    await inst.run("on('t', () => { seen.me = me; seen.my = my; seen.I = I })", Params, Args)
    await inst.dispatch('t')
    expect(seen.me).toBe(me)
    expect(seen.my).toBe(me)
    expect(seen.I).toBe(me)
  })
})

describe('buildContext - console', () => {
  it('print/println/clearConsole delegate to the deck console', () => {
    const { ctx, Console } = makeCtx()
    ctx.print('a'); ctx.println('b'); ctx.clearConsole()
    expect(Console.print).toHaveBeenCalledWith('a')
    expect(Console.println).toHaveBeenCalledWith('b')
    expect(Console.clearConsole).toHaveBeenCalled()
  })
})
