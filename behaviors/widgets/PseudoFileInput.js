/**** PseudoFileInput - an Icon that opens a file chooser when clicked ****/

// the icon is taken from my.Icon or Configuration.Icon (a bare name without "/"
// and "." resolves to "icons/<name>.png" beside BrowserCard.js; with no source
// a built-in default is used), 24x24 "contain", centred - greyscale, or tinted
// in "Color" if set (via a mask, for monochrome icons). a
// click opens a hidden <input type="file">; "multiple" allows several files,
// "FileTypes" sets the accept filter (string or array), "disabled" blocks it.
// the chosen files are triggered as 'change' (an array of File objects).

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const IconsBeside   = 'icons/'       // beside BrowserCard.js
  const IconsFromHere = '../../icons/' // fallback, relative to this behaviour

  /**** a "fa-question-circle-o"-style default icon, embedded as a data-URI ****/

  const DefaultIcon = 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30">' +
      '<circle cx="12" cy="12" r="10.5" fill="none" stroke="#000000" stroke-width="1.5"/>' +
      '<text x="12" y="16.5" text-anchor="middle" fill="#000000"' +
        ' stroke="#000000" stroke-width="0.75"' +
        ' font-family="Helvetica,Arial,sans-serif" font-size="13" font-weight="bold">?</text>' +
    '</svg>'
  )

  const PseudoFileStyle = `
    .bc-widget > label.bc-pseudo-file {
      position:absolute;
      left:50%; top:50%;
      transform:translate(-50%,-50%);
      width:24px; height:24px;
      cursor:pointer; pointer-events:auto;
    }
    .bc-widget > label.bc-pseudo-file.disabled {
      opacity:0.3; cursor:not-allowed;
    }
    .bc-widget > label.bc-pseudo-file > img {
      width:100%; height:100%;
      object-fit:contain;
      filter:grayscale(1);
    }
    .bc-widget > label.bc-pseudo-file > .bc-icon-tint {
      width:100%; height:100%;
      -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;
      -webkit-mask-position:center; mask-position:center;
      -webkit-mask-size:contain; mask-size:contain;
    }
  `

  /**** acceptFrom - normalises FileTypes into an "accept" string ****/

  function acceptFrom (rawFileTypes) {
    if (rawFileTypes == null) { return undefined }
    const Items = (Array.isArray(rawFileTypes) ? rawFileTypes : String(rawFileTypes).split(','))
    const List = Items.map((Item) => String(Item).trim()).filter((Item) => Item !== '')
    return (List.length > 0 ? List.join(',') : undefined)
  }

/**** actual behavior script ****/

  export default async function ({ on, my, html, trigger, Configuration }) {
    injectStyleRuleOnce('bc-pseudofileinput-style', PseudoFileStyle)

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
        ? DefaultIcon                              // no source -> built-in default
        : ( (! rawIcon.includes('/') && ! rawIcon.includes('.'))
            ? IconsBase + rawIcon + '.png'             // bare name -> icons/<name>.png
            : rawIcon )
      )
      const Color       = (my.Color ?? Configuration?.Color)
      const multiple    = ((my.multiple ?? Configuration?.multiple ?? false) === true)
      const disabled    = ((my.disabled ?? Configuration?.disabled ?? false) === true)
      const Acceptables = acceptFrom(my.FileTypes ?? Configuration?.FileTypes)

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
        <label class=${'bc-pseudo-file' + (disabled ? ' disabled' : '')}>
          ${Visual}
          <input
            type="file"
            style=${{ display:'none' }}
            multiple=${multiple}
            disabled=${disabled}
            accept=${Acceptables}
            onChange=${(Event) => {
              trigger('change', Array.from(Event.target.files ?? []))
            }}
          />
        </label>
      `
    })
  }
