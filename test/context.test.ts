import { describe, it, expect, vi } from 'vitest'
import { buildContext, buildScriptParams, ScriptInstance } from '../src/BrowserCard'

function makeCtx (overrides:any = {}) {
  const Cards = [{ Name:'A' },{ Name:'B' },{ Name:'C' }] as any
  const nav   = vi.fn()
  const Console = { print:vi.fn(), println:vi.fn(), clearConsole:vi.fn() }
  const me = overrides.me ?? null
  const onAnswer = overrides.onAnswer ?? ((_m:string,_b:string[],resolve:Function) => resolve('OK'))
  const onAsk    = overrides.onAsk    ?? ((_p:string,_d:string,resolve:Function) => resolve('typed'))
  const ctx = buildContext(
    {} as any, Cards, me, nav, onAnswer as any, onAsk as any, Console as any
  )
  return { ctx, nav, Console, Cards }
}

describe('buildContext - cards & navigation', () => {
  it('Card() by name and 0-based index, else null', () => {
    const { ctx } = makeCtx()
    expect(ctx.Card('B')).toMatchObject({ __navType:'card-name', __name:'B' })
    expect(ctx.Card(0)).toMatchObject({ __navType:'card-index', __index:0 })
    expect(ctx.Card(2)).toMatchObject({ __navType:'card-index', __index:2 })
    expect(ctx.Card('nope')).toBeNull()
    expect(ctx.Card(99)).toBeNull()
    expect(ctx.Card(-1)).toBeNull()
  })
  it('CardCount()', () => {
    const { ctx } = makeCtx()
    expect(ctx.CardCount()).toBe(3)
  })
  it('go() resolves refs, names and 0-based numbers to nav targets', () => {
    const { ctx, nav } = makeCtx()
    ctx.go(ctx.nextCard);  expect(nav).toHaveBeenLastCalledWith({ type:'next' })
    ctx.go('B');           expect(nav).toHaveBeenLastCalledWith({ type:'card-name', name:'B' })
    ctx.go(2);             expect(nav).toHaveBeenLastCalledWith({ type:'card-index', index:2 })
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

describe('buildContext - Widget()', () => {
  it('Widget() finds a widget on the current card by name/0-based index', () => {
    const me:any = { Card:{ WidgetList:[ { Name:'X' }, { Name:'Y' } ] } }
    const { ctx } = makeCtx({ me })
    expect(ctx.Widget('Y')).toMatchObject({ Name:'Y' })
    expect(ctx.Widget(0)).toMatchObject({ Name:'X' })
    expect(ctx.Widget(1)).toMatchObject({ Name:'Y' })
    expect(ctx.Widget('Z')).toBeNull()
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
    await inst.triggered('t')
    expect(seen.me).toBe(me)
    expect(seen.my).toBe(me)
    expect(seen.I).toBe(me)
  })
})

describe('buildScriptParams - trigger/triggered bindings', () => {
  it('injects "trigger" and "triggered" so scripts can fire events', async () => {
    const { ctx } = makeCtx()
    const inst = new ScriptInstance()
    const { Params, Args } = buildScriptParams(inst, ctx, 'card')
    expect(Params).toContain('trigger')
    expect(Params).toContain('triggered')

    await inst.run(
      "on('ping', (n) => n*2); on('go', async () => await triggered('ping', 21))",
      Params, Args
    )
    expect(await inst.triggered('go')).toBe(42)   // script reached the binding
  })

  it('a script-triggered event bubbles up to the linked parent', async () => {
    const { ctx } = makeCtx()
    const parent = new ScriptInstance()
    parent.on('save', () => 'saved-by-parent')
    const child = new ScriptInstance()
    child.linkToParent(() => parent)
    const { Params, Args } = buildScriptParams(child, ctx, 'widget')

    await inst_run_unhandled(child, Params, Args)
    expect(await child.triggered('save')).toBe('saved-by-parent')
  })
})

async function inst_run_unhandled (inst:ScriptInstance, Params:string[], Args:unknown[]) {
  await inst.run("on('local', () => 1)", Params, Args)   // no 'save' handler here
}

describe('buildContext - console', () => {
  it('print/println/clearConsole delegate to the deck console', () => {
    const { ctx, Console } = makeCtx()
    ctx.print('a'); ctx.println('b'); ctx.clearConsole()
    expect(Console.print).toHaveBeenCalledWith('a')
    expect(Console.println).toHaveBeenCalledWith('b')
    expect(Console.clearConsole).toHaveBeenCalled()
  })
})
