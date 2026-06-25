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

  it('triggered invokes a handler and returns its result; undefined when missing', async () => {
    const inst = new ScriptInstance()
    const spy  = vi.fn(() => 99)
    inst.on('click', spy)
    expect(await inst.triggered('click', 42)).toBe(99)
    expect(spy).toHaveBeenCalledWith(42)
    expect(await inst.triggered('nope')).toBeUndefined()
  })

  it('trigger is a synonym for triggered', async () => {
    const inst = new ScriptInstance()
    inst.on('click', () => 5)
    expect(await inst.trigger('click')).toBe(5)
  })

  it('bubbles an unhandled event up to the linked parent', async () => {
    const child  = new ScriptInstance()
    const parent = new ScriptInstance()
    parent.on('msg', () => 'from-parent')
    child.linkToParent(() => parent)
    expect(await child.triggered('msg')).toBe('from-parent')
  })

  it('a local handler takes precedence over the parent', async () => {
    const child  = new ScriptInstance()
    const parent = new ScriptInstance()
    child .on('msg', () => 'from-child')
    parent.on('msg', () => 'from-parent')
    child.linkToParent(() => parent)
    expect(await child.triggered('msg')).toBe('from-child')
  })

  it('a later on() replaces the earlier handler', async () => {
    const inst = new ScriptInstance()
    const a = vi.fn(), b = vi.fn()
    inst.on('m', a); inst.on('m', b)
    await inst.triggered('m')
    expect(a).not.toHaveBeenCalled()
    expect(b).toHaveBeenCalled()
  })

  it('run() compiles a script that registers handlers', async () => {
    const inst = new ScriptInstance()
    await inst.run("on('click', () => 7)", ['on'], [inst.on.bind(inst)])
    expect(await inst.triggered('click')).toBe(7)
  })

  it('isolates errors in a script (no throw)', async () => {
    const inst = new ScriptInstance()
    await expect(inst.run("this is ((( not valid", ['on'], [inst.on.bind(inst)])).resolves.toBeUndefined()
  })

  it('forwards errors thrown inside a handler to the caller', async () => {
    const inst = new ScriptInstance()
    inst.on('boom', () => { throw new Error('x') })
    await expect(inst.triggered('boom')).rejects.toThrow('x')
  })

  it('fireLocal runs a local handler only and swallows its errors', async () => {
    const inst = new ScriptInstance()
    inst.on('boom', () => { throw new Error('x') })
    await expect(inst.fireLocal('boom')).resolves.toBeUndefined()
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

  it('teardown fires obsolete, then clears handlers', async () => {
    const inst = new ScriptInstance()
    const obsolete = vi.fn()
    inst.on('obsolete', obsolete)
    await inst.teardown()
    expect(obsolete).toHaveBeenCalled()
    expect(await inst.triggered('obsolete')).toBeUndefined()   // handlers cleared
  })
})

// kept LAST: trips the process-wide runaway-loop breaker, whose window would
// otherwise suppress scripts in tests that run afterwards in this file.
describe('ScriptInstance — runaway-loop circuit breaker', () => {
  it('suspends script execution after far too many runs in a short window', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const inst = new ScriptInstance()
    for (let i = 0; i < 1100; i++) {            // a render/mount loop would do this
      await inst.run("on('ping', () => 1)", [], [])
    }
    expect(warn.mock.calls.some((c) => String(c[0]).includes('runaway script loop'))).toBe(true)
    // the final (suspended) run cleared handlers without re-registering them
    expect(await inst.triggered('ping')).toBeUndefined()
    warn.mockRestore()
  })
})
