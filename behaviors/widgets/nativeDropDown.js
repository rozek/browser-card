/**** nativeDropDown - wraps a native <select> ****/

// the selected Value (where picking writes the new value back)
// and the disabled flag are read from my.* (falling back to the Configuration).
// "Options" is a list - or a space-separated string - of selectable values or
// "value:label" pairs; a leading "-" before an entry disables that option.
// while focused, external Value changes do not disturb the selection; on
// blur it is synced

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

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

  const DropDownStyle = `
    .bc-widget > select {
      height:30px; width:100%; min-width:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }
    .bc-widget > select:disabled {
      opacity:0.3; cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    injectStyleRuleOnce('bc-nativedropdown-style', DropDownStyle)

    on('render', () => {
      const disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)
      const Options  = OptionList(my.Options ?? Configuration?.Options)

      const wanted = (
        String((my.Value ?? Configuration?.Value) ?? '')
      )

    /**** show the wanted value if it is among the options, else the first one ****/

      const Matches  = Options.some((Option) => Option.value === wanted)
      const Selected = (Matches ? wanted : (Options[0]?.value ?? ''))

      return html`
        <select
          disabled=${disabled}
          value=${Selected}
          onChange=${(Event) => {
            my.Value = Event.target.value
            dispatch('change', Event.target.value)
          }}
        >
          ${Options.map((Option) => html`
            <option key=${Option.value} value=${Option.value} disabled=${Option.disabled} style=${Option.disabled ? { opacity:0.3 } : undefined}>${Option.label}</option>
          `)}
        </select>
      `
    })
  }
