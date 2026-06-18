/**** nativeColorInput - wraps a native <input type="color"> ****/

// the parameters Value, readonly, Suggestions and disabled are read from my.*
// (falling back to the Configuration); Value may also be given in "Text" (as a
// "#rrggbb" colour, where picking writes it back). Suggestions is a list or
// comma-separated string of colours offered as swatches. while focused, external
// Value/Text changes do not disturb the input; on blur it is synced

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

  const ColorStyle = `
    .bc-widget > input[type="color"] {
      height:30px; width:100%; min-width:40px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
    }
    .bc-widget > input[type="color"]:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }
    .bc-widget > input[type="color"]:disabled {
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativecolorinput-style', ColorStyle)

    on('render', () => {
      const valueOf   = (Name) => (my[Name] ?? Configuration?.[Name])
      const booleanOf = (Name) => (valueOf(Name) === true)

      const Disabled    = booleanOf('disabled')
      const ReadOnly    = booleanOf('readonly')
      const Suggestions = suggestionList(valueOf('Suggestions'))
      const ListId      = ('bc-color-' + (my.Id ?? 'list'))

      const resolvedValue = () => {
        const Value = (my.Text != null ? String(my.Text) : String(valueOf('Value') ?? ''))
        return (Value.trim() === '' ? '#000000' : Value)
      }

    /**** sync the colour, but leave it alone while focused ****/

      const syncWhenUnfocused = (Element) => {
        if ((Element != null) && (document.activeElement !== Element)) {
          Element.value = resolvedValue()
        }
      }

      return html`
        <input
          type="color"
          readonly=${ReadOnly}
          disabled=${Disabled}
          list=${Suggestions.length > 0 ? ListId : undefined}
          ref=${syncWhenUnfocused}
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
