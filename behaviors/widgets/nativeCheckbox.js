/**** nativeCheckbox - wraps a native checkbox ****/

// "Text" holds the state: 'on'/'true' = checked, 'off'/'false' = unchecked,
// '-' = indeterminate. User toggles write 'on'/'off' back to "Text" and
// dispatch 'change'; lock via my.disabled = true (or Configuration field
// "disabled")

/**** styleRuleInjectedOnce - adds a <style> rule to the document head once ****/

  function styleRuleInjectedOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const CheckboxStyle = `
    .bc-widget > input[type="checkbox"] {
      position:absolute;
      left:50%; top:50%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .bc-widget > input[type="checkbox"]:disabled {
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativecheckbox-style', CheckboxStyle)

    on('render', () => {
      const Raw = String(my.Text ?? my.Value ?? '').trim().toLowerCase()
      const Indeterminate = (Raw === '-')
      const Checked       = ((Raw === 'on') || (Raw === 'true'))
      const Disabled      = ((my.disabled ?? Configuration?.disabled ?? false) === true)

      return html`
        <input
          type="checkbox"
          checked=${Checked}
          disabled=${Disabled}
          ref=${(Element) => { if (Element != null) { Element.indeterminate = Indeterminate } }}
          onChange=${(Event) => {
            const isChecked = Event.target.checked
            my.Text = my.Value = (isChecked ? 'on' : 'off')
            dispatch('change', isChecked)
          }}
        />
      `
    })
  }
