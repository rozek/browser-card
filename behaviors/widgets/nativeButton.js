/**** nativeButton - wraps a native <button>. "Text" is the (HTML) label; ****/
/**** clicks are dispatched as 'click' so the widget's own script can handle ****/
/**** them with on('click', () => ...). Lock it via my.disabled = true (or    ****/
/**** the Configuration field "disabled").                                    ****/

  export default async function ({ on, my, html, dispatch, Configuration }) {
    on('render', () => {
      const Disabled = ((my.disabled ?? Configuration?.disabled ?? false) === true)
      return html`
        <button
          type="button"
          disabled=${Disabled}
          onClick=${() => { if (! Disabled) { dispatch('click') } }}
          style=${{
            width:'100%', height:'100%', boxSizing:'border-box',
            cursor:(Disabled ? 'default' : 'pointer'),
          }}
          dangerouslySetInnerHTML=${{ __html:String(my.Text ?? '') }}
        ></button>
      `
    })
  }
