/**** straightLine - draws a straight line across the widget, optionally with arrow heads ****/

// Configuration fields:
//   "Direction"  - 'n'|'ne'|'e'|'se'|'s'|'sw'|'w'|'nw' (default 'e'): diagonal
//                  lines run from corner to corner, horizontal/vertical ones from
//                  the middle of one side to the middle of the opposite side; the
//                  letter also tells where the line "points" to (relevant for heads)
//   "ArrowHeads" - 'none'|'start'|'end'|'both' (default 'none')
//   "Color"      - any CSS color (default '#000000')
//   "Thickness"  - line width in px (default 2)

  const Directions = [ 'n','ne','e','se','s','sw','w','nw' ]
  const HeadModes  = [ 'none','start','end','both' ]

/**** actual renderer ****/

  export default async function ({ on, my, html, Configuration }) {
    const Direction = (
      Directions.includes(Configuration?.Direction) ? Configuration.Direction : 'e'
    )
    const ArrowHeads = (
      HeadModes.includes(Configuration?.ArrowHeads) ? Configuration.ArrowHeads : 'none'
    )
    const Color = Configuration?.Color ?? '#000000'

    const Thickness = (
      (typeof Configuration?.Thickness === 'number') && (Configuration.Thickness > 0)
      ? Configuration.Thickness : 2
    )

    const StartMarker = ((ArrowHeads === 'start') || (ArrowHeads === 'both'))
    const EndMarker   = ((ArrowHeads === 'end')   || (ArrowHeads === 'both'))

    const HeadSize = Math.max(8, Thickness*4)           // arrow head size in px
    const Margin   = Math.ceil(Thickness/2) + (ArrowHeads === 'none' ? 1 : HeadSize/2)

    const InstanceId = my.Id ?? ('bc-sl-' + Math.random().toString(36).slice(2))
    const StartId    = 'bc-sl-start-' + InstanceId
    const EndId      = 'bc-sl-end-'   + InstanceId

  /**** computeEndpoints - resolves [x1,y1,x2,y2] for the configured direction ****/

    function computeEndpoints (W, H) {
      const cx = W/2, cy = H/2
      const L = Margin, R = W-Margin, T = Margin, B = H-Margin
      switch (Direction) {
        case 'n':  return [ cx, B, cx, T ]       // bottom-mid -> top-mid
        case 's':  return [ cx, T, cx, B ]       // top-mid    -> bottom-mid
        case 'e':  return [ L, cy, R, cy ]       // left-mid   -> right-mid
        case 'w':  return [ R, cy, L, cy ]       // right-mid  -> left-mid
        case 'ne': return [ L, B, R, T ]         // bottom-left  -> top-right
        case 'se': return [ L, T, R, B ]         // top-left     -> bottom-right
        case 'sw': return [ R, T, L, B ]         // top-right    -> bottom-left
        case 'nw': return [ R, B, L, T ]         // bottom-right -> top-left
      }
    }

  /**** buildMarker - one arrow-head <marker> definition ****/

    function buildMarker (Id, Orientation) {
      return `
        <marker id="${Id}" viewBox="0 0 10 10" refX="10" refY="5"
          markerUnits="userSpaceOnUse" markerWidth="${HeadSize}" markerHeight="${HeadSize}"
          orient="${Orientation}">
          <path d="M0,0 L10,5 L0,10 z" fill="${Color}"></path>
        </marker>`
    }

  /**** buildSVG - the complete inline SVG for a given widget size ****/

    function buildSVG (W, H) {
      const [ x1, y1, x2, y2 ] = computeEndpoints(W, H)

      const Defs = []
        if (EndMarker)   { Defs.push(buildMarker(EndId,  'auto')) }
        if (StartMarker) { Defs.push(buildMarker(StartId,'auto-start-reverse')) }

      return `
        <svg xmlns="http://www.w3.org/2000/svg"
          width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
          style="display:block; overflow:visible">
          <defs>${Defs.join('')}</defs>
          <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
            stroke="${Color}" stroke-width="${Thickness}" stroke-linecap="butt"
            ${StartMarker ? `marker-start="url(#${StartId})"` : ''}
            ${EndMarker   ? `marker-end="url(#${EndId})"`     : ''}
          ></line>
        </svg>`
    }

  /**** size-aware (re)drawing - keeps the line correct while the widget resizes ****/

    let Container = null
    let Observer  = null

    function redraw () {
      if (Container == null) { return }
      const W = Container.clientWidth, H = Container.clientHeight
      if ((W === 0) || (H === 0)) { return }
      Container.innerHTML = buildSVG(W, H)
    }

    function mount (Element) {
      if (Element == null) {                                          // unmount
        if (Observer != null) { Observer.disconnect(); Observer = null }
        Container = null
        return
      }
      Container = Element
      if ((typeof ResizeObserver !== 'undefined') && (Observer == null)) {
        Observer = new ResizeObserver(() => redraw())
        Observer.observe(Element)
      }
      redraw()
    }

    on('teardown', () => {
      if (Observer != null) { Observer.disconnect(); Observer = null }
      Container = null
    })

    on('render', () => html`
      <div ref=${mount} style=${{ width:'100%', height:'100%', overflow:'visible' }}></div>
    `)
  }
