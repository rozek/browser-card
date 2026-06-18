/**** nativePasswordInput - wraps a single-line <input type="password"> ****/

// the parameters Value, invalid, Placeholder, readonly, minLength, maxLength,
// Pattern and disabled are read from my.* (falling back to the Configuration);
// Value may also be given in "Text" (where typing writes it back). "invalid"
// forces the invalid state; "Pattern" is a regular expression the input must
// match to be valid. while focused, external Value/Text changes do not disturb
// the input; on blur the display is synced

/**** styleRuleInjectedOnce - adds a <style> rule to the document head once ****/

  function styleRuleInjectedOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const PasswordStyle = `
    .bc-widget > input[type="password"] {
      width:100%;
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }
    .bc-widget > input[type="password"]:invalid {
      text-decoration:underline wavy red 1px;
    }
    .bc-widget > input[type="password"]:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }
    .bc-widget > input[type="password"]:disabled {
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativepasswordinput-style', PasswordStyle)

    on('render', () => {
      const valueOf   = (Name) => (my[Name] ?? Configuration?.[Name])
      const booleanOf = (Name) => (valueOf(Name) === true)
      const numberOf  = (Name) => {
        const Number = parseFloat(valueOf(Name))
        return (isFinite(Number) ? Number : undefined)
      }
      const textOf = (Name) => {
        const Value = valueOf(Name)
        return (Value == null ? undefined : String(Value))
      }

      const Invalid  = booleanOf('invalid')
      const Disabled = booleanOf('disabled')
      const ReadOnly = booleanOf('readonly')

      const resolvedValue = () => (
        my.Text != null ? String(my.Text) : String(valueOf('Value') ?? '')
      )

    /**** sync display & validity, but leave the value alone while focused ****/

      const applyState = (Element) => {
        if (Element == null) { return }
        Element.setCustomValidity(Invalid ? 'invalid' : '')
        if (document.activeElement !== Element) { Element.value = resolvedValue() }
      }

      return html`
        <input
          type="password"
          placeholder=${textOf('Placeholder')}
          readonly=${ReadOnly}
          disabled=${Disabled}
          minlength=${numberOf('minLength')}
          maxlength=${numberOf('maxLength')}
          pattern=${textOf('Pattern')}
          aria-invalid=${Invalid ? 'true' : undefined}
          ref=${applyState}
          onInput=${(Event) => {
            my.Text = Event.target.value
            dispatch('change', Event.target.value)
          }}
          onBlur=${(Event) => { Event.target.value = resolvedValue() }}
        />
      `
    })
  }
