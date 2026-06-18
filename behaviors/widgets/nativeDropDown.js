/**** nativeDropDown - wraps a native <select> ****/

// the selected Value (also available via "Text", where picking writes it back)
// and the disabled flag are read from my.* (falling back to the Configuration).
// "Options" is a list - or a space-separated string - of selectable values or
// "value:label" pairs; a leading "-" before an entry disables that option.
// while focused, external Value/Text changes do not disturb the selection; on
// blur it is synced

/**** styleRuleInjectedOnce - adds a <style> rule to the document head once ****/

  function styleRuleInjectedOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

/**** optionList - normalises Options into { value, label, disabled } entries ****/

  function optionList (Raw) {
    if (Raw == null) { return [] }
    const Items = (Array.isArray(Raw) ? Raw : String(Raw).split(/\s+/))
    return Items
      .map((Item) => String(Item).trim())
      .filter((Item) => Item !== '')
      .map((Item) => {
        let Disabled = false
        let Entry = Item
        if (Entry.startsWith('-')) { Disabled = true; Entry = Entry.slice(1) }
        const ColonAt = Entry.indexOf(':')
        return (
          ColonAt < 0
          ? { value:Entry, label:Entry, disabled:Disabled }
          : { value:Entry.slice(0,ColonAt), label:Entry.slice(ColonAt+1), disabled:Disabled }
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
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativedropdown-style', DropDownStyle)

    on('render', () => {
      const Disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)
      const Options  = optionList(my.Options ?? Configuration?.Options)

      const Wanted = (
        my.Text != null ? String(my.Text) : String((my.Value ?? Configuration?.Value) ?? '')
      )

    /**** show the wanted value if it is among the options, else the first one ****/

      const Matches  = Options.some((Option) => Option.value === Wanted)
      const Selected = (Matches ? Wanted : (Options[0]?.value ?? ''))

      return html`
        <select
          disabled=${Disabled}
          value=${Selected}
          onChange=${(Event) => {
            my.Text = Event.target.value
            dispatch('change', Event.target.value)
          }}
        >
          ${Options.map((Option) => html`
            <option key=${Option.value} value=${Option.value} disabled=${Option.disabled}>${Option.label}</option>
          `)}
        </select>
      `
    })
  }
