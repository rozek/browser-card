import { describe, it, expect, vi } from 'vitest'
import { buildContext } from '../src/BrowserCard'

function makeCtx (overrides:any = {}) {
  const Cards = [{ name:'A' },{ name:'B' },{ name:'C' }] as any
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
    expect(ctx.card('B')).toMatchObject({ __navType:'card-name', __name:'B' })
    expect(ctx.card(1)).toMatchObject({ __navType:'card-index', __index:0 })
    expect(ctx.card('nope')).toBeNull()
    expect(ctx.card(99)).toBeNull()
  })
  it('cardNumber()/cardCount()', () => {
    const { ctx } = makeCtx({ index:2 })
    expect(ctx.cardNumber()).toBe(3)     // 1-based
    expect(ctx.cardCount()).toBe(3)
  })
  it('go() resolves refs, names and numbers to nav targets', () => {
    const { ctx, nav } = makeCtx()
    ctx.go(ctx.nextCard);  expect(nav).toHaveBeenLastCalledWith({ type:'next' })
    ctx.go('B');           expect(nav).toHaveBeenLastCalledWith({ type:'card-name', name:'B' })
    ctx.go(2);             expect(nav).toHaveBeenLastCalledWith({ type:'card-index', index:1 })
    ctx.go(ctx.card('C')); expect(nav).toHaveBeenLastCalledWith({ type:'card-name', name:'C' })
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

describe('buildContext - widget() & send()', () => {
  it('widget() finds a widget on the current card by name/index', () => {
    const me:any = { Card:{ WidgetList:[ { name:'X' }, { name:'Y' } ] } }
    const { ctx } = makeCtx({ me })
    expect(ctx.widget('Y')).toMatchObject({ name:'Y' })
    expect(ctx.widget(1)).toMatchObject({ name:'X' })
    expect(ctx.widget('Z')).toBeNull()
  })
  it('send() resolves false when the target has no script instance', async () => {
    const me:any = { Card:{ WidgetList:[ { name:'X' } ] } }
    const { ctx } = makeCtx({ me })
    expect(await ctx.send('X','click')).toBe(false)
    expect(await ctx.send('missing','click')).toBe(false)
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
