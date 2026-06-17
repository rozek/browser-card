# BrowserCard - Test Plan

> **Status:** implemented as a [Vitest](https://vitest.dev) suite under `test/` - `npm test` runs **138 tests, all green**. The pure-logic, runtime, context, proxy, export, demo-integrity and MCP-connector areas are covered; deep DOM-render/pointer interaction of the designer in jsdom is intentionally limited to registration + crash-free mounting (see "Not automatically testable").
>
> **Note (area 17d):** `MCPSettingsDialog` is an internal Preact component and not exported. Its localStorage contract and `connector.configure()` side-effect isolation are tested in `mcp-settings-dialog.test.ts`; the component rendering itself requires manual/visual testing until the component is exported.


This document lists everything in BrowserCard that can be tested **automatically**, organized by area, plus the tooling to run those tests and a short list of aspects that remain **manual/visual** only.

## Goals & scope

- verify the **pure logic** (geometry, validators, runtime, persistence, undo/redo, clipboard, exports) deterministically and without a browser where possible
- verify the **rendering and editing UI** in a simulated DOM (jsdom)
- guard the **data contracts**: a deck that round-trips through JSON must stay valid; the bundled demo decks must always be valid
- catch regressions in the small **scripting API** that scripts and behaviors depend on

## Tooling

| Concern | Tool |
|---------|------|
| Test runner | [Vitest](https://vitest.dev) (same Vite/TS toolchain as the build) |
| DOM environment | `jsdom` (Vitest `environment: 'jsdom'`) |
| Component rendering | `@testing-library/preact` + `@testing-library/user-event` |
| IndexedDB | [`fake-indexeddb`](https://github.com/dumbmatter/fakeIndexedDB) (drives `idb-keyval`) |
| Clipboard / timers | Vitest fake timers; a stubbed `navigator.clipboard` / `ClipboardItem` |
| Coverage | `vitest run --coverage` (v8) |

Suggested scripts (add to `package.json`):

```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

**Testability note.** Several pure helpers are currently module-private (`resolveGeometry`, `computeOffsets`, `ScriptInstance`, `makeWidgetProxy`/`makeCardProxy`/`makeDeckProxy`, `buildContext`, `resolveBehaviorUrl`, `escapedForHTML`, `adjustIdCounterFor`, `ValueIsDeck`/`ValueIsCardJSON`/`ValueIsWidgetJSON`). To unit-test them directly, either export them (many `ValueIs*`/`acceptable*` helpers already are exported) or add a small internal test entry point (e.g. `src/internals.ts`) that re-exports them for the test build only.

---

## 1. Geometry & anchors (pure)

| Test | Expectation |
|------|-------------|
| `resolveGeometry` for each horizontal anchor (`left-width`, `left-right`, `width-right`) | correct `left`/`width` for given offsets + container width |
| `resolveGeometry` for each vertical anchor (`top-height`, `top-bottom`, `height-bottom`) | correct `top`/`height` |
| `computeOffsets` is the exact inverse of `resolveGeometry` | round-trip `Offsets → geometry → Offsets` is identity for all 9 anchor combinations |
| anchor switch keeps pixel geometry | changing anchors then `computeOffsets` yields the same on-screen rect |
| snap-to-grid math | move/resize values snap to multiples of `GridWidth`/`GridHeight`; opposite edge stays fixed on resize; min size respected |
| `changeGeometryTo` | partial args (null/undefined) keep current computed values; result offsets re-resolve to the requested pixels |

## 2. Validators & acceptables (pure, exported)

| Test | Expectation |
|------|-------------|
| `ValueIsName`, `ValueIsIdentifier`, `ValueIsLocation`, `ValueIsDimension` | accept valid, reject invalid (incl. NaN, Infinity, wrong type) |
| `ValueIsAnchors`, `ValueIsOffsets` | accept only well-formed 2-/4-tuples with allowed anchor names |
| `ValueIsColor`, `ValueIsURL`, `ValueIsEMailAddress` | boundary cases |
| `ValueIsTime`/`ValueIsDate`/`ValueIsDateTime`/`ValueIsWeek`/`ValueIsMonth` | pattern match/mismatch |
| `ValueIsSerializableValue`/`...Object` | nested plain objects/arrays pass; functions/symbols fail |
| `ValueIsPropertyDescriptor` | each editor type's required extra fields enforced |
| `acceptable*` family (`acceptableNumberInRange`, `acceptableInteger`, `acceptableBoolean`, `acceptableColor`, ...) | coerce strings where intended, return `undefined` on reject |

## 3. Identifiers, naming, normalization (pure)

| Test | Expectation |
|------|-------------|
| `newInternalId` | monotonic, type-prefixed (`bc-widget-n`), unique within a run |
| `adjustIdCounterFor` | after loading a deck, the counter is lifted above the highest existing numeric id (no collisions on next insert) |
| `normalizedName` / `_normalizedName` | dots replaced with hyphens; invalid names rejected |
| `uniqueNameIn` | appends counters until unique against a given name set |

## 4. Deck/Card/Widget structural validation (pure)

| Test | Expectation |
|------|-------------|
| `ValueIsDeck` / `ValueIsCardJSON` / `ValueIsWidgetJSON` | accept valid structures; reject missing `Id`/`Type`/`Anchors`/`Offsets`, wrong nesting |
| import safety | invalid `src` JSON / non-deck object is rejected (no throw, returns a notice path) |
| JSON round-trip | `deck → JSON.stringify → JSON.parse → ValueIsDeck` stays valid |

## 5. Console helpers (pure)

| Test | Expectation |
|------|-------------|
| `EOLCount` | counts newlines incl. none/only |
| `StringFromArguments` | formats mixed types (undefined/null/function/object) with/without trailing EOL |
| console compaction (`Console_append`, `compacted`, `compactConsoleFor`) | output is trimmed to the configured char/line limits |

## 6. Behavior URL resolution (pure)

| Input | Expected resolution |
|-------|--------------------|
| `https://…` | used unchanged |
| `/path/x.js` | `origin + path` |
| `./x.js`, `../x.js` | resolved against current page |
| bare `name` (deck/card/widget) | `https://rozek.github.io/browser-card/behaviors/<decks\|cards\|widgets>/<name>.js` |

## 7. Export string generation (pure)

| Test | Expectation |
|------|-------------|
| `escapedForHTML` | escapes `& < > " '`; round-trips through the HTML parser back to the original JSON |
| embed snippet | contains the public module URL, a `<bc-deck>` with the escaped `src`, native size |
| standalone page | references the public module URL; deck fills the window |

## 8. Script runtime - `ScriptInstance` (jsdom optional)

| Test | Expectation |
|------|-------------|
| `run` + `on` | a script registers handlers; running an empty script is a no-op |
| `dispatch` | invokes the registered handler with arguments; returns `false` when none exists |
| `renderResult` | returns the `render` handler's result synchronously; `null` if absent |
| handler replacement | a second `on('msg', …)` replaces the first |
| error isolation | a throwing handler/script is caught and logged, does not break the instance |
| syntax-error guard | a widget with a syntactically invalid script still runs its intrinsic behavior |
| timer auto-cleanup | `after`/`every` timers registered in a script are cancelled on `teardown` (assert with fake timers) |
| teardown order | `obsolete` fires; handlers cleared synchronously so a re-run can re-register |

## 9. Script context - `buildContext` (pure + fakes)

| Test | Expectation |
|------|-------------|
| `Card(nameOrNumber)` | returns a ref for valid name/1-based index, else `null` |
| `CardNumber()` / `CardCount()` | reflect current index (live) and total |
| `go(target)` | resolves card ref / name / 1-based number / `nextCard` etc. to the right `BC_NavTarget` |
| `Widget(nameOrIndex)` | finds a widget proxy on the current card |
| `await send(target, msg, …)` | delivers to the target widget's instance; resolves `false` if missing |
| `await answer(...)` / `await ask(...)` | resolve with the chosen button / entered text / `null` on cancel (drive the dialog callback) |
| `print`/`println`/`clearConsole` | mutate the deck console buffer |

## 10. Reactive proxies (jsdom)

| Test | Expectation |
|------|-------------|
| `makeWidgetProxy` get/set | property write calls `forceUpdate`; reads reflect the descriptor |
| live geometry getters | `me.x/y/Width/Height` computed from current container size |
| `me.changeGeometryTo(...)` | writes offsets + triggers update |
| `me.own` | reads/writes a private object **without** triggering re-render or persistence |
| `me.Configuration` | exposes the widget's config object |
| `me.Applet` / `me.Card` / `me.Card.WidgetList` | resolve to the right proxies / ordered widget list |

## 11. Message bubbling

| Test | Expectation |
|------|-------------|
| widget `dispatch('click')` | reaches the widget's own, then the card's, then the deck's script (assert all three handlers fire, in order) |
| `send()` | targeted - does **not** bubble |

## 12. Persistence (fake-indexeddb)

| Test | Expectation |
|------|-------------|
| save | `#saveStack` writes a JSON-clean copy under `bc-deck:<name>` in store `browser-card`/`decks` |
| load precedence | a persisted copy supersedes the `src` attribute / demo deck |
| list / open / create / rename / delete | the deck-management ops behave correctly and keep ids consistent |
| migration | entries from the old `BrowserCard`/`Stacks` store (`bc-stack:` keys) are moved once to the new store/prefix |
| reset | deleting the persisted copy restores the original (`pristineDemoDeckJSON`) |

## 13. Undo/redo (pure logic)

| Test | Expectation |
|------|-------------|
| snapshot capture | an edit pushes the prior state; redo stack clears on a new edit |
| coalescing | edits with the same key within the window collapse into one step; different keys / gestures are separate |
| restore | undo/redo writes back into the *same* deck object (identity preserved for persistence/proxies) |
| depth limit | history is capped at 100 entries |

## 14. Clipboard (stubbed `navigator.clipboard`)

| Test | Expectation |
|------|-------------|
| copy widget / card | writes JSON under the right MIME (`web application/x-browsercard-widget` / `…-card`) + `text/plain` fallback |
| paste detection | a card vs. widget payload is recognized via custom MIME, else inferred from plain-text JSON |
| paste effects | pasted card inserted after current; pasted widget gets fresh id, unique name, top z-index |

## 15. Rendering & editing components (jsdom + testing-library)

| Test | Expectation |
|------|-------------|
| widget rendering per type | button (8 variants), field (locked/editable, lines), shape (rect/oval/poly/line/arc, arrowheads as `<polygon>`), picture (object-fit per variant), custom widget |
| field write-back | typing into an editable field updates `me.Text` |
| button/checkbox/radio | click dispatches `click`; `autoHilite` checkbox toggles `hilite` |
| edit mode | selection frame + 8 handles appear; pointer drag/resize updates offsets (simulate pointer events); arrow-key nudge |
| properties panel | editing a field updates the descriptor; anchor switch preserves geometry; "Configuration (JSON)" edits `me.Configuration` |
| card/deck menus | new/duplicate/rename/move/delete card; insert widget; arrange/z-order; copy/paste |
| `<bc-designer>` / `<bc-deck>` | custom elements register and mount; `<bc-deck>` renders chromeless (no menu/footer); CSS variables / `CardWidth`/`CardHeight` size the canvas |

## 17. MCP Connector (unit + fake WebSocket)

### 17a. `MCPConnector` — connection management

| Test | Expectation |
|------|-------------|
| constructor with localStorage `bc-mcp-url` + `bc-mcp-token` | reads both values; `connect()` opens a WebSocket to that URL |
| constructor without stored URL | `connect()` is a no-op; `connectionStatus.connected` is `false` |
| `configure(url, token)` | updates internal URL/token, closes any existing socket, opens a new one; does **not** touch localStorage (persistence is the dialog's responsibility) |
| `configure('')` | disconnects and does not reconnect |
| `connect()` without URL | no-op |
| `disconnect()` | closes socket, clears reconnect timer |
| auto-reconnect | if socket closes unexpectedly, a new connection is attempted after 3 s (fake timers) |
| single-connection enforcement | a second `connect()` while already connected replaces the old socket |

### 17b. `MCPConnector` — WebSocket protocol

| Test | Expectation |
|------|-------------|
| `hello` on open | sends `{ type:'hello', accessToken, deckName, currentCard }` |
| request dispatch | an incoming `{ id, method, params }` message calls `#handle(method, params)` and sends back `{ id, result }` |
| error wrapping | if `#handle` throws, response is `{ id, error: message }` |
| card-change notification | `setContext()` with a different card name sends `{ type:'notify', event:'card_changed', cardName }` over the socket |
| `setContext(null)` | no notification sent; context cleared |

### 17c. `MCPConnector` — tool handlers (via fake context)

Test each handler against a stubbed `BCMCPContext` that returns controlled fixtures:

| Handler | Key assertions |
|---------|----------------|
| `connection_status` | returns `connected` flag and URL without requiring a context |
| `deck_get` | returns all `DeckSchemaKeys` fields; `Cards` and `Id` excluded |
| `deck_patch` | merges only allowed keys; schema keys (`Id`, `Cards`) rejected |
| `deck_save` | calls `ctx.saveDeck()` |
| `card_list` | returns all card ids, names, and indices |
| `card_get` | correct card by index; error on out-of-range |
| `card_patch` | merges allowed `CardSchemaKeys`; `Id`/`Widgets` rejected |
| `card_add` | inserts a new card after the current index; new id is unique |
| `card_delete` | removes card; refuses when only one card remains |
| `card_navigate` | calls `ctx.navigate()` with the right argument |
| `widget_list` | returns all widget ids, names, types for a given card |
| `widget_get` | returns all `WidgetSchemaKeys` fields for the addressed widget |
| `widget_patch` | merges allowed keys; `Id`/`Type` rejected |
| `widget_add` | inserts new widget with correct defaults per type |
| `widget_delete` | removes widget from the card |
| `widget_get_rect` / `widget_set_rect` | round-trip `Anchors + Offsets → {x,y,width,height} → Anchors + Offsets` is identity for all 9 anchor combos and card sizes |
| `extras_get` | returns only keys not in the schema key set of the addressed target |
| `extras_set` | writes the key-value pairs; schema keys rejected |
| `extras_delete` | removes the key; no-op for non-existent keys |
| `live_eval` | calls `ctx.evalInContext(expr)` and returns the result |
| `live_send` | constructs a `send(…)` expression and delegates to `evalInContext` |
| `live_screenshot` | throws a descriptive error when `globalThis.html2canvas` is absent |

### 17d. `MCPSettingsDialog` (jsdom + testing-library)

| Test | Expectation |
|------|-------------|
| renders with stored values | URL input and token input pre-filled from localStorage |
| "Remember token permanently" checkbox | initially checked iff a token was previously stored |
| Save with checkbox checked | saves URL **and** token to localStorage; calls `onApply(url, token)` |
| Save with checkbox unchecked | saves URL to localStorage; **removes** token from localStorage; calls `onApply(url, token)` |
| Cancel | calls `onClose()`, does not write to localStorage |
| empty URL + Save | saves empty URL; `onApply` called with empty strings |

---

## 16. Demo-deck integrity (data tests)

Run the same checks the deck generators use, as a test over `demos/*.bc` and `FeatureTest.bc`:

| Test | Expectation |
|------|-------------|
| JSON parses & `ValueIsDeck` | every shipped deck is structurally valid |
| ids unique | widget/card ids unique within a deck |
| widget names unique per card | no duplicate names on a card |
| bounds | `left-width`/`top-height` widgets lie within `CardWidth`×`CardHeight` |
| field heights | non-scrolling fields are tall enough for their font size |
| script syntax | every deck/card/widget script compiles (`new Function`) without throwing |

---

## Not automatically testable (manual / visual)

- **pixel-perfect appearance** - exact colors, gradients, fonts, anti-aliasing (only structure/inline-style assertions are automatable; consider optional screenshot/visual-regression tooling later)
- **screenshot PNG correctness** - the 📷 export depends on `html-to-image` + real layout; only that it triggers a download is automatable
- **real IndexedDB across reloads / multiple tabs** - persistence *logic* is covered via `fake-indexeddb`, but true browser durability is manual
- **system clipboard across apps/tabs** - logic is covered with a stub; real cross-tab paste is manual
- **touch/pointer "feel"** - `touch-action`, capture, drag smoothness on real devices
- **external behavior loading over the network** - URL *resolution* is unit-tested; actual `import()` from GitHub Pages/jsDelivr is manual or an integration test
- **embedded-module URL availability** - that `BC_ModuleURL` actually serves the module is a deployment check
- **live WebSocket roundtrip against a real broker** - the protocol is unit-tested with a fake WebSocket; an end-to-end test against a running `BrowserCard-AIBroker` instance is manual or a separate integration suite
- **`live_screenshot` with real `html2canvas`** - the error path (no `html2canvas`) is unit-testable; the actual PNG result requires a real browser with the library loaded

## Suggested layout & CI

```
src/
  BrowserCard.ts
  MCPConnector.ts
  internals.ts        # test-only re-exports of private helpers (optional)
test/
  geometry.test.ts    cards.test.ts      runtime.test.ts
  validators.test.ts  persistence.test.ts clipboard.test.ts
  proxies.test.ts     undo.test.ts        components.test.tsx
  demos.test.ts       exports.test.ts     behaviors.test.ts
  mcp-connector.test.ts                   # areas 17a–17c
  mcp-settings-dialog.test.tsx            # area 17d
```

Run `npm test` in CI (e.g. a GitHub Actions workflow on push/PR) and gate merges on green plus a coverage threshold for the pure-logic modules (geometry, validators, runtime, persistence, undo, clipboard).
