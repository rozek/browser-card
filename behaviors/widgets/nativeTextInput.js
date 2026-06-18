/**** nativeTextInput - wraps a multi-line <textarea> ****/

// the parameters Value, invalid, Placeholder, readonly, minLength, maxLength,
// LineWrapping, Resizability, SpellChecking and disabled are read from my.*
// (falling back to the Configuration); Value may also be given in "Text" (where
// typing writes it back). "invalid" forces the invalid state; "LineWrapping"
// (default on) toggles soft wrapping; "Resizability" is one of 'none',
// 'horizontal', 'vertical', 'both'. while focused, external Value/Text changes
// do not disturb the input; on blur the display is synced

/**** styleRuleInjectedOnce - adds a <style> rule to the document head once ****/

  function styleRuleInjectedOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const ResizeValues = [ 'none','horizontal','vertical','both' ]

  const TextStyle = `
    .bc-widget > textarea {
      width:100%; height:100%; box-sizing:border-box;
      resize:none;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:4px 2px 0px 2px;
    }
    .bc-widget > textarea:invalid {
      text-decoration:underline wavy red 1px;
    }
    .bc-widget > textarea:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }
    .bc-widget > textarea:disabled {
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativetextinput-style', TextStyle)

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

      const Invalid    = booleanOf('invalid')
      const Disabled   = booleanOf('disabled')
      const ReadOnly   = booleanOf('readonly')
      const Spell      = valueOf('SpellChecking')
      const Wrap       = (valueOf('LineWrapping') === false ? 'off' : undefined)
      const Resize     = (ResizeValues.includes(valueOf('Resizability')) ? valueOf('Resizability') : undefined)

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
        <textarea
          placeholder=${textOf('Placeholder')}
          readonly=${ReadOnly}
          disabled=${Disabled}
          minlength=${numberOf('minLength')}
          maxlength=${numberOf('maxLength')}
          wrap=${Wrap}
          spellcheck=${Spell == null ? undefined : (Spell ? 'true' : 'false')}
          aria-invalid=${Invalid ? 'true' : undefined}
          style=${Resize == null ? undefined : { resize:Resize }}
          ref=${applyState}
          onInput=${(Event) => {
            my.Text = Event.target.value
            dispatch('change', Event.target.value)
          }}
          onBlur=${(Event) => { Event.target.value = resolvedValue() }}
        ></textarea>
      `
    })
  }
