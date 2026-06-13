// gives idb-keyval a working IndexedDB inside jsdom (needed because the module
// runs a one-time deck migration at import time)
import 'fake-indexeddb/auto'

// jsdom lacks ResizeObserver, which DeckView uses to scale the canvas
class ResizeObserverStub {
  observe () {}
  unobserve () {}
  disconnect () {}
}
;(globalThis as any).ResizeObserver ??= ResizeObserverStub

