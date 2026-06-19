/**** nativeProgressbar - wraps a native <progress> ****/

// the parameters Value and Maximum are read from my.* (falling back to the
// Configuration); the Value is given as a numeric string. without a
// resolvable Value the bar shows the indeterminate (animated) state

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const ProgressbarStyle = `
    .bc-widget > progress {
      position:absolute;
      left:50%; top:50%; width:100%; height:16px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .bc-widget > progress::-webkit-progress-bar {
      background-color:#EEEEEE;
      border:solid 1px #E0E0E0; border-radius:2px;
    }
    .bc-widget > progress::-webkit-progress-value,
    .bc-widget > progress::-moz-progress-bar {
      background-color:dodgerblue;
      border:none; border-radius:2px;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, Configuration }) {
    injectStyleRuleOnce('bc-nativeprogressbar-style', ProgressbarStyle)

    on('render', () => {
      const NumberFrom = (Name) => {
        const Number = parseFloat(my[Name] ?? Configuration?.[Name])
        return (isFinite(Number) ? Number : undefined)
      }

      const Value = NumberFrom('Value')

      return html`
        <progress value=${Value} max=${NumberFrom('Maximum')}></progress>
      `
    })
  }
