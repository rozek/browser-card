/**** nativeButton - wraps a native <button> ****/

// "Value" is the (HTML) label. Clicks are triggered as 'click' so the widget's
// own script can handle them with on('click', () => ...). Lock it via
// my.disabled = true (or the Configuration field "disabled")

/**** injectStyleRuleOnce - adds a <style> rule to the document head once ****/

  function injectStyleRuleOnce (Id, CSS) {
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
      opacity:0.3; cursor:not-allowed;
    }
  `

/**** actual behavior script ****/

  export default async function ({ on, my, html, trigger, Configuration }) {
    injectStyleRuleOnce('bc-nativebutton-style', ButtonStyle)

    on('render', () => {
      const disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)
      return html`
        <button
          type="button"
          disabled=${disabled}
          onClick=${() => { if (! disabled) { trigger('click') } }}
          dangerouslySetInnerHTML=${{ __html:String(my.Value ?? '') }}
        ></button>
      `
    })
  }
