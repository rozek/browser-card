import { describe, it, expect, vi } from 'vitest'
import { makeWidgetProxy, makeCardProxy, ScriptInstance } from '../src/BrowserCard'

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

  it('rejects assigning a Visual proxy to a property (e.g. the typo `my.Value = my`)', () => {
    const { Obj, proxy, forceUpdate } = setup()
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    ;(proxy as any).Value = proxy                 // circular, non-serializable
    expect((Obj as any).Value).toBeUndefined()    // assignment ignored
    expect(forceUpdate).not.toHaveBeenCalled()
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('cannot assign a Deck/Card/Widget proxy'))
    // the descriptor stays JSON-serializable
    expect(() => JSON.stringify(Obj)).not.toThrow()
    warn.mockRestore()
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

  it('exposes a computed, read-only Path and a flattened Index for nested cards', () => {
    const Child:any  = { Id:'bc-card-2', Name:'Child', Widgets:[] }
    const Parent:any = { Id:'bc-card-1', Name:'Parent', Widgets:[], CardList:[ Child ] }
    const deckProxy:any = { Cards:[ Parent ] }
    const parentProxy = makeCardProxy(Parent, deckProxy, { current:[] } as any, () => {})
    const childProxy  = makeCardProxy(Child,  deckProxy, { current:[] } as any, () => {})

    expect(parentProxy.Path).toBe('Parent')
    expect(childProxy.Path).toBe('Parent/Child')
    expect(childProxy.Index).toBe(1)              // flattened depth-first position

    ;(childProxy as any).Path = 'hacked'          // read-only: write is ignored
    expect(childProxy.Path).toBe('Parent/Child')
    expect(Child.Name).toBe('Child')
  })
})

describe('render-loop protection', () => {
  function widget () {
    const Obj:any = {
      Id:'bc-widget-1', Name:'W', Type:'shape', Value:'a',
      Anchors:['left-width','top-height'], Offsets:[0,1,0,1], visible:true, Script:'',
    }
    const SizeRef = { current:{ W:600, H:450 } }
    const forceUpdate = vi.fn()
    const proxy:any = makeWidgetProxy(Obj, SizeRef as any, {} as any, {} as any, forceUpdate)
    return { Obj, proxy, forceUpdate }
  }

  it('suppresses the extra re-render when a reactive prop is set during a render handler', () => {
    const { Obj, proxy, forceUpdate } = widget()
    const inst = new ScriptInstance()
    let n = 0
    inst.on('render', () => { proxy.Value = 'v' + (n++) })   // changes on every pass → would loop

    inst.renderResult()
    expect(Obj.Value).toBe('v0')                  // the write still happens
    expect(forceUpdate).not.toHaveBeenCalled()    // but no re-render is scheduled → no loop
  })

  it('still re-renders for reactive writes outside a render handler', () => {
    const { proxy, forceUpdate } = widget()
    proxy.Value = 'changed'                        // ordinary event-time write
    expect(forceUpdate).toHaveBeenCalledTimes(1)
  })

  it('does not leak the suppression state across render passes', () => {
    const { proxy, forceUpdate } = widget()
    const inst = new ScriptInstance()
    inst.on('render', () => { proxy.Value = 'x' + Math.random() })
    inst.renderResult()                            // suppressed (depth > 0)
    expect(forceUpdate).not.toHaveBeenCalled()
    proxy.Value = 'after'                          // depth back to 0 → normal
    expect(forceUpdate).toHaveBeenCalledTimes(1)
  })
})
