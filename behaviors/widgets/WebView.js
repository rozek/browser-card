/**** WebView - wraps an <iframe> around the URL in "Text" ****/

// the Configuration controls "allowsFullScreen" (boolean), "Permissions" (the
// "allow" attribute), "SandboxPermissions" (the "sandbox" attribute; false omits
// sandboxing, '' is maximally restrictive) and "ReferrerPolicy"

  const DefaultSandbox = (
    'allow-downloads allow-forms allow-modals allow-orientation-lock ' +
    'allow-pointer-lock allow-popups allow-same-origin allow-scripts'
  )

/**** actual behavior script ****/

  export default async function ({ on, my, html, Configuration }) {
    const FullScreen = (Configuration?.allowsFullScreen === true)
    const Permissions = (Configuration?.Permissions ?? undefined)
    const ReferrerPolicy = (Configuration?.ReferrerPolicy ?? undefined)
    const Sandbox = (
      Configuration?.SandboxPermissions === false
      ? undefined                                  // no sandbox attribute at all
      : (Configuration?.SandboxPermissions ?? DefaultSandbox)
    )

    on('render', () => {
      const URL = String(my.Text ?? '').trim()
      if (URL === '') {
        return html`
          <div style=${{
            display:'flex', alignItems:'center', justifyContent:'center',
            width:'100%', height:'100%',
            color:'#999999', fontSize:'13px', textAlign:'center',
          }}>(web page URL in "Text")</div>
        `
      }
      return html`
        <iframe
          src=${URL}
          title=${my.Name ?? 'web view'}
          allow=${Permissions}
          sandbox=${Sandbox}
          referrerpolicy=${ReferrerPolicy}
          allowfullscreen=${FullScreen}
          style=${{ display:'block', width:'100%', height:'100%', border:'none' }}
        ></iframe>
      `
    })
  }
