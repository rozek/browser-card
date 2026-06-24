import { describe, it, expect, vi } from 'vitest'
import { makeWidgetProxy, makeCardProxy } from '../src/BrowserCard'

function setup () {
  const Obj:any = {
    Id:'bc-widget-1', Name:'W', Type:'shape',
    Anchors:['left-width','top-height'], Offsets:[10,100,20,50], visible:true, Script:'',
  }
  const SizeRef = { current:{ W:600, H:450 } }
  const forceUpdate = vi.fn()
  const proxy = makeWidgetProxy(Obj, SizeRef as any, {} as any, {} as any, forceUpdate)
  return { Obj, proxy, forceUpdate }
}

describe('makeWidgetProxy', () => {
  it('exposes live geometry getters', () => {
    const { proxy } = setup()
    expect(proxy.x).toBe(10)
    expect(proxy.y).toBe(20)
    expect(proxy.Width).toBe(100)
    expect(proxy.Height).toBe(50)
  })

  it('writing a property updates the descriptor and forces a re-render', () => {
    const { Obj, proxy, forceUpdate } = setup()
    proxy.visible = false
    expect(Obj.visible).toBe(false)
    expect(forceUpdate).toHaveBeenCalledTimes(1)
  })

  it('changeGeometryTo writes new offsets and re-renders', () => {
    const { Obj, proxy, forceUpdate } = setup()
    proxy.changeGeometryTo!(30)                 // move x to 30
    expect(Obj.Offsets[0]).toBe(30)
    expect(forceUpdate).toHaveBeenCalled()
  })

  it('me.own is private state that does NOT re-render', () => {
    const { proxy, forceUpdate } = setup()
    ;(proxy as any).own.tmp = 123
    expect((proxy as any).own.tmp).toBe(123)
    expect(forceUpdate).not.toHaveBeenCalled()
  })

  it('exposes trigger/triggered that are null-safe before a script is attached', async () => {
    const { proxy } = setup()
    expect(typeof proxy.trigger).toBe('function')
    expect(typeof proxy.triggered).toBe('function')
    expect(await proxy.triggered('whatever')).toBeUndefined()   // no $Script yet
  })

  it('Index is the 0-based stack position and is writable (reorders the card)', () => {
    const A:any = { Id:'bc-widget-1', Name:'A', Type:'shape',
      Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Script:'' }
    const B:any = { Id:'bc-widget-2', Name:'B', Type:'shape',
      Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Script:'' }
    const Widgets  = [ A, B ]
    const rerender = vi.fn()
    const cardProxy:any = { Widgets, rerender }
    const SizeRef = { current:{ W:600, H:450 } }
    const proxyA = makeWidgetProxy(A, SizeRef as any, {} as any, cardProxy, () => {})

    expect(proxyA.Index).toBe(0)
    proxyA.Index = 1                              // move A to the top of the stack
    expect(Widgets.map((w) => w.Id)).toEqual([ 'bc-widget-2','bc-widget-1' ])
    expect(proxyA.Index).toBe(1)
    expect(rerender).toHaveBeenCalled()
  })
})

describe('makeCardProxy', () => {
  it('Index is the 0-based deck position and writing it reorders via the injected callback', () => {
    const A:any = { Id:'bc-card-1', Name:'A' }
    const B:any = { Id:'bc-card-2', Name:'B' }
    const C:any = { Id:'bc-card-3', Name:'C' }
    const Cards    = [ A, B, C ]
    const deckProxy:any = { Cards }
    const reorderCard = vi.fn((Card:any, toIndex:number) => {   // mimic the real mover
      const from = Cards.indexOf(Card)
      Cards.splice(from, 1)
      Cards.splice(toIndex, 0, Card)
    })
    const widgetListRef = { current:[] as any }
    const proxyA = makeCardProxy(A, deckProxy, widgetListRef, () => {}, reorderCard)

    expect(proxyA.Index).toBe(0)
    proxyA.Index = 2                              // move A to the end of the deck
    expect(reorderCard).toHaveBeenCalledWith(A, 2)
    expect(Cards.map((c) => c.Id)).toEqual([ 'bc-card-2','bc-card-3','bc-card-1' ])
    expect(proxyA.Index).toBe(2)
  })
})
