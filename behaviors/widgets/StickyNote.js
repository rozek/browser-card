/**** StickyNote - a movable, resizable note that displays Markdown ****/

// like "StickyTextNote", but its body shows "Value" rendered as Markdown (reusing
// the toolkit bundled into BrowserCard - highlighting, KaTeX and Mermaid). the
// note is dragged by its title bar and resized via the handle in its lower right
// corner (minimum size 80x60px). a double-click on the title bar or the display
// area opens a "Markdown Editor" dialog with a plain text editor for the Markdown
// source; that dialog can itself be dragged by its title bar, resized by dragging
// one of the areas along its bottom edge, and closed via the "x" in its title.
// changes to position, size and content are persisted with the deck (debounced
// "saveDeck()"). while moving/resizing, "Card.SnapToGrid" snaps onto multiples of
// "Card.GridWidth"/"Card.GridHeight" (default 10x10px); wrong types are ignored.

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

/**** linkStyleOnce - links a stylesheet into the document head only once ****/

  function linkStyleOnce (Id, Href) {
    if (document.getElementById(Id) != null) { return }
    const Link = document.createElement('link')
      Link.id   = Id
      Link.rel  = 'stylesheet'
      Link.href = Href
    document.head.appendChild(Link)
  }

/**** escapedForHTML - minimal entity escaping for embedded raw text ****/

  function escapedForHTML (Text) {
    return String(Text ?? '')
      .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
  }

/**** loadedMermaid - lazily loads the vendored, same-origin Mermaid build ****/

  function loadedMermaid (ScriptURL) {
    globalThis._BC_MermaidPromise ??= new Promise((resolve, reject) => {
      if (globalThis.mermaid != null) { resolve(globalThis.mermaid); return }
      const Script = document.createElement('script')
        Script.src    = ScriptURL
        Script.onload = () => {
          globalThis.mermaid.initialize({ startOnLoad:false, securityLevel:'strict' })
          resolve(globalThis.mermaid)
        }
        Script.onerror = () => reject(new Error('StickyNote: could not load Mermaid from ' + ScriptURL))
      document.head.appendChild(Script)
    })
    return globalThis._BC_MermaidPromise
  }

  const MinWidth  = 80   // smallest allowed note width  (px)
  const MinHeight = 60   // smallest allowed note height (px)
  const TitleBarHeight = 16

  const DefaultGridWidth  = 10   // fallback grid raster when snapping (px)
  const DefaultGridHeight = 10

  const DialogMinWidth      = 220   // smallest allowed editor dialog size (px)
  const DialogMinHeight     = 140
  const DialogDefaultWidth  = 480
  const DialogDefaultHeight = 340

  const AssetsBeside   = 'markdown/'        // sibling of BrowserCard.js (preferred)
  const AssetsFromHere = '../../markdown/'  // fallback, relative to this behaviour

  /**** GridSizeOf - a positive numeric grid size, or the given fallback ****/

  function GridSizeOf (rawValue, Fallback) {
    return (
      ((typeof rawValue === 'number') && Number.isFinite(rawValue) && (rawValue > 0))
      ? rawValue
      : Fallback
    )
  }

  /**** the resize handle bitmap (a dotted triangle), embedded as a data-URI ****/

  const ResizeHandleImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAbUlEQVRIS9WTwQ0AIAgDZV0GYl2NP2KMEWmjOkAvPawU8hNGvpnVnquq8ifAW6E0gAO88/GmkAZ0wOonQhrAASslHZbeAR0QWf8bN4goOdoBHRBxftQADsgo2doBHZBRcucGSCXTBnQA0vmY1QDfJWAZ8ODrpQAAAABJRU5ErkJggg==")'

  const StickyNoteStyle = `
    .bc-widget > md-sticky-note {
      position:relative;
      display:flex; flex-direction:column;
      width:100%; height:100%;
      box-sizing:border-box;
      background:#FCFBE3;
      border:1px solid #C9C49A;
      font-family:Helvetica,Arial,sans-serif;
      overflow:hidden;
    }
    .bc-widget > md-sticky-note > .bc-mdnote-titlebar {
      flex:0 0 ${TitleBarHeight}px; height:${TitleBarHeight}px;
      background:#E8E5A6;
      cursor:move; touch-action:none; user-select:none;
    }
    .bc-widget > md-sticky-note > .bc-mdnote-body {
      flex:1 1 auto; min-height:0; width:100%;
      box-sizing:border-box;
      padding:6px 8px; overflow:auto;
      font-size:13px; color:#222222; text-align:left;
    }
    .bc-widget > md-sticky-note > .bc-mdnote-resize {
      position:absolute; right:2px; bottom:2px;
      width:24px; height:24px;
      background-image:${ResizeHandleImage};
      background-repeat:no-repeat; background-position:right bottom;
      cursor:nwse-resize; touch-action:none;
    }

    .bc-mde-window {
      position:fixed; z-index:2147483000;
      display:flex; flex-direction:column;
      min-width:${DialogMinWidth}px; min-height:${DialogMinHeight}px;
      background:#ffffff;
      border:1px solid #4a4a4a; border-radius:6px;
      box-shadow:0 12px 40px rgba(0,0,0,0.45);
      overflow:hidden;
      font-family:Helvetica,Arial,sans-serif;
    }
    .bc-mde-titlebar {
      flex:0 0 auto;
      display:flex; align-items:center; gap:8px;
      padding:8px 12px;
      background:#ececec; border-bottom:1px solid #cccccc;
      cursor:move; touch-action:none; user-select:none;
    }
    .bc-mde-title {
      flex:1 1 auto; font-size:15px; font-weight:bold; color:#222222;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .bc-mde-close {
      flex:0 0 auto; width:24px; height:24px; padding:0px; margin:0px;
      background:none; border:none; cursor:pointer;
      font-size:18px; line-height:1; color:#333333; border-radius:4px;
    }
    .bc-mde-close:hover { background:rgba(0,0,0,0.08); color:#000000; }
    .bc-mde-editor {
      flex:1 1 auto; min-height:0;
      margin:10px; padding:8px 10px;
      background:#E3ECFB; border:1px solid #9AA8C0; border-radius:4px;
      font-family:ui-monospace,Menlo,Consolas,monospace;
      font-size:13px; line-height:1.5; color:#11203A;
      resize:none; outline:none; white-space:pre; overflow:auto;
    }
    .bc-mde-footer {
      flex:0 0 14px;
      display:flex; align-items:stretch;
      border-top:1px solid #dddddd; background:#ffffff;
    }
    .bc-mde-grip { touch-action:none; }
    .bc-mde-grip.sw { flex:0 0 28px; cursor:sw-resize; }
    .bc-mde-grip.s  { flex:1 1 auto; cursor:s-resize;
                      border-left:1px solid #dddddd; border-right:1px solid #dddddd; }
    .bc-mde-grip.se { flex:0 0 28px; cursor:se-resize; }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration, saveDeck }) {
    injectStyleRuleOnce('bc-stickynote-style', StickyNoteStyle)

    /**** Markdown rendering (reusing the BrowserCard toolkit) ****/

    const BC = globalThis.BC
    let parseMarkdown
    let runMermaidWithin = () => undefined

    if ((BC != null) && (BC.Marked != null)) {
      const { Marked, markedKatex, hljs } = BC

      const AssetBase = (
        Configuration?.AssetBase
        ?? ( BC.ModuleURL != null
             ? new URL(AssetsBeside, BC.ModuleURL).href
             : new URL(AssetsFromHere, import.meta.url).href )
      )
      const MermaidEnabled = (Configuration?.Mermaid !== false)
      const KatexOptions   = (Configuration?.KaTeX ?? { throwOnError:false, nonStandard:true })

      linkStyleOnce('bc-md-styles', new URL('../markdown.css', AssetBase).href)
      linkStyleOnce('bc-md-katex',  AssetBase + 'katex/katex.min.css')

      const renderCode = (TokenOrCode, maybeLang) => {
        const isToken  = (typeof TokenOrCode === 'object') && (TokenOrCode != null)
        const Source   = (isToken ? TokenOrCode.text : TokenOrCode) ?? ''
        const rawLang  = (isToken ? TokenOrCode.lang : maybeLang) ?? ''
        const Language = String(rawLang).trim().split(/\s+/)[0]

        if (MermaidEnabled && (Language === 'mermaid')) {
          return `<pre class="mermaid">${escapedForHTML(Source)}</pre>`
        }
        const canHighlight = (hljs != null) && (typeof hljs.highlight === 'function')
        const highlighted  = (
          ! canHighlight
          ? escapedForHTML(Source)
          : ( (Language !== '') && (hljs.getLanguage(Language) != null)
              ? hljs.highlight(Source, { language:Language }).value
              : hljs.highlightAuto(Source).value )
        )
        return `<pre><code class="hljs language-${Language}">${highlighted}</code></pre>`
      }

      const Markdown = new Marked()
        Markdown.use({ renderer:{ code:renderCode } })
        if (typeof markedKatex === 'function') { Markdown.use(markedKatex(KatexOptions)) }

      parseMarkdown = (Text) => {
        try { return Markdown.parse(Text ?? '') }
        catch (Signal) {
          return '<pre style="color:#a00">' + escapedForHTML('Markdown error: ' + Signal.message) + '</pre>'
        }
      }

      runMermaidWithin = (Element) => {
        if ((Element == null) || ! MermaidEnabled) { return }
        const Diagrams = Element.querySelectorAll('pre.mermaid:not([data-processed])')
        if (Diagrams.length === 0) { return }
        loadedMermaid(AssetBase + 'mermaid.min.js')
          .then((Mermaid) => Mermaid.run({ nodes:Diagrams }))
          .catch((Signal) => console.warn('[StickyNote] Mermaid failed:', Signal))
      }
    } else {
      parseMarkdown = (Text) => '<pre>' + escapedForHTML(Text) + '</pre>'
    }

    /**** activate - records this note as the card's active note ****/

    function activate () {
      const Card = my.Card
      if ((Card == null) || (Card.own.activeNote === my)) { return }
      Card.own.activeNote = my
      if (typeof Card.rerender === 'function') { Card.rerender() }   // refresh all notes
    }

    /**** scheduleSave - persists position, size and content with the deck ****/

    let SaveTimer = null
    function scheduleSave () {
      if (typeof saveDeck !== 'function') { return }   // older runtime: no-op
      if (SaveTimer != null) { clearTimeout(SaveTimer) }
      SaveTimer = setTimeout(() => { SaveTimer = null; saveDeck() }, 400)
    }

    /**** beginDrag - moves or resizes the note while a pointer is held down ****/

    function beginDrag (Event, Mode) {
      Event.stopPropagation()
      activate()

      const View  = my.View
      const Rect  = ((View != null) ? View.getBoundingClientRect() : null)
      const Scale = (((Rect != null) && (my.Width > 0)) ? Rect.width/my.Width : 1)

      const Start = {
        x:my.x, y:my.y, W:my.Width, H:my.Height,
        px:Event.clientX, py:Event.clientY,
      }

      const Card  = my.Card
      const Snap  = ((Card != null) && (Card.SnapToGrid === true))
      const GridW = (Snap ? GridSizeOf(Card.GridWidth,  DefaultGridWidth)  : 1)
      const GridH = (Snap ? GridSizeOf(Card.GridHeight, DefaultGridHeight) : 1)

      document.documentElement.style.userSelect = 'none'

      function onMove (innerEvent) {
        const dx = (innerEvent.clientX-Start.px)/Scale
        const dy = (innerEvent.clientY-Start.py)/Scale

        if (Mode === 'move') {
          let newX = Start.x+dx
          let newY = Start.y+dy
          if (Snap) {
            newX = Math.round(newX/GridW)*GridW
            newY = Math.round(newY/GridH)*GridH
          }
          my.changeGeometryTo(newX, newY)
        } else {
          let newWidth  = Start.W+dx
          let newHeight = Start.H+dy
          if (Snap) {
            newWidth  = Math.round(newWidth /GridW)*GridW
            newHeight = Math.round(newHeight/GridH)*GridH
          }
          my.changeGeometryTo(
            null, null,
            Math.max((Snap ? Math.ceil(MinWidth /GridW)*GridW : MinWidth),  newWidth),
            Math.max((Snap ? Math.ceil(MinHeight/GridH)*GridH : MinHeight), newHeight)
          )
        }
        scheduleSave()
      }

      function onUp () {
        document.documentElement.style.userSelect = ''
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup',   onUp)
      }

      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup',   onUp)
    }

    /**** the Markdown editor dialog ****/

    let Dialog = null

    function beginDialogDrag (Event, Win) {
      Event.preventDefault()
      const Rect  = Win.getBoundingClientRect()
      const Start = { left:Rect.left, top:Rect.top, px:Event.clientX, py:Event.clientY }

      document.documentElement.style.userSelect = 'none'

      function onMove (innerEvent) {
        Win.style.left = (Start.left + (innerEvent.clientX-Start.px)) + 'px'
        Win.style.top  = (Start.top  + (innerEvent.clientY-Start.py)) + 'px'
      }
      function onUp () {
        document.documentElement.style.userSelect = ''
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup',   onUp)
      }
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup',   onUp)
    }

    function beginDialogResize (Event, Win, Edge) {
      Event.preventDefault(); Event.stopPropagation()
      const Rect  = Win.getBoundingClientRect()
      const Start = { left:Rect.left, W:Rect.width, H:Rect.height, px:Event.clientX, py:Event.clientY }

      document.documentElement.style.userSelect = 'none'

      function onMove (innerEvent) {
        const dx = innerEvent.clientX - Start.px
        const dy = innerEvent.clientY - Start.py

        let newWidth = Start.W
        let newLeft  = Start.left
        if (Edge === 'se') { newWidth = Start.W + dx }
        if (Edge === 'sw') { newWidth = Start.W - dx }

        newWidth = Math.max(DialogMinWidth, newWidth)
        if (Edge === 'sw') { newLeft = Start.left + (Start.W - newWidth) }  // keep right edge

        const newHeight = Math.max(DialogMinHeight, Start.H + dy)

        Win.style.width  = newWidth  + 'px'
        Win.style.height = newHeight + 'px'
        Win.style.left   = newLeft   + 'px'
      }
      function onUp () {
        document.documentElement.style.userSelect = ''
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup',   onUp)
      }
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup',   onUp)
    }

    function closeEditor () {
      if (Dialog != null) { Dialog.remove(); Dialog = null }
    }

    function openEditor () {
      if (Dialog != null) { return }   // only one editor at a time

      const Win = document.createElement('div')
        Win.className = 'bc-mde-window'
      const W = Math.min(DialogDefaultWidth,  Math.max(DialogMinWidth,  window.innerWidth  - 40))
      const H = Math.min(DialogDefaultHeight, Math.max(DialogMinHeight, window.innerHeight - 40))
        Win.style.width  = W + 'px'
        Win.style.height = H + 'px'
        Win.style.left   = Math.round((window.innerWidth  - W)/2) + 'px'
        Win.style.top    = Math.round((window.innerHeight - H)/2) + 'px'

      const TitleBar = document.createElement('div')
        TitleBar.className = 'bc-mde-titlebar'
      const Title = document.createElement('div')
        Title.className   = 'bc-mde-title'
        Title.textContent = 'Markdown Editor'
      const Close = document.createElement('button')
        Close.className   = 'bc-mde-close'
        Close.type        = 'button'
        Close.textContent = '✕'
        Close.title       = 'close'
      TitleBar.appendChild(Title)
      TitleBar.appendChild(Close)

      const Editor = document.createElement('textarea')
        Editor.className = 'bc-mde-editor'
        Editor.spellcheck = false
        Editor.value = String(my.Value ?? '')

      const Footer = document.createElement('div')
        Footer.className = 'bc-mde-footer'
      const GripSW = document.createElement('div'); GripSW.className = 'bc-mde-grip sw'
      const GripS  = document.createElement('div'); GripS.className  = 'bc-mde-grip s'
      const GripSE = document.createElement('div'); GripSE.className = 'bc-mde-grip se'
      Footer.appendChild(GripSW); Footer.appendChild(GripS); Footer.appendChild(GripSE)

      Win.appendChild(TitleBar); Win.appendChild(Editor); Win.appendChild(Footer)
      document.body.appendChild(Win)
      Dialog = Win

      Editor.addEventListener('input', () => {
        my.Value = Editor.value
        dispatch('change', Editor.value)
        scheduleSave()
      })
      Close.addEventListener('pointerdown', (Event) => Event.stopPropagation())
      Close.addEventListener('click', closeEditor)
      TitleBar.addEventListener('pointerdown', (Event) => beginDialogDrag(Event, Win))
      GripSW.addEventListener('pointerdown', (Event) => beginDialogResize(Event, Win, 'sw'))
      GripS .addEventListener('pointerdown', (Event) => beginDialogResize(Event, Win, 's'))
      GripSE.addEventListener('pointerdown', (Event) => beginDialogResize(Event, Win, 'se'))

      Editor.focus()
    }

    on('obsolete', () => {
      if (SaveTimer != null) { clearTimeout(SaveTimer); SaveTimer = null }
      closeEditor()
    })

    on('render', () => {
      const Content = parseMarkdown(my.Value ?? Configuration?.Value ?? '')
      const active  = (my.Card?.own?.activeNote === my)

      return html`
        <md-sticky-note onPointerDown=${() => activate()}>
          <div
            class="bc-mdnote-titlebar"
            style=${{ background:(active ? '#E3A23C' : '#E8E5A6') }}
            onPointerDown=${(Event) => beginDrag(Event, 'move')}
            onDblClick=${() => openEditor()}
          ></div>
          <div
            class="bc-mdnote-body bc-markdown"
            onDblClick=${() => openEditor()}
            ref=${(Element) => runMermaidWithin(Element)}
            dangerouslySetInnerHTML=${{ __html:Content }}
          ></div>
          <div
            class="bc-mdnote-resize"
            onPointerDown=${(Event) => beginDrag(Event, 'resize')}
          ></div>
        </md-sticky-note>
      `
    })
  }
