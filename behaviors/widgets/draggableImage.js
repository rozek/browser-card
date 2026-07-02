/**** draggableImage - a movable, resizable widget that displays an image ****/

// shows the image whose URL is in "Value", scaled with "contain" and centred on
// a configurable background colour (my.BackgroundColor, default white). outside
// of "edit" mode, the widget is dragged with the pointer held down anywhere on
// its face and resized via the handle in its lower right corner (like a
// "StickyNote", minimum size 80x60px). a double-click opens an "Image Settings"
// dialog with inputs for the image URL and the background colour; that dialog
// can itself be dragged by its title bar and closed via the "x" in its title.
// changes to position, size, URL and background colour are persisted with the
// deck (debounced "saveDeck()"). while moving/resizing, "Card.SnapToGrid" snaps
// onto multiples of "Card.GridWidth"/"Card.GridHeight" (default 10x10px)

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const minWidth  = 80                    // smallest allowed widget width  (px)
  const minHeight = 60                    // smallest allowed widget height (px)

  const DefaultGridWidth  = 10        // fallback grid raster when snapping (px)
  const DefaultGridHeight = 10

  const DefaultBackground = '#ffffff'

/**** GridSizeOf - a positive numeric grid size, or the given fallback ****/

  function GridSizeOf (rawValue, Fallback) {
    return (
      ((typeof rawValue === 'number') && Number.isFinite(rawValue) && (rawValue > 0))
      ? rawValue
      : Fallback
    )
  }

/**** BackgroundColorOf - a usable CSS colour, or the default background ****/

  function BackgroundColorOf (rawValue) {
    const Candidate = String(rawValue ?? '').trim()
    return (
      ((Candidate !== '') && CSS.supports('background-color', Candidate))
      ? Candidate
      : DefaultBackground
    )
  }

/**** the resize handle bitmap (a dotted triangle), embedded as a data-URI ****/

  const ResizeHandleImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAbUlEQVRIS9WTwQ0AIAgDZV0GYl2NP2KMEWmjOkAvPawU8hNGvpnVnquq8ifAW6E0gAO88/GmkAZ0wOonQhrAASslHZbeAR0QWf8bN4goOdoBHRBxftQADsgo2doBHZBRcucGSCXTBnQA0vmY1QDfJWAZ8ODrpQAAAABJRU5ErkJggg==")'

  const DraggableImageStyle = `
    .bc-widget > draggable-image {
      position:relative; display:block;
      width:100%; height:100%;
      box-sizing:border-box;
      overflow:hidden;
      cursor:move; touch-action:none; user-select:none;
    }
    .bc-widget > draggable-image > img {
      display:block; width:100%; height:100%;
      object-fit:contain; object-position:center center;
      pointer-events:none; user-select:none;
    }
    .bc-widget > draggable-image > .bc-dgi-placeholder {
      display:flex; align-items:center; justify-content:center;
      width:100%; height:100%;
      color:#999999; font-family:Helvetica,Arial,sans-serif;
      font-size:13px; text-align:center;
      pointer-events:none;
    }
    .bc-widget > draggable-image > .bc-dgi-resize {
      position:absolute; right:2px; bottom:2px;
      width:24px; height:24px;
      background-image:${ResizeHandleImage};
      background-repeat:no-repeat; background-position:right bottom;
      cursor:nwse-resize; touch-action:none;
    }

    .bc-dgi-window {
      position:fixed; z-index:2147483000;
      display:flex; flex-direction:column;
      width:360px; max-width:calc(100vw - 40px);
      background:#ffffff;
      border:1px solid #4a4a4a; border-radius:6px;
      box-shadow:0 12px 40px rgba(0,0,0,0.45);
      overflow:hidden;
      font-family:Helvetica,Arial,sans-serif;
    }
    .bc-dgi-titlebar {
      flex:0 0 auto;
      display:flex; align-items:center; gap:8px;
      padding:8px 12px;
      background:#ececec; border-bottom:1px solid #cccccc;
      cursor:move; touch-action:none; user-select:none;
    }
    .bc-dgi-title {
      flex:1 1 auto; font-size:15px; font-weight:bold; color:#222222;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .bc-dgi-close {
      flex:0 0 auto; width:24px; height:24px; padding:0px; margin:0px;
      background:none; border:none; cursor:pointer;
      font-size:18px; line-height:1; color:#333333; border-radius:4px;
    }
    .bc-dgi-close:hover { background:rgba(0,0,0,0.08); color:#000000; }
    .bc-dgi-body {
      flex:1 1 auto;
      display:flex; flex-direction:column; gap:10px;
      padding:12px;
    }
    .bc-dgi-label {
      font-size:12px; font-weight:bold; color:#444444;
      margin-bottom:2px;
    }
    .bc-dgi-input {
      width:100%; box-sizing:border-box;
      padding:6px 8px;
      background:#E3ECFB; border:1px solid #9AA8C0; border-radius:4px;
      font-family:ui-monospace,Menlo,Consolas,monospace;
      font-size:13px; color:#11203A; outline:none;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, trigger, Configuration, saveDeck }) {
    injectStyleRuleOnce('bc-draggableimage-style', DraggableImageStyle)

  /**** scheduleSave - persists position, size, URL and colour with the deck ****/

    let SaveTimer = null
    function scheduleSave () {
      if (typeof saveDeck !== 'function') { return }   // older runtime: no-op
      if (SaveTimer != null) { clearTimeout(SaveTimer) }
      SaveTimer = setTimeout(() => { SaveTimer = null; saveDeck() }, 400)
    }

  /**** beginDrag - moves or resizes the widget while a pointer is held down ****/

    function beginDrag (Event, Mode) {
      Event.stopPropagation()

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
            Math.max((Snap ? Math.ceil(minWidth /GridW)*GridW : minWidth),  newWidth),
            Math.max((Snap ? Math.ceil(minHeight/GridH)*GridH : minHeight), newHeight)
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

  /**** the "Image Settings" dialog ****/

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

    function closeDialog () {
      if (Dialog != null) { Dialog.remove(); Dialog = null }
    }

  /**** labelledInput - a label + text input pair for the dialog body ****/

    function labelledInput (LabelText, initialValue, Placeholder, onInput) {
      const Wrapper = document.createElement('div')
      const Label = document.createElement('div')
        Label.className   = 'bc-dgi-label'
        Label.textContent = LabelText
      const Input = document.createElement('input')
        Input.className   = 'bc-dgi-input'
        Input.type        = 'text'
        Input.spellcheck  = false
        Input.placeholder = Placeholder
        Input.value       = initialValue
        Input.addEventListener('input', () => onInput(Input.value))
      Wrapper.appendChild(Label)
      Wrapper.appendChild(Input)
      return { Wrapper, Input }
    }

    function openDialog () {
      if (Dialog != null) { return }   // only one dialog at a time

      const Win = document.createElement('div')
        Win.className = 'bc-dgi-window'

      const TitleBar = document.createElement('div')
        TitleBar.className = 'bc-dgi-titlebar'
      const Title = document.createElement('div')
        Title.className   = 'bc-dgi-title'
        Title.textContent = 'Image Settings'
      const Close = document.createElement('button')
        Close.className   = 'bc-dgi-close'
        Close.type        = 'button'
        Close.textContent = '✕'
        Close.title       = 'close'
      TitleBar.appendChild(Title)
      TitleBar.appendChild(Close)

      const Body = document.createElement('div')
        Body.className = 'bc-dgi-body'

      const URLInput = labelledInput(
        'Image URL', String(my.Value ?? ''), 'https://...',
        (newValue) => {
          my.Value = newValue
          trigger('change', newValue)
          scheduleSave()
        }
      )
      const ColorInput = labelledInput(
        'Background Color', String(my.BackgroundColor ?? ''), DefaultBackground,
        (newValue) => {
          my.BackgroundColor = newValue
          scheduleSave()
        }
      )
      Body.appendChild(URLInput.Wrapper)
      Body.appendChild(ColorInput.Wrapper)

      Win.appendChild(TitleBar); Win.appendChild(Body)
      document.body.appendChild(Win)
      Dialog = Win

      const Rect = Win.getBoundingClientRect()
        Win.style.left = Math.round((window.innerWidth -Rect.width )/2) + 'px'
        Win.style.top  = Math.round((window.innerHeight-Rect.height)/2) + 'px'

      Close.addEventListener('pointerdown', (Event) => Event.stopPropagation())
      Close.addEventListener('click', closeDialog)
      TitleBar.addEventListener('pointerdown', (Event) => beginDialogDrag(Event, Win))

      URLInput.Input.focus()
    }

    on('obsolete', () => {
      if (SaveTimer != null) { clearTimeout(SaveTimer); SaveTimer = null }
      closeDialog()
    })

    on('render', () => {
      const URL        = String(my.Value ?? Configuration?.Value ?? '').trim()
      const Background = BackgroundColorOf(
        my.BackgroundColor ?? Configuration?.BackgroundColor
      )

      const Content = (
        URL === ''
        ? html`<div class="bc-dgi-placeholder">(double-click to enter an image URL)</div>`
        : html`<img src=${URL} alt="" draggable=${false}/>`
      )

      return html`
        <draggable-image
          style=${{ background:Background }}
          onPointerDown=${(Event) => beginDrag(Event, 'move')}
          onDblClick=${() => openDialog()}
        >
          ${Content}
          <div
            class="bc-dgi-resize"
            onPointerDown=${(Event) => beginDrag(Event, 'resize')}
          ></div>
        </draggable-image>
      `
    })
  }
