/**** nativeCheckbox - wraps a native checkbox ****/

// "Value" holds the state: 'on'/'true' = checked, 'off'/'false' = unchecked,
// '-' = indeterminate. User toggles write 'on'/'off' back to "Value" and
// trigger 'change'; lock via my.disabled = true (or Configuration field
// "disabled")

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
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
      opacity:0.3; cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, trigger, Configuration }) {
    injectStyleRuleOnce('bc-nativecheckbox-style', CheckboxStyle)

    on('render', () => {
      const rawValue = String(my.Value ?? '').trim().toLowerCase()
      const indeterminate = (rawValue === '-')
      const checked       = ((rawValue === 'on') || (rawValue === 'true'))
      const disabled      = ((my.disabled ?? Configuration?.disabled ?? false) === true)

      return html`
        <input
          type="checkbox"
          checked=${checked}
          disabled=${disabled}
          ref=${(Element) => { if (Element != null) { Element.indeterminate = indeterminate } }}
          onChange=${(Event) => {
            const isChecked = Event.target.checked
            my.Value = (isChecked ? 'on' : 'off')
            trigger('change', isChecked)
          }}
        />
      `
    })
  }
