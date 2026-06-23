/**** nativeDateInput - wraps a single-line <input type="date"> ****/

// the parameters Value, invalid, readonly, Minimum, Maximum, Suggestions and
// disabled are read from my.* (falling back to the Configuration); editing
// writes the new value back to Value, as "YYYY-MM-DD".
// "invalid" forces the invalid state (on top of the native Minimum/Maximum
// check); Minimum/Maximum bound the range. while focused, external Value
// changes do not disturb the input; on blur the display is synced

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

/**** SuggestionList - normalises Suggestions into a list of strings ****/

  function SuggestionList (rawSuggestions) {
    if (rawSuggestions == null) { return [] }
    const Items = (Array.isArray(rawSuggestions) ? rawSuggestions : String(rawSuggestions).split(','))
    return Items.map((Item) => String(Item).trim()).filter((Item) => Item !== '')
  }

  const DateStyle = `
    .bc-widget > input[type="date"] {
      height:30px; width:100%;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }
    .bc-widget > input[type="date"]:invalid {
      border-color:red;
    }
    .bc-widget > input[type="date"]:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }
    .bc-widget > input[type="date"]:disabled {
      opacity:0.3; cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, trigger, Configuration }) {
    injectStyleRuleOnce('bc-nativedateinput-style', DateStyle)

    on('render', () => {
      const ValueOf   = (Name) => (my[Name] ?? Configuration?.[Name])
      const BooleanOf = (Name) => (ValueOf(Name) === true)
      const TextOf = (Name) => {
        const Value = ValueOf(Name)
        return (Value == null ? undefined : String(Value))
      }

      const invalid     = BooleanOf('invalid')
      const disabled    = BooleanOf('disabled')
      const readonly    = BooleanOf('readonly')
      const Suggestions = SuggestionList(ValueOf('Suggestions'))
      const ListId      = ('bc-date-' + (my.Id ?? 'list'))

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
        <input
          type="date"
          readonly=${readonly}
          disabled=${disabled}
          min=${TextOf('Minimum')}
          max=${TextOf('Maximum')}
          aria-invalid=${invalid ? 'true' : undefined}
          list=${Suggestions.length > 0 ? ListId : undefined}
          ref=${applyState}
          onInput=${(Event) => {
            my.Value = Event.target.value
            trigger('change', Event.target.value)
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
