/**** Icon - a clickable bitmap icon ****/

// the image URL comes from my.Icon or Configuration.Icon. a bare name (no "/"
// and no "." - i.e. no path and no extension) is resolved to
// "icons/<name>.png" beside BrowserCard.js. the bitmap is scaled to 24x24
// keeping its aspect ratio ("contain") and centred in the widget. without
// "Color" it is shown greyscale; with "Color" it is tinted in that colour (via
// a mask - works for monochrome icons with transparency). if "hilite" is set,
// the CSS class "active" is added (highlight box). it dispatches 'click' unless
// "disabled".

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const IconsBeside   = 'icons/'                        // beside BrowserCard.js
  const IconsFromHere = '../../icons/'   // fallback, relative to this behaviour

/**** a "fa-question-circle-o"-style default icon, embedded as a data-URI ****/

  const DefaultIcon = 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30">' +
      '<circle cx="12" cy="12" r="10.5" fill="none" stroke="#000000" stroke-width="1.5"/>' +
      '<text x="12" y="16.5" text-anchor="middle" fill="#000000"' +
        ' stroke="#000000" stroke-width="0.75"' +
        ' font-family="Helvetica,Arial,sans-serif" font-size="13" font-weight="bold">?</text>' +
    '</svg>'
  )

  const IconStyle = `
    .bc-widget > icon {
      position:absolute;
      left:50%; top:50%;
      transform:translate(-50%,-50%);
      width:24px; height:24px;
      pointer-events:auto;
    }
    .bc-widget > icon > img {
      width:100%; height:100%;
      object-fit:contain;
      filter:grayscale(1);
    }
    .bc-widget > icon > .bc-icon-tint {
      width:100%; height:100%;
      -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;
      -webkit-mask-position:center; mask-position:center;
      -webkit-mask-size:contain; mask-size:contain;
    }
    .bc-widget > icon.active {
      background:#e8f0ff;
      outline:solid 2px lightgray; border-radius:4px;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    injectStyleRuleOnce('bc-icon-style', IconStyle)

    const BC = globalThis.BC
    const IconsBase = (
      (BC?.ModuleURL != null)
      ? new URL(IconsBeside, BC.ModuleURL).href
      : new URL(IconsFromHere, import.meta.url).href
    )

    on('render', () => {
      const rawIcon = String((my.Icon ?? Configuration?.Icon) ?? '').trim()
      const URL = (
        rawIcon === ''
        ? DefaultIcon                           // no source -> built-in default
        : ( (! rawIcon.includes('/') && ! rawIcon.includes('.'))
            ? IconsBase + rawIcon + '.png'      // bare name -> icons/<name>.png
            : rawIcon )
      )
      const Color    = (my.Color     ?? Configuration?.Color)
      const Hilite   = ((my.hilite   ?? Configuration?.hilite   ?? false) === true)
      const disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)

      const Visual = (
        (Color != null)
        ? html`<div class="bc-icon-tint" style=${{
            backgroundColor:Color,
            maskImage:'url("' + URL.replaceAll('"','%22') + '")',
            WebkitMaskImage:'url("' + URL.replaceAll('"','%22') + '")',
          }}></div>`
        : html`<img src=${URL} alt="" />`
      )

      return html`
        <icon
          class=${Hilite ? 'active' : undefined}
          style=${{ cursor:(disabled ? 'not-allowed' : 'pointer'), opacity:(disabled ? 0.3 : 1) }}
          onClick=${() => { if (! disabled) { dispatch('click') } }}
        >${Visual}</icon>
      `
    })
  }
