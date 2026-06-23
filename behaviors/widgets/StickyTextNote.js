/**** StickyTextNote - a movable, resizable note with a textarea ****/

// the note may be dragged around by grabbing its title bar and resized by
// grabbing the handle in its lower right corner (minimum size 80x60px). clicking
// the inner area hands the input focus to the textarea; while focused the title
// bar turns orange (the note keeps the same thin border as "StickyNote"). "Value"
// holds the displayed text and is written back on every edit ('change' is
// triggered). if "Value" contains a tab character the text is not wrapped,
// otherwise it is; the tab width is 10px. while moving or resizing the note
// consults its "Card": if "Card.SnapToGrid" is exactly true, positions and
// sizes are forced onto multiples of "Card.GridWidth"/"Card.GridHeight"
// (default 10x10px); values of a wrong data type are ignored. changes to
// position, size and content are persisted with the deck in the browser via a
// debounced "saveDeck()" (a no-op on a read-only deck or an older runtime).

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const MinWidth  = 80   // smallest allowed note width  (px)
  const MinHeight = 60   // smallest allowed note height (px)
  const TitleBarHeight = 16

  const DefaultGridWidth  = 10   // fallback grid raster when snapping (px)
  const DefaultGridHeight = 10

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

  const StickyTextNoteStyle = `
    .bc-widget > sticky-note {
      position:relative;
      display:flex; flex-direction:column;
      width:100%; height:100%;
      box-sizing:border-box;
      background:#FCFBE3;
      border:1px solid #C9C49A;
      font-family:Helvetica,Arial,sans-serif;
      overflow:hidden;
    }
    .bc-widget > sticky-note > .bc-sticky-titlebar {
      flex:0 0 ${TitleBarHeight}px; height:${TitleBarHeight}px;
      background:#E8E5A6;
      cursor:move; touch-action:none;
    }
    .bc-widget > sticky-note:focus-within > .bc-sticky-titlebar {
      background:#E3A23C;
    }
    .bc-widget > sticky-note > textarea {
      flex:1 1 auto; width:100%;
      box-sizing:border-box;
      margin:0px; border:none; outline:none; resize:none;
      background:transparent;
      padding:4px 6px;
      font:13px/1.35 Helvetica,Arial,sans-serif; color:#333333;
      tab-size:10px; -moz-tab-size:10px;
      overflow:auto;
    }
    .bc-widget > sticky-note > .bc-sticky-resize {
      position:absolute; right:2px; bottom:2px;
      width:24px; height:24px;
      background-image:${ResizeHandleImage};
      background-repeat:no-repeat; background-position:right bottom;
      cursor:nwse-resize; touch-action:none;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, trigger, Configuration, saveDeck }) {
    injectStyleRuleOnce('bc-stickytextnote-style', StickyTextNoteStyle)

    /**** activate - records this note as the card's active note ****/

    function activate () {
      const Card = my.Card
      if ((Card == null) || (Card.own.activeNote === my)) { return }
      Card.own.activeNote = my
      if (typeof Card.rerender === 'function') { Card.rerender() }   // refresh other notes
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
      Event.preventDefault(); Event.stopPropagation()

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
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup',   onUp)
      }

      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup',   onUp)
    }

  /**** insertTab - intercepts the Tab key and inserts a tab character ****/

    function insertTab (Event) {
      if (Event.key !== 'Tab') { return }
      if (Event.shiftKey || Event.ctrlKey || Event.altKey || Event.metaKey) { return }
      Event.preventDefault()

      const Area  = Event.target
      const Start = Area.selectionStart
      const End   = Area.selectionEnd
      const next  = Area.value.slice(0,Start) + '\t' + Area.value.slice(End)

      Area.value = next                                  // update the DOM first,
      Area.selectionStart = Area.selectionEnd = Start+1  // caret right after tab

      my.Value = next
      trigger('change', next)
      scheduleSave()
    }

    on('render', () => {
      const Text   = String(my.Value ?? Configuration?.Value ?? '')
      const noWrap = Text.includes('\t')

      return html`
        <sticky-note>
          <div
            class="bc-sticky-titlebar"
            onPointerDown=${(Event) => beginDrag(Event, 'move')}
          ></div>
          <textarea
            wrap=${noWrap ? 'off' : 'soft'}
            value=${Text}
            onFocus=${() => activate()}
            onKeyDown=${insertTab}
            onInput=${(Event) => {
              my.Value = Event.target.value
              trigger('change', Event.target.value)
              scheduleSave()
            }}
          ></textarea>
          <div
            class="bc-sticky-resize"
            onPointerDown=${(Event) => beginDrag(Event, 'resize')}
          ></div>
        </sticky-note>
      `
    })
  }
