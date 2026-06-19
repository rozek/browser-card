/**** nativeTextInput - wraps a multi-line <textarea> ****/

// the parameters Value, invalid, Placeholder, readonly, minLength, maxLength,
// LineWrapping, Resizability, SpellChecking and disabled are read from my.*
// (falling back to the Configuration); typing writes the new value back to
// Value. "invalid" forces the invalid state; "LineWrapping"
// (default on) toggles soft wrapping; "Resizability" is one of 'none',
// 'horizontal', 'vertical', 'both'. while focused, external Value changes
// do not disturb the input; on blur the display is synced

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
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
      opacity:0.3; cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    injectStyleRuleOnce('bc-nativetextinput-style', TextStyle)

    on('render', () => {
      const ValueOf   = (Name) => (my[Name] ?? Configuration?.[Name])
      const BooleanOf = (Name) => (ValueOf(Name) === true)
      const NumberOf  = (Name) => {
        const Number = parseFloat(ValueOf(Name))
        return (isFinite(Number) ? Number : undefined)
      }
      const TextOf = (Name) => {
        const Value = ValueOf(Name)
        return (Value == null ? undefined : String(Value))
      }

      const invalid       = BooleanOf('invalid')
      const disabled      = BooleanOf('disabled')
      const readonly      = BooleanOf('readonly')
      const SpellChecking = ValueOf('SpellChecking')
      const Wrap          = (ValueOf('LineWrapping') === false ? 'off' : undefined)
      const Resize        = (ResizeValues.includes(ValueOf('Resizability')) ? ValueOf('Resizability') : undefined)

      const resolvedValue = () => (
        String(ValueOf('Value') ?? '')
      )

    /**** sync display & validity, but leave the value alone while focused ****/

      const applyState = (Element) => {
        if (Element == null) { return }
        Element.setCustomValidity(invalid ? 'invalid' : '')
        if (document.activeElement !== Element) { Element.value = resolvedValue() }
      }

      return html`
        <textarea
          placeholder=${TextOf('Placeholder')}
          readonly=${readonly}
          disabled=${disabled}
          minlength=${NumberOf('minLength')}
          maxlength=${NumberOf('maxLength')}
          wrap=${Wrap}
          spellcheck=${SpellChecking == null ? undefined : (SpellChecking ? 'true' : 'false')}
          aria-invalid=${invalid ? 'true' : undefined}
          style=${Resize == null ? undefined : { resize:Resize }}
          ref=${applyState}
          onInput=${(Event) => {
            my.Value = Event.target.value
            dispatch('change', Event.target.value)
          }}
          onBlur=${(Event) => { Event.target.value = resolvedValue() }}
        ></textarea>
      `
    })
  }
