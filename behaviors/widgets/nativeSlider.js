/**** nativeSlider - wraps a native <input type="range"> ****/

// the parameters Value, Minimum, Stepping, Maximum and Hashmarks are read from
// my.* (falling back to the Configuration); Value may also be given as text in
// "Text" (which is also where dragging writes the value back). Stepping may be
// 'any'. Hashmarks is an array - or a space/comma-separated string - of numbers
// or "value=label" pairs and renders <datalist> ticks. while focused, external
// Value/Text changes do not disturb the input; on blur the display is synced

/**** styleRuleInjectedOnce - adds a <style> rule to the document head once ****/

  function styleRuleInjectedOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

/**** hashmarkList - normalises Hashmarks into { value, label? } entries ****/

  function hashmarkList (Raw) {
    if (Raw == null) { return [] }
    const Items = (Array.isArray(Raw) ? Raw : String(Raw).split(/[\s,]+/))
    return Items
      .map((Item) => String(Item).trim())
      .filter((Item) => Item !== '')
      .map((Item) => {
        const EqualsAt = Item.indexOf('=')
        return (
          EqualsAt < 0
          ? { value:Item, label:undefined }
          : { value:Item.slice(0,EqualsAt).trim(), label:Item.slice(EqualsAt+1).trim() }
        )
      })
  }

  const SliderStyle = `
    .bc-widget > input[type="range"] {
      position:absolute;
      left:50%; top:50%; width:100%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .bc-widget > input[type="range"]:disabled {
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativeslider-style', SliderStyle)

    on('render', () => {
      const numberFrom = (Name) => {
        const Number = parseFloat(my[Name] ?? Configuration?.[Name])
        return (isFinite(Number) ? Number : undefined)
      }

      const Min = numberFrom('Minimum')
      const Max = numberFrom('Maximum')

      const rawStep = (my.Stepping ?? Configuration?.Stepping)
      const Step = (
        String(rawStep).trim().toLowerCase() === 'any'
        ? 'any'
        : (isFinite(parseFloat(rawStep)) ? parseFloat(rawStep) : undefined)
      )

      const Disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)

      const Marks = hashmarkList(my.Hashmarks ?? Configuration?.Hashmarks)
      const ListId = ('bc-slider-' + (my.Id ?? 'list'))

    /**** the displayed value follows "Text"/"Value", but stays put while focused ****/

      const resolvedValue = () => {
        const fromText = parseFloat(String(my.Text ?? ''))
        return (isFinite(fromText) ? fromText : (numberFrom('Value') ?? Min ?? 0))
      }
      const syncWhenUnfocused = (Element) => {
        if ((Element != null) && (document.activeElement !== Element)) {
          Element.value = String(resolvedValue())
        }
      }

      return html`
        <input
          type="range"
          min=${Min}
          max=${Max}
          step=${Step}
          disabled=${Disabled}
          list=${Marks.length > 0 ? ListId : undefined}
          ref=${syncWhenUnfocused}
          onInput=${(Event) => {
            const Number = Event.target.valueAsNumber
            if (isFinite(Number)) { my.Text = String(Number); dispatch('change', Number) }
          }}
          onBlur=${(Event) => { Event.target.value = String(resolvedValue()) }}
        />
        ${(Marks.length > 0) && html`
          <datalist id=${ListId}>
            ${Marks.map((Mark) => html`<option value=${Mark.value} label=${Mark.label}></option>`)}
          </datalist>
        `}
      `
    })
  }
