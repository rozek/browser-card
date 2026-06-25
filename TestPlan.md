# BrowserCard - Test Plan

> **Status:** implemented as a [Vitest](https://vitest.dev) suite under `test/` - `npm test` runs the pure-logic, runtime, context, proxy, export, demo-integrity, MCP-connector and **card-hierarchy** areas; deep DOM-render/pointer interaction of the designer in jsdom is intentionally limited to registration + crash-free mounting (see "Not automatically testable").
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
| `uniqueNameIn` | appends a counter until unique against a given name set; a trailing `" n"`/`"-n"` is counted up instead of appended; honours a custom separator |

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
| `triggered` / `trigger` | invokes the registered handler with arguments and returns its result; `undefined` when none exists; bubbles up to a linked parent (`linkToParent`); a handler's exception propagates to the caller |
| `fireLocal` | invokes a local handler only (no bubbling) and swallows its errors - used for lifecycle events (`ready`) |
| `renderResult` | returns the `render` handler's result synchronously; `null` if absent |
| handler replacement | a second `on('msg', …)` replaces the first |
| error isolation | a throwing script is caught and logged, does not break the instance (note: `triggered` deliberately re-throws handler errors) |
| syntax-error guard | a widget with a syntactically invalid script still runs its intrinsic behavior |
| runaway-loop circuit breaker | when scripts are (re-)run far too often in a short window (a render/mount loop), `run` suspends execution and warns once instead of freezing the tab |
| timer auto-cleanup | `after`/`every` timers registered in a script are cancelled on `teardown` (assert with fake timers) |
| teardown order | `obsolete` fires; handlers cleared synchronously so a re-run can re-register |

## 9. Script context - `buildContext` (pure + fakes)

| Test | Expectation |
|------|-------------|
| `Card(nameOrIndex)` | returns a ref for valid name/0-based index, else `null` |
| `CardCount()` | reflects the total number of cards |
| `go(target)` | resolves card ref / name / 0-based index / `nextCard` etc. to the right `BC_NavTarget` |
| `Widget(nameOrIndex)` | finds a widget proxy on the current card by name or 0-based index |
| `my.Card.Index` (card proxy) | reads the 0-based deck position; assigning it reorders the card |
| `trigger` / `triggered` bindings | `buildScriptParams` injects both so scripts can fire events on the current visual (and they bubble up to a linked parent) |
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
| `me.Deck` / `me.Card` / `me.Card.WidgetList` | resolve to the right proxies / ordered widget list |
| `me.trigger` / `me.triggered` | every proxy exposes both, delegating to its `$Script` instance; null-safe before a script is attached |
| **render-loop protection** | a reactive write inside an `on('render')`/`on('update')` handler writes the value but does **not** schedule another render (no infinite loop); writes outside a render pass re-render normally; suppression does not leak across passes |
| **proxy-assignment guard** | assigning a Deck/Card/Widget proxy to a property (e.g. the typo `my.Value = my`) is rejected with a warning and leaves the descriptor JSON-serializable (no circular reference) |

## 11. Event bubbling

| Test | Expectation |
|------|-------------|
| widget `triggered('click')` with no local handler | bubbles widget → card → deck and runs the **first** matching handler only (not all three) |
| local handler precedence | a handler on the widget itself wins; the card/deck handler does **not** also fire |
| `Widget('X').triggered(...)` | fires on the target widget and bubbles up from there; resolves with the handler's result (`undefined` if none) |
| lifecycle `ready` (`fireLocal`) | fires locally on each visual and does **not** bubble |

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
| copy widget(s) / card | writes JSON under the right MIME (`web application/x-browsercard-widget` / `…-card`) + `text/plain` fallback; a widget selection is serialized as a JSON array |
| paste detection | a card vs. widget(s) payload is recognized via custom MIME, else inferred from plain-text JSON (single widget object or widget array) |
| paste effects | pasted card inserted after current; pasted widget(s) get fresh ids, unique names, top z-indices (relative arrangement preserved) and become the new selection |

## 15. Rendering & editing components (jsdom + testing-library)

| Test | Expectation |
|------|-------------|
| widget rendering per type | button (8 variants), field (locked/editable, lines), shape (rect/oval/poly/line/arc, arrowheads as `<polygon>`), picture (object-fit per variant), custom widget |
| field write-back | typing into an editable field updates `me.Value` |
| button/checkbox/radio | click triggers `click`; `autoHilite` checkbox toggles `hilite` |
| edit mode | selection frame + 8 handles appear; pointer drag/resize updates offsets (simulate pointer events); arrow-key nudge |
| multi-selection | Shift/Cmd-click toggles widgets; rubber-band rectangle selects every overlapped widget; group move/resize applies to all; group delete/nudge; group bounding box + per-widget member outlines |
| properties panel | editing a field updates the descriptor; anchor switch preserves geometry; "Configuration (JSON)" edits `me.Configuration`; with several widgets selected only the group actions are shown |
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
| `live_send` | constructs a `Widget(…).triggered(…)` expression and delegates to `evalInContext` |
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

## 18. Card hierarchy (schema A) — `hierarchy.test.ts`, plus extensions in `structure`, `naming`, `proxies`, `mcp-connector`

| Test | Expectation |
|------|-------------|
| `sanitizeName` | strips every `'/'`; empty result falls back to the given default; spaces are kept |
| `flattenCards` | depth-first, parents before children; equals `Deck.Cards` for a flat deck |
| `cardTreeIndex` / `pathOf` | correct parent, depth and `'/'`-joined Path per card |
| `siblingListOf` | returns `Deck.Cards` for a root card, the parent `CardList` for a nested one, `null` for unknown |
| `moveWouldCycle` | detects self/descendant targets; allows valid moves and moves to root |
| `moveCardInTree` | re-parents a subtree, moves to root, reorders siblings; refuses cycles & unknowns without mutating |
| cascade delete | removing a subtree from its sibling list drops all descendants |
| `ValueIsCardJSON` (structure) | accepts/rejects nested `CardList`; deep round-trip stays valid |
| `prepareLoadedDeck` / strip*/normalize* (naming) | recurse through `CardList`; ids fresh & unique; `'/'` stripped from deck/card/widget names incl. nested |
| card proxy (proxies) | `Path` computed & read-only; `Index` is the flattened depth-first position |
| MCP connector | `list_cards` yields `parent_id`/`depth`/`path`/`child_count`; `card_get`/`card_patch` reach nested cards & strip `'/'`; `card_add` honors `parent_id`; `card_delete` cascades; `card_move` re-parents & rejects cycles; `card_reorder` is sibling-relative |

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
