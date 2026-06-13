import { describe, it, expect, vi } from 'vitest'
import { ScriptInstance } from '../src/BrowserCard'

describe('ScriptInstance', () => {
  it('registers a render handler and returns its result synchronously', () => {
    const inst = new ScriptInstance()
    inst.on('render', () => 'hello')
    expect(inst.renderResult()).toBe('hello')
  })

  it('renderResult is null without a render handler', () => {
    expect(new ScriptInstance().renderResult()).toBeNull()
  })

  it('dispatch invokes a handler and returns true; false when missing', async () => {
    const inst = new ScriptInstance()
    const spy  = vi.fn()
    inst.on('click', spy)
    expect(await inst.dispatch('click', 42)).toBe(true)
    expect(spy).toHaveBeenCalledWith(42)
    expect(await inst.dispatch('nope')).toBe(false)
  })

  it('a later on() replaces the earlier handler', async () => {
    const inst = new ScriptInstance()
    const a = vi.fn(), b = vi.fn()
    inst.on('m', a); inst.on('m', b)
    await inst.dispatch('m')
    expect(a).not.toHaveBeenCalled()
    expect(b).toHaveBeenCalled()
  })

  it('run() compiles a script that registers handlers', async () => {
    const inst = new ScriptInstance()
    await inst.run("on('click', () => 7)", ['on'], [inst.on.bind(inst)])
    expect(await inst.dispatch('click')).toBe(true)
  })

  it('isolates errors in a script (no throw)', async () => {
    const inst = new ScriptInstance()
    await expect(inst.run("this is ((( not valid", ['on'], [inst.on.bind(inst)])).resolves.toBeUndefined()
  })

  it('isolates errors thrown inside a handler', async () => {
    const inst = new ScriptInstance()
    inst.on('boom', () => { throw new Error('x') })
    expect(await inst.dispatch('boom')).toBe(false)
  })

  it('after()/every() timers are cancelled on teardown', async () => {
    vi.useFakeTimers()
    try {
      const inst = new ScriptInstance()
      const onceSpy = vi.fn(), repeatSpy = vi.fn()
      inst.after(100, onceSpy)
      inst.every(100, repeatSpy)
      await inst.teardown()
      vi.advanceTimersByTime(1000)
      expect(onceSpy).not.toHaveBeenCalled()
      expect(repeatSpy).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it('teardown dispatches obsolete, then clears handlers', async () => {
    const inst = new ScriptInstance()
    const obsolete = vi.fn()
    inst.on('obsolete', obsolete)
    await inst.teardown()
    expect(obsolete).toHaveBeenCalled()
    expect(await inst.dispatch('obsolete')).toBe(false)   // handlers cleared
  })
})
