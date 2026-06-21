/**** QRCodeView - renders the text/URL held in "Value" as a scalable QR code ****/

// uses "uqr" (https://github.com/unjs/uqr) - a zero-dependency ESM QR generator,
// kept locally so no external import is needed at runtime. The code is drawn as
// inline SVG with a viewBox, so it always scales square into the box.
//
// uqr is imported dynamically, trying several locations relative to this file so
// it works whether served from the repo root ("public/uqr.js") or from a flat
// build output where "public/" was hoisted to the site root.
//
// Configuration fields:
//   "ErrorCorrection" - 'L'|'M'|'Q'|'H' (default 'M'): higher = more robust/denser
//   "Border"          - quiet-zone width in modules (default 4)
//   "Color"           - dark-module color (default '#000000')
//   "Background"      - light-module color (default '#ffffff', may be 'transparent')

  const ECCLevels = [ 'L','M','Q','H' ]

  const UQRCandidates = [
    '../../public/uqr.js',          // repo-root layout (behaviors/widgets -> public/)
    '../../uqr.js',                 // build output with "public/" hoisted to root
    './uqr.js',                     // uqr.js placed next to this behavior
  ]

/**** loadEncode - dynamically locates uqr's "encode" without breaking the module ****/

  async function loadEncode () {
    for (const Candidate of UQRCandidates) {
      try {
        const Url    = new URL(Candidate, import.meta.url).href
        const Module = await import(/* @vite-ignore */ Url)
        if (typeof Module?.encode === 'function') { return Module.encode }
      } catch (Signal) { /* try the next candidate */ }
    }
    return null
  }

/**** actual renderer ****/

  export default async function ({ on, my, html, Configuration }) {
    const encode = await loadEncode()

    const ErrorCorrection = (
      ECCLevels.includes(Configuration?.ErrorCorrection) ? Configuration.ErrorCorrection : 'M'
    )
    const Border = (
      (typeof Configuration?.Border === 'number') && (Configuration.Border >= 0)
      ? Math.floor(Configuration.Border) : 4
    )
    const Color      = Configuration?.Color      ?? '#000000'
    const Background  = Configuration?.Background ?? '#ffffff'

  /**** buildSVG - one inline SVG (single path for all dark modules) ****/

    function buildSVG (data, size) {
      let Path = ''
        for (let y = 0; y < size; y++) {
          const Row = data[y]
          for (let x = 0; x < size; x++) {
            if (Row[x]) { Path += `M${x} ${y}h1v1h-1z` }
          }
        }

      return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}"
          width="100%" height="100%" preserveAspectRatio="xMidYMid meet"
          shape-rendering="crispEdges" style="display:block">
          <rect width="${size}" height="${size}" fill="${Background}"></rect>
          <path d="${Path}" fill="${Color}"></path>
        </svg>`
    }

  /**** placeholder - shown when there is nothing (or nothing encodable) to display ****/

    function placeholder (Message) {
      return html`
        <div style=${{
          display:'flex', alignItems:'center', justifyContent:'center',
          width:'100%', height:'100%',
          color:'#999999', fontSize:'13px', textAlign:'center', padding:'4px',
        }}>${Message}</div>
      `
    }

    on('render', () => {
      if (encode == null) { return placeholder('(QR library "uqr" not found)') }

      const Source = String(my.Value ?? '').trim()
      if (Source === '') { return placeholder('(QR content in "Value")') }

      let Result
      try {
        Result = encode(Source, { ecc:ErrorCorrection, border:Border })
      } catch (Signal) {
        return placeholder('(cannot encode this value)')
      }

      return html`
        <div
          style=${{ width:'100%', height:'100%' }}
          dangerouslySetInnerHTML=${{ __html:buildSVG(Result.data, Result.size) }}
        ></div>
      `
    })
  }
