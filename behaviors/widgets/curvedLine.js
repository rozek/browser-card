/**** curvedLine - draws a quarter-circle/-ellipse across the widget, optionally with arrow heads ****/

// the curve is a quarter ellipse spanning the widget box (radii = box size), so
// both ends sit in widget corners and the tangents there are axis-aligned. The
// four variants are rotationally symmetric; "Direction" names the travelling
// direction at the *end* of the curve.
//
// Configuration fields:
//   "Direction"  - 'n'|'e'|'s'|'w' (default 'e'): tangent direction at the end
//   "clockwise"  - true|false (default false): for a given end direction there are
//                  two quarter arcs - this picks the (counter-)clockwise one
//   "ArrowHeads" - 'none'|'start'|'end'|'both' (default 'none')
//   "Color"      - any CSS color (default '#000000')
//   "Thickness"  - line width in px (default 2)

  const Directions = [ 'n','e','s','w' ]
  const HeadModes  = [ 'none','start','end','both' ]

  const K = 0.5522847498307936              // cubic-Bézier handle for a 90° arc

/**** actual renderer ****/

  export default async function ({ on, my, html, Configuration }) {
    const Direction = (
      Directions.includes(Configuration?.Direction) ? Configuration.Direction : 'e'
    )
    const clockwise = (Configuration?.clockwise === true)
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

    const InstanceId = my.Id ?? ('bc-cl-' + Math.random().toString(36).slice(2))
    const StartId    = 'bc-cl-start-' + InstanceId
    const EndId      = 'bc-cl-end-'   + InstanceId

  /**** computePath - the SVG path "d" for the configured direction ****/

    function computePath (W, H) {
      const m  = Margin
      const X0 = m, Y0 = m, X1 = W-m, Y1 = H-m
      const RW = X1-X0, RH = Y1-Y0

      const TL = [ X0, Y0 ], TR = [ X1, Y0 ], BR = [ X1, Y1 ], BL = [ X0, Y1 ]

    /**** center corner + signed radii (A is the x-endpoint with a vertical
          tangent, B the y-endpoint with a horizontal one); "clockwise" selects
          the other arc that ends in the same direction ****/

      const Variants = {
        n: { ccw:[ TL,  RW,  RH, true  ], cw:[ TR, -RW,  RH, true  ] },
        s: { ccw:[ BR, -RW, -RH, true  ], cw:[ BL,  RW, -RH, true  ] },
        e: { ccw:[ TR, -RW,  RH, false ], cw:[ BR, -RW, -RH, false ] },
        w: { ccw:[ BL,  RW, -RH, false ], cw:[ TL,  RW,  RH, false ] },
      }

      const [ C, sx, sy, endIsA ] = Variants[Direction][clockwise ? 'cw' : 'ccw']
      const Cx = C[0], Cy = C[1]

      const Ax = Cx+sx,   Ay = Cy
      const Bx = Cx,       By = Cy+sy
      const P1x = Cx+sx,   P1y = Cy + K*sy
      const P2x = Cx+K*sx, P2y = Cy + sy

      return (
        endIsA
        ? `M ${Bx} ${By} C ${P2x} ${P2y} ${P1x} ${P1y} ${Ax} ${Ay}`
        : `M ${Ax} ${Ay} C ${P1x} ${P1y} ${P2x} ${P2y} ${Bx} ${By}`
      )
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
      const Defs = []
        if (EndMarker)   { Defs.push(buildMarker(EndId,  'auto')) }
        if (StartMarker) { Defs.push(buildMarker(StartId,'auto-start-reverse')) }

      return `
        <svg xmlns="http://www.w3.org/2000/svg"
          width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
          style="display:block; overflow:visible">
          <defs>${Defs.join('')}</defs>
          <path d="${computePath(W, H)}" fill="none"
            stroke="${Color}" stroke-width="${Thickness}" stroke-linecap="butt"
            ${StartMarker ? `marker-start="url(#${StartId})"` : ''}
            ${EndMarker   ? `marker-end="url(#${EndId})"`     : ''}
          ></path>
        </svg>`
    }

  /**** size-aware (re)drawing - keeps the curve correct while the widget resizes ****/

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
