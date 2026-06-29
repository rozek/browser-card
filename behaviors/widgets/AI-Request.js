/**** AI-Request ****/

// a click opens (or focuses) a Markdown editor dialog window for the widget's "Value".
// dragging moves the widget across the card; changes are saved automatically
// (via "saveDeck()", debounced by 400ms).

/**** injectStyleRuleOnce - inserts a <style> rule into <head> only once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id = Id; Style.textContent = CSS
    document.head.appendChild(Style)
  }

/**** GridSizeOf - returns a positive numeric grid value or the fallback ****/

  function GridSizeOf (rawValue, Fallback) {
    const n = Number(rawValue)
    return (Number.isFinite(n) && n > 0) ? n : Fallback
  }

/**** shared CSS for the Markdown editor dialog (used by all AI behaviours) ****/

  const DialogCSS = `
    .bc-ai-mde-window {
      position:fixed; z-index:2147483000;
      display:flex; flex-direction:column;
      min-width:220px; min-height:140px;
      background:#ffffff;
      border:1px solid #4a4a4a; border-radius:6px;
      box-shadow:0 12px 40px rgba(0,0,0,0.45);
      overflow:hidden;
      font-family:Helvetica,Arial,sans-serif;
    }
    .bc-ai-mde-titlebar {
      flex:0 0 auto;
      display:flex; align-items:center; gap:8px;
      padding:8px 12px;
      background:#ececec; border-bottom:1px solid #cccccc;
      cursor:move; touch-action:none; user-select:none;
    }
    .bc-ai-mde-title {
      flex:1 1 auto; font-size:15px; font-weight:bold; color:#222222;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .bc-ai-mde-close {
      flex:0 0 auto; width:24px; height:24px; padding:0; margin:0;
      background:none; border:none; cursor:pointer;
      font-size:18px; line-height:1; color:#333333; border-radius:4px;
    }
    .bc-ai-mde-close:hover { background:rgba(0,0,0,0.08); color:#000000; }
    .bc-ai-mde-editor {
      flex:1 1 auto; min-height:0;
      margin:10px; padding:8px 10px;
      background:#E3ECFB; border:1px solid #9AA8C0; border-radius:4px;
      font-family:ui-monospace,Menlo,Consolas,monospace;
      font-size:13px; line-height:1.5; color:#11203A;
      resize:none; outline:none; white-space:pre; overflow:auto;
    }
    .bc-ai-mde-footer {
      flex:0 0 14px;
      display:flex; align-items:stretch;
      border-top:1px solid #dddddd; background:#ffffff;
    }
    .bc-ai-mde-grip { touch-action:none; }
    .bc-ai-mde-grip.sw { flex:0 0 28px; cursor:sw-resize; }
    .bc-ai-mde-grip.s  { flex:1 1 auto; cursor:s-resize;
                         border-left:1px solid #dddddd; border-right:1px solid #dddddd; }
    .bc-ai-mde-grip.se { flex:0 0 28px; cursor:se-resize; }
  `

  const DlgMinW = 220, DlgMinH = 140, DlgDefW = 480, DlgDefH = 340

/**** the actual behaviour script ****/

  export default async function ({ on, my, html, trigger, Configuration, saveDeck }) {
    injectStyleRuleOnce('bc-ai-mde-style', DialogCSS)

    let Dialog    = null
    let SaveTimer = null

  /**** scheduleSave - saves the deck after a short delay ****/

    function scheduleSave () {
      if (typeof saveDeck !== 'function') { return }
      if (SaveTimer != null) { clearTimeout(SaveTimer) }
      SaveTimer = setTimeout(() => { SaveTimer = null; saveDeck() }, 400)
    }

  /**** beginDialogDrag - moves the editor window ****/

    function beginDialogDrag (Event, Win) {
      Event.preventDefault()
      const R = Win.getBoundingClientRect()
      const S = { left:R.left, top:R.top, px:Event.clientX, py:Event.clientY }
      document.documentElement.style.userSelect = 'none'
      const onMove = (e) => {
        Win.style.left = (S.left + e.clientX - S.px) + 'px'
        Win.style.top  = (S.top  + e.clientY - S.py) + 'px'
      }
      const onUp = () => {
        document.documentElement.style.userSelect = ''
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup',   onUp)
      }
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup',   onUp)
    }

  /**** beginDialogResize - resizes the editor window ****/

    function beginDialogResize (Event, Win, Edge) {
      Event.preventDefault(); Event.stopPropagation()
      const R = Win.getBoundingClientRect()
      const S = { left:R.left, W:R.width, H:R.height, px:Event.clientX, py:Event.clientY }
      document.documentElement.style.userSelect = 'none'
      const onMove = (e) => {
        const dx = e.clientX - S.px, dy = e.clientY - S.py
        let W = S.W, L = S.left
        if (Edge === 'se') { W = S.W + dx }
        if (Edge === 'sw') { W = S.W - dx }
        W = Math.max(DlgMinW, W)
        if (Edge === 'sw') { L = S.left + (S.W - W) }
        Win.style.width  = W + 'px'
        Win.style.height = Math.max(DlgMinH, S.H + dy) + 'px'
        Win.style.left   = L + 'px'
      }
      const onUp = () => {
        document.documentElement.style.userSelect = ''
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup',   onUp)
      }
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup',   onUp)
    }

  /**** closeEditor - closes the editor window ****/

    function closeEditor () {
      if (Dialog != null) { Dialog.remove(); Dialog = null }
    }

  /**** openEditor - opens (or focuses) the editor window ****/

    function openEditor () {
      if (Dialog != null) {
        Dialog.querySelector('.bc-ai-mde-editor')?.focus()
        return
      }

      const Win = document.createElement('div'); Win.className = 'bc-ai-mde-window'
      const W = Math.min(DlgDefW, Math.max(DlgMinW, window.innerWidth  - 40))
      const H = Math.min(DlgDefH, Math.max(DlgMinH, window.innerHeight - 40))
      Win.style.cssText = [
        `width:${W}px`, `height:${H}px`,
        `left:${Math.round((window.innerWidth  - W) / 2)}px`,
        `top:${Math.round((window.innerHeight - H) / 2)}px`,
      ].join(';')

      const TitleBar = document.createElement('div'); TitleBar.className = 'bc-ai-mde-titlebar'
      const Title    = document.createElement('div'); Title.className    = 'bc-ai-mde-title'
      Title.textContent = 'AI Request'
      const Close = document.createElement('button'); Close.className = 'bc-ai-mde-close'
      Close.type = 'button'; Close.textContent = '✕'; Close.title = 'close'
      TitleBar.append(Title, Close)

      const Editor = document.createElement('textarea'); Editor.className = 'bc-ai-mde-editor'
      Editor.spellcheck = false; Editor.value = String(my.Value ?? '')

      const Footer = document.createElement('div'); Footer.className = 'bc-ai-mde-footer'
      const sw = document.createElement('div'); sw.className = 'bc-ai-mde-grip sw'
      const s  = document.createElement('div'); s.className  = 'bc-ai-mde-grip s'
      const se = document.createElement('div'); se.className = 'bc-ai-mde-grip se'
      Footer.append(sw, s, se)

      Win.append(TitleBar, Editor, Footer)
      document.body.appendChild(Win); Dialog = Win

      Editor.addEventListener('input', () => {
        my.Value = Editor.value; trigger('change', Editor.value); scheduleSave()
      })
      Close.addEventListener('pointerdown', (e) => e.stopPropagation())
      Close.addEventListener('click', closeEditor)
      TitleBar.addEventListener('pointerdown', (e) => beginDialogDrag(e, Win))
      sw.addEventListener('pointerdown', (e) => beginDialogResize(e, Win, 'sw'))
      s .addEventListener('pointerdown', (e) => beginDialogResize(e, Win, 's'))
      se.addEventListener('pointerdown', (e) => beginDialogResize(e, Win, 'se'))

      Editor.focus()
    }

  /**** onPointerDown - tells a click (-> editor) apart from a drag (-> move) ****/

    function onPointerDown (Event) {
      Event.stopPropagation()

      const View  = my.View
      const Rect  = (View != null ? View.getBoundingClientRect() : null)
      const Scale = (Rect != null && my.Width > 0 ? Rect.width / my.Width : 1)

      const Card  = my.Card
      const Snap  = (Card?.SnapToGrid === true)
      const GridW = GridSizeOf(Card?.GridWidth,  10)
      const GridH = GridSizeOf(Card?.GridHeight, 10)

      const S = { x:my.x, y:my.y, px:Event.clientX, py:Event.clientY }
      let wasDragged = false

      document.documentElement.style.userSelect = 'none'

      const onMove = (e) => {
        const dx = (e.clientX - S.px) / Scale
        const dy = (e.clientY - S.py) / Scale
        if ((! wasDragged) && (Math.hypot(dx, dy) < 4)) { return }
        wasDragged = true
        let nx = S.x + dx, ny = S.y + dy
        if (Snap) { nx = Math.round(nx / GridW) * GridW; ny = Math.round(ny / GridH) * GridH }
        my.changeGeometryTo(nx, ny)
        scheduleSave()
      }

      const onUp = () => {
        document.documentElement.style.userSelect = ''
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup',   onUp)
        if (! wasDragged) { openEditor() }
      }

      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup',   onUp)
    }

    on('obsolete', () => {
      if (SaveTimer != null) { clearTimeout(SaveTimer); SaveTimer = null }
      closeEditor()
    })

    on('render', () => html`
      <svg
        width="100%" height="100%"
        viewBox="-1 -1 54 42"
        style="display:block;cursor:move;touch-action:none;user-select:none;"
        onPointerDown=${onPointerDown}
      >
        <!-- oval speech bubble: ellipse rx=25 ry=14, centre (26,15), tail bottom-right -->
        <path
          d="M26,1 A21,14 0 0 1 44,22 L48,39 L37,27 A21,14 0 0 1 26,29 A21,14 0 0 1 5,15 A21,14 0 0 1 26,1 Z"
          fill="#84CC16" stroke="#888888" stroke-width="1" stroke-linejoin="round"
        />
        <!-- upward arrow: send the prompt to the AI -->
        <g stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <line x1="26" y1="22" x2="26" y2="12"/>
          <polyline points="22,17 26,12 30,17"/>
        </g>
      </svg>
    `)
  }
