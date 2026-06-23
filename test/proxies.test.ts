import { describe, it, expect, vi } from 'vitest'
import { makeWidgetProxy } from '../src/BrowserCard'

function setup () {
  const Obj:any = {
    Id:'bc-widget-1', Name:'W', Number:1, Type:'shape', zIndex:1,
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
})
