/**** nativeButton - wraps a native <button> ****/

// "Text" is the (HTML) label. Clicks are dispatched as 'click' so the widget's
// own script can handle them with on('click', () => ...). Lock it via
// my.disabled = true (or the Configuration field "disabled")

  /**** styleRuleInjectedOnce - adds a <style> rule to the document head once ****/

  function styleRuleInjectedOnce (Id, CSS) {
    if (document.getElementById(Id) != null) { return }
    const Style = document.createElement('style')
      Style.id          = Id
      Style.textContent = CSS
    document.head.appendChild(Style)
  }

  const ButtonStyle = `
    .bc-widget > button {
      width:100%; height:30px;
      border:solid 1px black; border-radius:4px;
      background:white;
      font-weight:bold; color:black;
      cursor:pointer; pointer-events:auto;
    }
    .bc-widget > button:disabled {
      cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    styleRuleInjectedOnce('bc-nativebutton-style', ButtonStyle)

    on('render', () => {
      const Disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)
      return html`
        <button
          type="button"
          disabled=${Disabled}
          onClick=${() => { if (! Disabled) { dispatch('click') } }}
          dangerouslySetInnerHTML=${{ __html:String(my.Text ?? '') }}
        ></button>
      `
    })
  }
