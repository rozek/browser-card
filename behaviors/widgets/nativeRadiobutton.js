/**** nativeRadiobutton - wraps a native radio button ****/

// "Text" holds the state: 'on'/'true' = selected, 'off'/'false' = not selected.
// selecting writes 'on'/'off' back to "Text" and dispatches 'change'; lock it
// via my.disabled = true (or the Configuration field "disabled").

/**** styleRuleInjectedOnce - adds a <style> rule to the document head once ****/

  function styleRuleInjectedOnce (Id, CSS) {
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
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativeradiobutton-style', RadiobuttonStyle)

    on('render', () => {
      const Raw      = String(my.Text ?? my.Value ?? '').trim().toLowerCase()
      const Checked  = ((Raw === 'on') || (Raw === 'true'))
      const Disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)

      return html`
        <input
          type="radio"
          checked=${Checked}
          disabled=${Disabled}
          onChange=${(Event) => {
            const isChecked = Event.target.checked
            my.Text = (isChecked ? 'on' : 'off')
            dispatch('change', isChecked)
          }}
        />
      `
    })
  }
