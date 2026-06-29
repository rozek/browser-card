/**** GitHubMarkdownPreview - renders "Value" via the GitHub Markdown API ****/

// the Markdown text held in the widget's "Value" property is POSTed to GitHub's
// "/markdown" endpoint and the returned (already sanitised) HTML is displayed.
// "Token" may hold an optional GitHub access token - when present it is sent as
// a "Bearer" authorisation, lifting the rate limit and enabling private context.
// Any failure (network, HTTP status, abort) is shown as a readable error message.
//
// Configuration fields (all optional):
//   "Endpoint"   - API URL (default 'https://api.github.com/markdown')
//   "APIVersion" - value of the "X-GitHub-Api-Version" header (default '2022-11-28')
//   "Mode"       - 'markdown' (default) or 'gfm' for GitHub-Flavoured Markdown
//   "Context"    - 'owner/repo' used to resolve issue/PR references in "gfm" mode
//   "Timeout"    - request timeout in milliseconds (default 15000)
//   "Color"      - text colour of the rendered output

  const DefaultEndpoint = 'https://api.github.com/markdown'
  const DefaultVersion  = '2022-11-28'
  const DefaultTimeout  = 15000

/**** messageFromErrorBody - pulls a readable detail out of GitHub's response ****/

  function messageFromErrorBody (Body) {
    const Text = String(Body ?? '').trim()
    if (Text === '') { return '' }
    try {
      const Parsed = JSON.parse(Text)
      return String(Parsed?.message ?? Text)
    } catch (Signal) {
      return Text                                  // body was not JSON - show as-is
    }
  }

/**** actual behavior script ****/

  export default async function ({ on, me, my, html, Configuration }) {
    const Endpoint   = (Configuration?.Endpoint   ?? DefaultEndpoint)
    const APIVersion = (Configuration?.APIVersion ?? DefaultVersion)
    const Mode       = (Configuration?.Mode       ?? undefined)
    const Context    = (Configuration?.Context    ?? undefined)
    const Timeout    = (
      (typeof Configuration?.Timeout === 'number') && (Configuration.Timeout > 0)
      ? Configuration.Timeout : DefaultTimeout
    )

  /**** "State" holds the private request status (no persistence, no re-render) ****/

    function State () {
      return (my.own.GitHubMarkdown ??= { Key:undefined, Status:'idle', HTML:'', Message:'' })
    }

  /**** RequestKeyFor - identifies a request so unchanged inputs are not refetched ****/

    function RequestKeyFor (Text, Token) {
      return JSON.stringify([ Text, Token, Mode, Context, Endpoint, APIVersion ])
    }

  /**** fetchRendering - POSTs the Markdown and stores the resulting HTML or error ****/

    async function fetchRendering (Text, Token, Key) {
      const Controller = new AbortController()
      const Timer = setTimeout(() => Controller.abort(), Timeout)

      const Headers = {
        'Content-Type':'application/json',
        'X-GitHub-Api-Version':APIVersion,
      }
      if (Token !== '') { Headers['Authorization'] = 'Bearer '+Token }

      const Payload = { text:Text }
        if (Mode    != null) { Payload.mode    = Mode }
        if (Context != null) { Payload.context = Context }

      try {
        const Response = await fetch(Endpoint, {
          method:'POST', headers:Headers,
          body:JSON.stringify(Payload), signal:Controller.signal,
        })
        const Body = await Response.text()

        const currentState = State()
        if (currentState.Key !== Key) { return } // newer request superseded this one

        if (! Response.ok) {
          const Detail = messageFromErrorBody(Body)
          currentState.Status  = 'error'
          currentState.Message = (
            'GitHub Markdown API: '+Response.status+' '+Response.statusText+
            (Detail === '' ? '' : ' - '+Detail)
          )
        } else {
          currentState.Status = 'done'
          currentState.HTML   = Body
        }
      } catch (Signal) {
        const currentState = State()
        if (currentState.Key !== Key) { return }
        currentState.Status  = 'error'
        currentState.Message = (
          Signal?.name === 'AbortError'
          ? 'GitHub Markdown API: request timed out after '+Timeout+' ms'
          : 'GitHub Markdown API: '+(Signal?.message ?? String(Signal))
        )
      } finally {
        clearTimeout(Timer)
      }
      me.rerender()                          // reflect the new status on screen
    }

  /**** on 'update' - start a fresh request whenever the inputs actually change ****/

    on('update', () => {
      const Text  = String(my.Value ?? '')
      const Token = String(my.Token ?? '').trim()
      const Data  = State()

      if (Text.trim() === '') {                             // nothing to render
        Data.Key = undefined; Data.Status = 'idle'
        Data.HTML = ''; Data.Message = ''
        return
      }

      const Key = RequestKeyFor(Text, Token)
      if (Data.Key === Key) { return }      // identical request already handled

      Data.Key = Key; Data.Status = 'loading'; Data.Message = ''
      fetchRendering(Text, Token, Key)     // fire and forget - re-renders later
    })

  /**** Placeholder - centred hint shown while idle or loading ****/

    function Placeholder (Message, Colour) {
      return html`
        <div style=${{
          display:'flex', alignItems:'center', justifyContent:'center',
          width:'100%', height:'100%',
          color:(Colour ?? '#999999'), fontSize:'13px', textAlign:'center', padding:'4px',
        }}>${Message}</div>
      `
    }

  /**** renderer callback ****/

    on('render', () => {
      const Data = State()

      switch (true) {
        case (Data.Status === 'idle'):
          return Placeholder('(Markdown text in "Value")')
        case (Data.Status === 'loading'):
          return Placeholder('rendering Markdown…')
        case (Data.Status === 'error'):
          return html`
            <div style=${{
              width:'100%', height:'100%', overflow:'auto',
              padding:'8px', textAlign:'left', background:'#ffffff',
              color:'#a00', font:'13px/1.4 ui-monospace,Menlo,Consolas,monospace',
              whiteSpace:'pre-wrap',
            }}>${Data.Message}</div>
          `
        default:                              // 'done' - show the rendered HTML
          return html`
            <div
              class="bc-markdown markdown-body"
              style=${{
                width:'100%', height:'100%', overflow:'auto',
                padding:'0px', textAlign:'left',
                color:(my.Color ?? Configuration?.Color),
              }}
              dangerouslySetInnerHTML=${{ __html:(Data.HTML ?? '') }}
            ></div>
          `
      }
    })
  }
