/**** nativeGauge - wraps a native <meter> ****/

// the numeric parameters Value, Minimum, lowerBound, Optimum, upperBound and
// Maximum are read from my.* (falling back to the Configuration) and map to the
// <meter> attributes value/min/low/optimum/high/max; the Value is given as a
// numeric string

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const GaugeStyle = `
    .bc-widget > meter {
      position:absolute;
      left:50%; top:50%; width:100%; height:16px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, Configuration }) {
    injectStyleRuleOnce('bc-nativegauge-style', GaugeStyle)

    on('render', () => {
      const numberFrom = (Name) => {
        const Number = parseFloat(my[Name] ?? Configuration?.[Name])
        return (isFinite(Number) ? Number : undefined)
      }

      const Value = (numberFrom('Value') ?? 0)

      return html`
        <meter
          value=${Value}
          min=${numberFrom('Minimum')}
          low=${numberFrom('lowerBound')}
          optimum=${numberFrom('Optimum')}
          high=${numberFrom('upperBound')}
          max=${numberFrom('Maximum')}
        ></meter>
      `
    })
  }
