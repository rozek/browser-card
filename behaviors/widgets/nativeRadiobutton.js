/**** nativeRadiobutton - wraps a native radio button ****/

// "Value" holds the state: 'on'/'true' = selected, 'off'/'false' = not selected.
// selecting writes 'on'/'off' back to "Value" and dispatches 'change'; lock it
// via my.disabled = true (or the Configuration field "disabled").

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const RadiobuttonStyle = `
    .bc-widget > input[type="radio"] {
      position:absolute;
      left:50%; top:50%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .bc-widget > input[type="radio"]:disabled {
      opacity:0.3; cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    injectStyleRuleOnce('bc-nativeradiobutton-style', RadiobuttonStyle)

    on('render', () => {
      const rawValue      = String(my.Value ?? '').trim().toLowerCase()
      const checked  = ((rawValue === 'on') || (rawValue === 'true'))
      const disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)

      return html`
        <input
          type="radio"
          checked=${checked}
          disabled=${disabled}
          onChange=${(Event) => {
            const isChecked = Event.target.checked
            my.Value = (isChecked ? 'on' : 'off')
            dispatch('change', isChecked)
          }}
        />
      `
    })
  }
