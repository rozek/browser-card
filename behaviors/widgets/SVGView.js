/**** SVGView - shows the inline SVG source held in "Value" ****/

// same Configuration fields as ImageView: "scaling" ('none'|'stretch'|'cover'|
// 'contain') and "alignment" (e.g. 'center center', 'left top', ...) - applied
// to the embedded <svg> via its own "preserveAspectRatio" (deterministic for SVG)

  const AlignToken = {
    'left top':'xMinYMin',    'center top':'xMidYMin',    'right top':'xMaxYMin',
    'left center':'xMinYMid',  'center center':'xMidYMid', 'right center':'xMaxYMid',
    'left bottom':'xMinYMax', 'center bottom':'xMidYMax', 'right bottom':'xMaxYMax',
  }
  const FlexX = { left:'flex-start', center:'center', right:'flex-end' }
  const FlexY = { top:'flex-start',  center:'center', bottom:'flex-end' }

  const Scalings = [ 'none','stretch','cover','contain' ]

/**** actual renderer ****/

  export default async function ({ on, my, html, Configuration }) {
    const Scaling = (
      Scalings.includes(Configuration?.scaling) ? Configuration.scaling : 'contain'
    )
    const Alignment = (
      AlignToken[Configuration?.alignment] != null ? Configuration.alignment : 'center center'
    )

    const preserveAspectRatio = (
      Scaling === 'stretch'
      ? 'none'
      : AlignToken[Alignment] + (Scaling === 'cover' ? ' slice' : ' meet')
    )

  /**** fitEmbeddedSVG - sizes/aligns the inserted <svg> to the widget box ****/

    function fitEmbeddedSVG (Element) {
      if (Element == null) { return }
      const SVG = Element.querySelector('svg')
      if (SVG == null) { return }

      if (Scaling === 'none') {                  // keep intrinsic size, just align
        SVG.style.width = SVG.style.height = 'auto'
        SVG.style.maxWidth = SVG.style.maxHeight = '100%'
      } else {                                   // fill the box, fit via aspect ratio
        ensuredViewBoxFor(SVG)                   // without it, scaling has no effect
        SVG.setAttribute('preserveAspectRatio', preserveAspectRatio)
        SVG.style.display = 'block'
        SVG.style.width = SVG.style.height = '100%'
      }
    }

  /**** ensuredViewBoxFor - many SVGs carry no "viewBox" but preserveAspectRatio can only scale if viewBox exists ****/

    function ensuredViewBoxFor (SVG) {
      if (SVG.hasAttribute('viewBox')) { return }
      const Width  = parseFloat(SVG.getAttribute('width'))
      const Height = parseFloat(SVG.getAttribute('height'))
      if ((Width > 0) && (Height > 0)) {
        SVG.setAttribute('viewBox', '0 0 ' + Width + ' ' + Height)
        return
      }
      try {
        const Box = SVG.getBBox()                // needs the SVG to be in the DOM
        if ((Box.width > 0) && (Box.height > 0)) {
          SVG.setAttribute('viewBox',
            Box.x + ' ' + Box.y + ' ' + Box.width + ' ' + Box.height
          )
        }
      } catch (Signal) { /* getBBox unavailable (not yet laid out) - ignore */ }
    }

    const [ alignX, alignY ] = Alignment.split(' ')
    const ContainerStyle = (
      Scaling === 'none'                       // intrinsic size needs flex to align
      ? {
          display:'flex', overflow:'hidden', width:'100%', height:'100%',
          justifyContent:FlexX[alignX], alignItems:FlexY[alignY],
        }
      : { display:'block', overflow:'hidden', width:'100%', height:'100%' }
    )

    on('render', () => {
      const Source = String(my.Value ?? '').trim()
      if (Source === '') {
        return html`
          <div style=${{
            display:'flex', alignItems:'center', justifyContent:'center',
            width:'100%', height:'100%',
            color:'#999999', fontSize:'13px', textAlign:'center',
          }}>(SVG source in "Value")</div>
        `
      }
      return html`
        <div
          class="bc-svgview"
          style=${ContainerStyle}
          ref=${(Element) => fitEmbeddedSVG(Element)}
          dangerouslySetInnerHTML=${{ __html:Source }}
        ></div>
      `
    })
  }
