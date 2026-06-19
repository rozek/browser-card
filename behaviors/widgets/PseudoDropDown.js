/**** PseudoDropDown - an Icon that opens a drop-down menu when clicked ****/

// the icon comes from my.Icon or Configuration.Icon (a bare name without "/" and
// "." resolves to "icons/<name>.png" beside BrowserCard.js; with no source a
// built-in default is used); if "Color" is set the icon is tinted in it, else it
// is shown greyscale. a transparent native <select> overlays the icon, so a
// click opens the menu built from "Options" (values or "value:label" pairs; a
// leading "-" disables an entry). the picked value is written back to Value
// and dispatched as 'change'. "disabled" blocks it.

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

  const PseudoDropDownStyle = `
    .bc-widget > pseudo-dropdown {
      position:absolute;
      left:50%; top:50%;
      transform:translate(-50%,-50%);
      width:24px; height:24px;
      pointer-events:auto;
    }
    .bc-widget > pseudo-dropdown > img,
    .bc-widget > pseudo-dropdown > .bc-pdd-tint {
      position:absolute; inset:0;
      width:100%; height:100%;
      pointer-events:none;
    }
    .bc-widget > pseudo-dropdown > img {
      object-fit:contain;
      filter:grayscale(1);
    }
    .bc-widget > pseudo-dropdown > .bc-pdd-tint {
      -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;
      -webkit-mask-position:center; mask-position:center;
      -webkit-mask-size:contain; mask-size:contain;
    }
    .bc-widget > pseudo-dropdown > select {
      position:absolute; inset:0;
      width:100%; height:100%;
      opacity:0; cursor:pointer;
    }
    .bc-widget > pseudo-dropdown > select:disabled {
      cursor:not-allowed;
    }
  `

  /**** OptionList - normalises Options into { value, label, disabled } entries ****/

  function OptionList (rawOptions) {
    if (rawOptions == null) { return [] }
    const Items = (Array.isArray(rawOptions) ? rawOptions : String(rawOptions).split(/\s+/))
    return Items
      .map((Item) => String(Item).trim())
      .filter((Item) => Item !== '')
      .map((Item) => {
        let disabled = false
        let Entry = Item
        if (Entry.startsWith('-')) { disabled = true; Entry = Entry.slice(1) }
        const ColonAt = Entry.indexOf(':')
        return (
          ColonAt < 0
          ? { value:Entry, label:Entry, disabled:disabled }
          : { value:Entry.slice(0,ColonAt), label:Entry.slice(ColonAt+1), disabled:disabled }
        )
      })
  }

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    injectStyleRuleOnce('bc-pseudodropdown-style', PseudoDropDownStyle)

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
        ? DefaultIcon
        : ( (! rawIcon.includes('/') && ! rawIcon.includes('.'))
            ? IconsBase + rawIcon + '.png'
            : rawIcon )
      )
      const Color    = (my.Color ?? Configuration?.Color)
      const disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)
      const Options  = OptionList(my.Options ?? Configuration?.Options)

      const wanted   = (String((my.Value ?? Configuration?.Value) ?? ''))
      const selected = (Options.some((Option) => Option.value === wanted) ? wanted : (Options[0]?.value ?? ''))

      const MaskURL = 'url("' + URL.replaceAll('"','%22') + '")'
      const Visual = (
        (Color != null)
        ? html`<div class="bc-pdd-tint" style=${{
            backgroundColor:Color, maskImage:MaskURL, WebkitMaskImage:MaskURL,
          }}></div>`
        : html`<img src=${URL} alt="" />`
      )

      return html`
        <pseudo-dropdown>
          ${Visual}
          <select
            disabled=${disabled}
            value=${selected}
            onChange=${(Event) => {
              my.Value = Event.target.value
              dispatch('change', Event.target.value)
            }}
          >
            ${Options.map((Option) => html`
              <option key=${Option.value} value=${Option.value} disabled=${Option.disabled}>${Option.label}</option>
            `)}
          </select>
        </pseudo-dropdown>
      `
    })
  }
