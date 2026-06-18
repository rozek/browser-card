/**** nativeDateTimeInput - wraps a single-line <input type="datetime-local"> ****/

// the parameters Value, invalid, readonly, withSeconds, Minimum, Maximum,
// Suggestions and disabled are read from my.* (falling back to the
// Configuration); Value may also be given in "Text" (where editing writes it
// back, as "YYYY-MM-DDTHH:MM[:SS]"). "invalid" forces the invalid state (on top
// of the native Minimum/Maximum check); "withSeconds" shows a seconds field.
// while focused, external Value/Text changes do not disturb the input; on blur
// the display is synced

/**** styleRuleInjectedOnce - adds a <style> rule to the document head once ****/

  function styleRuleInjectedOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

/**** suggestionList - normalises Suggestions into a list of strings ****/

  function suggestionList (Raw) {
    if (Raw == null) { return [] }
    const Items = (Array.isArray(Raw) ? Raw : String(Raw).split(','))
    return Items.map((Item) => String(Item).trim()).filter((Item) => Item !== '')
  }

  const DateTimeStyle = `
    .bc-widget > input[type="datetime-local"] {
      height:30px; width:100%;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }
    .bc-widget > input[type="datetime-local"]:invalid {
      border-color:red;
    }
    .bc-widget > input[type="datetime-local"]:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }
    .bc-widget > input[type="datetime-local"]:disabled {
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativedatetimeinput-style', DateTimeStyle)

    on('render', () => {
      const valueOf   = (Name) => (my[Name] ?? Configuration?.[Name])
      const booleanOf = (Name) => (valueOf(Name) === true)
      const textOf = (Name) => {
        const Value = valueOf(Name)
        return (Value == null ? undefined : String(Value))
      }

      const Invalid     = booleanOf('invalid')
      const Disabled    = booleanOf('disabled')
      const ReadOnly    = booleanOf('readonly')
      const WithSeconds = booleanOf('withSeconds')
      const Suggestions = suggestionList(valueOf('Suggestions'))
      const ListId      = ('bc-datetime-' + (my.Id ?? 'list'))

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
          type="datetime-local"
          readonly=${ReadOnly}
          disabled=${Disabled}
          step=${WithSeconds ? 1 : undefined}
          min=${textOf('Minimum')}
          max=${textOf('Maximum')}
          aria-invalid=${Invalid ? 'true' : undefined}
          list=${Suggestions.length > 0 ? ListId : undefined}
          ref=${applyState}
          onInput=${(Event) => {
            my.Text = Event.target.value
            dispatch('change', Event.target.value)
          }}
          onBlur=${(Event) => { Event.target.value = resolvedValue() }}
        />
        ${(Suggestions.length > 0) && html`
          <datalist id=${ListId}>
            ${Suggestions.map((Suggestion) => html`<option value=${Suggestion}></option>`)}
          </datalist>
        `}
      `
    })
  }
