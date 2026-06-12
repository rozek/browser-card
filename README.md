# BrowserCard #

**a HyperCard reinterpretation for the web — build, script and share interactive card stacks right in your browser, then embed them anywhere as a custom element**

BrowserCard (abbreviation: **BC**) is a browser-based reinterpretation of [NovoCard](http://plectrum.com/novocard/NovoCard.html) by Plectrum - itself a reinterpretation of Apple's legendary [HyperCard](https://en.wikipedia.org/wiki/HyperCard) (1987). NovoCard was originally an iPad app (2012-2013) but BrowserCard brings the concept to modern desktop and mobile browsers - without any server: stacks live in your browser's IndexedDB and may be exported as plain JSON files or complete web pages.

## What you can do with it

**Build stacks visually.** A stack is a document made of cards, and cards carry objects: buttons (8 styles, incl. checkboxes and radio buttons), text fields (editable or locked, with or without ruled lines), shapes (rectangles, ovals, lines, arcs and polygons - with arrowheads, if you like), pictures, and fully custom widgets. Switch the designer into edit mode and place objects by dragging, resize them with eight handles, nudge them pixel-wise with the arrow keys, or let them snap to a configurable grid. A properties panel lets you inspect and edit every detail - including an anchor-based geometry system that keeps objects in place (or lets them stretch) when a stack is shown at a different size.

**Script everything with plain JavaScript.** Every visual - stack, card or object - has an asynchronous script, written in ordinary JavaScript with a tiny, HyperCard-inspired API. Register handlers with `on('touchUp', ...)`, navigate with `go(nextCard)` or `go('Card Name')`, open dialogs with `await answer('Really?', 'Yes', 'No')` and `await ask('Your name?')`, print to a built-in console, start self-cleaning timers with `after()` and `every()`, access other objects via `widget()` and message them with `send()`. Custom widgets render themselves with [Preact](https://preactjs.com) + [htm](https://github.com/developit/htm) templates - reactive state included: assign to `me.count` and the widget re-renders.

**Stay organized.** The stacks panel lists every stack stored in your browser - create, open, rename or delete them there. The card browser shows live wireframe thumbnails of all cards in the current stack and lets you add, duplicate, rename, reorder and delete cards. Everything you do in edit mode is auto-saved to IndexedDB and protected by a 100-step undo/redo (Ctrl/Cmd+Z / Shift+Z).

**Move content around.** Copy cards and objects to the system clipboard (with BrowserCard-specific MIME types and a plain text fallback) and paste them into another card, another stack, or another browser tab - BrowserCard detects by itself what the clipboard contains. Import stacks from JSON files or directly from a URL; export them as JSON, as a ready-to-paste embedding snippet, or as a complete standalone web app.

**Share your work.** Exported stacks run on any web page - without the designer chrome, without IndexedDB, without any build step. One `<script>` tag, one custom element, done.

## Using the designer

Load the module and place a `<bc-designer>` element - that's all:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>BrowserCard Designer</title>
  <style>
    html, body { margin:0; width:100%; height:100%; overflow:hidden }
  </style>
</head>
<body>
  <script type="module" src="https://rozek.github.io/browser-card/dist/browser-card.esm.js"></script>
  <bc-designer style="display:block; width:100%; height:100%"></bc-designer>
</body>
</html>
```

`<bc-designer>` supports the following attributes:

| Attribute  | Type        | Description |
| ---------- | ----------- | ----------- |
| `src`      | JSON string | initial stack data; empty = built-in demo stack; a persisted copy from IndexedDB takes precedence |
| `name`     | string      | determines the IndexedDB key (`bc-stack:<name>`) under which the stack is persisted |
| `readonly` | boolean     | locks the deck (presence = locked); a stack whose `readOnly` property is `true` is locked as well |

While editing, the stack is auto-saved to IndexedDB (debounced, and again when you leave edit mode). The "Stack" menu offers manual save, revert, reset, JSON export/import, import from URL, and the two embedding exports described below.

## Embedding stacks in web pages

`<bc-stack>` renders just the stack itself - no menu bar, no footer, no IndexedDB, no global keyboard handlers. Dialogs stay confined to the element, so several stacks may live on the same page:

```html
<script type="module" src="https://rozek.github.io/browser-card/dist/browser-card.esm.js"></script>

<bc-stack
  style="display:block; width:600px; height:450px"
  src="... HTML-escaped JSON serialization of the stack ..."
></bc-stack>
```

You rarely have to write this by hand: in the designer, open the "Stack" menu and choose

- **Export for Embedding…** - downloads an HTML snippet containing the `<script>` tag and a ready-made `<bc-stack>` element (in the stack's native size) which you can copy into any page, or
- **Export as Standalone App…** - downloads a complete HTML page in which the stack fills the browser window.

### Sizing

A stack has a *native* canvas size, set in the designer via the deck properties `CardWidth`/`CardHeight` (default: 600x450). When a stack is displayed, the canvas is scaled proportionally to fit its element - so the element's CSS size (`style="width:...; height:..."`) determines what you see. If you want to *override* the native canvas size in a particular page, set the CSS variables `--canvas-width`/`--canvas-height` on the element:

```html
<bc-stack style="display:block; width:100%; height:100%;
                 --canvas-width:800; --canvas-height:600"
  src="..."></bc-stack>
```

Priority: CSS variables → `CardWidth`/`CardHeight` from the stack → built-in defaults.

## Technology

- TypeScript + [Preact](https://preactjs.com) + [htm](https://github.com/developit/htm) - no JSX, no build step required for scripts
- a single, self-contained ESM module defining the custom elements `<bc-designer>` and `<bc-stack>`
- stack data as plain JSON, persisted in IndexedDB via [idb-keyval](https://github.com/jakearchibald/idb-keyval)
- built with [Vite](https://vitejs.dev)

## Build

```bash
npm install
npm run build       # type-checks and bundles dist/browser-card.esm.js
npm run dev         # Vite dev server with the demo stack
```

## License

[MIT License](./LICENSE.md)
