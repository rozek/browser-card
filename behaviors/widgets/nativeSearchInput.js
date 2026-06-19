/**** nativeSearchInput - wraps a single-line <input type="search"> ****/

// the parameters Value, invalid, Placeholder, readonly, minLength, maxLength,
// Pattern, SpellChecking, Suggestions and disabled are read from my.* (falling
// back to the Configuration); typing writes the new value back to Value.
// "invalid" forces the invalid state; "Pattern" is a regular
// expression the input must match to be valid. while focused, external Value
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

  const SearchStyle = `
    .bc-widget > input[type="search"] {
      width:100%;
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }
    .bc-widget > input[type="search"]:invalid {
      text-decoration:underline wavy red 1px;
    }
    .bc-widget > input[type="search"]:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }
    .bc-widget > input[type="search"]:disabled {
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    injectStyleRuleOnce('bc-nativesearchinput-style', SearchStyle)

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
      const Suggestions   = SuggestionList(ValueOf('Suggestions'))
      const ListId        = ('bc-search-' + (my.Id ?? 'list'))

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
          type="search"
          placeholder=${TextOf('Placeholder')}
          readonly=${readonly}
          disabled=${disabled}
          minlength=${NumberOf('minLength')}
          maxlength=${NumberOf('maxLength')}
          pattern=${TextOf('Pattern')}
          spellcheck=${SpellChecking == null ? undefined : (SpellChecking ? 'true' : 'false')}
          aria-invalid=${invalid ? 'true' : undefined}
          list=${Suggestions.length > 0 ? ListId : undefined}
          ref=${applyState}
          onInput=${(Event) => {
            my.Value = Event.target.value
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
