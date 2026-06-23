/**** StickyNoteMenu - a collapsible toolbar for managing StickyNote widgets ****/

// the widget is 40px tall. collapsed it is a 40x40 rounded square showing a black
// left-pointing caret; clicking it expands the menu to the left (its right edge
// stays put) into a row of icon buttons (left to right): create a new StickyNote,
// delete the active note, bring it to the front, raise it one level, lower it one
// level, send it to the back. "active" note = the proxy stored in
// "Card.own.activeNote" (see StickyNote/StickyTextNote). a click anywhere outside
// the menu collapses it again. structural changes are persisted via "saveDeck()".

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const Height         = 40
  const ButtonWidth    = 40
  const CollapsedWidth = ButtonWidth
  const ExpandedWidth  = 6*ButtonWidth   // six action buttons

  /**** SVG line icons (stroke = currentColor) ****/

  const SVGHead = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
                  ' stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">'

  const Icons = {
    caretLeft:  SVGHead + '<polyline points="15 6 9 12 15 18"/></svg>',
    plus:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
                ' stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
                '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    trash:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
                ' stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<polyline points="3 6 5 6 21 6"/>' +
                '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' +
                '<line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
    doubleUp:   SVGHead + '<polyline points="6 11 12 5 18 11"/><polyline points="6 18 12 12 18 18"/></svg>',
    up:         SVGHead + '<polyline points="6 14 12 8 18 14"/></svg>',
    down:       SVGHead + '<polyline points="6 10 12 16 18 10"/></svg>',
    doubleDown: SVGHead + '<polyline points="6 6 12 12 18 6"/><polyline points="6 13 12 19 18 13"/></svg>',
  }

  const StickyNoteMenuStyle = `
    .bc-snm-bar {
      display:flex; align-items:center; justify-content:center;
      width:100%; height:100%;
      box-sizing:border-box;
      background:#ffffff; border:1px solid #d6d6d6; border-radius:10px;
      box-shadow:0 1px 4px rgba(0,0,0,0.22);
      overflow:hidden;
    }
    .bc-snm-bar.collapsed { cursor:pointer; }
    .bc-snm-btn {
      flex:0 0 ${ButtonWidth}px; width:${ButtonWidth}px; height:100%;
      display:flex; align-items:center; justify-content:center;
      padding:0px; margin:0px; background:none; border:none;
      color:#111111; cursor:pointer;
    }
    .bc-snm-btn:hover:not(:disabled) { background:rgba(0,0,0,0.06); }
    .bc-snm-btn:disabled { opacity:0.3; cursor:default; }
    .bc-snm-btn > svg { width:22px; height:22px; display:block; }
    .bc-snm-bar.collapsed > .bc-snm-btn > svg { width:20px; height:20px; }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, trigger, Configuration, saveDeck }) {
    injectStyleRuleOnce('bc-stickynotemenu-style', StickyNoteMenuStyle)

    /**** uniqueName / freshWidgetId - collision-free name and id ****/

    function uniqueName (Widgets, Base) {
      const Names = new Set(Widgets.map((Obj) => Obj.Name))
      let Name = Base, Counter = 1
      while (Names.has(Name)) { Counter += 1; Name = Base+'-'+Counter }
      return Name
    }

    function freshWidgetId (Widgets) {
      const Ids = new Set(Widgets.map((Obj) => Obj.Id))
      let Id
      do { Id = 'bc-widget-' + Date.now().toString(36) + '-' + Math.floor(Math.random()*1e6).toString(36) }
      while (Ids.has(Id))
      return Id
    }

    /**** persisted, re-rendering structural changes on the card ****/

    function refreshAndSave () {
      const Card = my.Card
      if ((Card != null) && (typeof Card.rerender === 'function')) { Card.rerender() }
      if (typeof saveDeck === 'function') { saveDeck() }
    }

    function createStickyNote () {
      const Card = my.Card
      if (Card == null) { return }
      const Widgets = Card.Widgets
      const maxZ    = Widgets.reduce((Max,Obj) => Math.max(Max, Obj.zIndex ?? 0), 0)
      const Cascade = (Widgets.length % 6)*24

      Widgets.push({
        Id:freshWidgetId(Widgets), Name:uniqueName(Widgets,'StickyNote'),
        Number:maxZ+1, zIndex:maxZ+1, Type:'generic', visible:true,
        Anchors:[ 'left-width','top-height' ],
        Offsets:[ 40+Cascade, 240, 40+Cascade, 160 ],
        Script:"await behaveLike('StickyNote')",
        Configuration:{ Value:'# New Note\n\nDouble-click to edit.' },
      })
      refreshAndSave()
    }

    function deleteActiveNote () {
      const Card   = my.Card
      const Active = Card?.own?.activeNote
      if ((Card == null) || (Active == null)) { return }
      const Index = Card.Widgets.findIndex((Obj) => Obj.Id === Active.Id)
      if (Index >= 0) { Card.Widgets.splice(Index,1) }
      Card.own.activeNote = null
      refreshAndSave()
    }

    function arrangeActiveNote (Direction) {
      const Card   = my.Card
      const Active = Card?.own?.activeNote
      if ((Card == null) || (Active == null)) { return }

      const Ordered = [ ...Card.Widgets ].sort((a,b) => (a.zIndex ?? 0)-(b.zIndex ?? 0))
      const Index   = Ordered.findIndex((Obj) => Obj.Id === Active.Id)
      if (Index < 0) { return }

      const [ Obj ] = Ordered.splice(Index,1)
      switch (Direction) {
        case 'front':    Ordered.push(Obj);                          break
        case 'back':     Ordered.unshift(Obj);                       break
        case 'forward':  Ordered.splice(Index+1, 0, Obj);            break
        case 'backward': Ordered.splice(Math.max(Index-1,0), 0, Obj); break
      }
      Ordered.forEach((Each,i) => { Each.zIndex = i+1; Each.Number = i+1 })
      refreshAndSave()
    }

    /**** expand / collapse - grows to the left, keeping the right edge fixed ****/

    function applyWidth (Width) {
      const RightEdge = my.x + my.Width
      my.changeGeometryTo(RightEdge - Width, null, Width, Height)   // re-renders
    }

    let OutsideHandler = null

    function openMenu () {
      if (my.own.expanded === true) { return }
      my.own.expanded = true
      applyWidth(ExpandedWidth)

      OutsideHandler = (Event) => {
        const View = my.View
        if ((View != null) && View.contains(Event.target)) { return }
        closeMenu()
      }
      setTimeout(() => {                      // skip the opening click itself
        if (OutsideHandler != null) { document.addEventListener('pointerdown', OutsideHandler, true) }
      }, 0)
    }

    function closeMenu () {
      if (OutsideHandler != null) {
        document.removeEventListener('pointerdown', OutsideHandler, true)
        OutsideHandler = null
      }
      if (my.own.expanded !== true) { return }
      my.own.expanded = false
      applyWidth(CollapsedWidth)
    }

    on('ready', () => {                       // always start collapsed
      my.own.expanded = false
      applyWidth(CollapsedWidth)
    })

    on('obsolete', () => {
      if (OutsideHandler != null) {
        document.removeEventListener('pointerdown', OutsideHandler, true)
        OutsideHandler = null
      }
    })

    /**** Button - one icon button ****/

    function Button (IconName, Title, disabled, onClick) {
      return html`
        <button
          class="bc-snm-btn" type="button" title=${Title}
          disabled=${disabled}
          onClick=${disabled ? undefined : onClick}
          dangerouslySetInnerHTML=${{ __html:Icons[IconName] }}
        ></button>
      `
    }

    on('render', () => {
      const expanded = (my.own.expanded === true)

      if (! expanded) {
        return html`
          <div class="bc-snm-bar collapsed" onClick=${() => openMenu()}>
            <div class="bc-snm-btn" dangerouslySetInnerHTML=${{ __html:Icons.caretLeft }}></div>
          </div>
        `
      }

      const noActive = (my.Card?.own?.activeNote == null)

      return html`
        <div class="bc-snm-bar">
          ${Button('plus',       'new note',     false,    () => createStickyNote())}
          ${Button('trash',      'delete note',  noActive, () => deleteActiveNote())}
          ${Button('doubleUp',   'to front',     noActive, () => arrangeActiveNote('front'))}
          ${Button('up',         'move forward', noActive, () => arrangeActiveNote('forward'))}
          ${Button('down',       'move backward',noActive, () => arrangeActiveNote('backward'))}
          ${Button('doubleDown', 'to back',      noActive, () => arrangeActiveNote('back'))}
        </div>
      `
    })
  }
