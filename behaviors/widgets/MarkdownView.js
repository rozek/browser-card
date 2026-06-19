/**** MarkdownView - renders the widget's "Value" property as Markdown ****/

// with syntax highlighting (highlight.js), math (KaTeX) and Mermaid diagrams
// reusing the toolkit already bundled into BrowserCard. All extra assets (CSS,
// fonts, Mermaid) are served same-origin from the "markdown/" folder beside
// BrowserCard.js - no third-party network requests

  const AssetsBeside = 'markdown/'        // sibling of BrowserCard.js (preferred)
  const AssetsFromHere = '../../markdown/' // fallback, relative to this behaviour

/**** escapedForHTML - minimal entity escaping for embedded raw text ****/

  function escapedForHTML (Text) {
    return String(Text ?? '')
      .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
  }

/**** linkStyleOnce - links a stylesheet into the document head only once ****/

  function linkStyleOnce (Id, Href) {
    if (document.getElementById(Id) != null) { return }
    const Link = document.createElement('link')
      Link.id   = Id
      Link.rel  = 'stylesheet'
      Link.href = Href
    document.head.appendChild(Link)
  }

/**** loadedMermaid - lazily loads the vendored, same-origin Mermaid build ****/

  function loadedMermaid (ScriptURL) {
    globalThis._BC_MermaidPromise ??= new Promise((resolve, reject) => {
      if (globalThis.mermaid != null) { resolve(globalThis.mermaid); return }
      const Script = document.createElement('script')
        Script.src     = ScriptURL
        Script.onload  = () => {
          globalThis.mermaid.initialize({ startOnLoad:false, securityLevel:'strict' })
          resolve(globalThis.mermaid)
        }
        Script.onerror = () => reject(
          new Error('MarkdownView: could not load Mermaid from ' + ScriptURL)
        )
      document.head.appendChild(Script)
    })
    return globalThis._BC_MermaidPromise
  }

/**** actual behavior script ****/

  export default async function ({ on, my, html, Configuration }) {
    const BC = globalThis.BC                 // the running BrowserCard instance

  /**** without the bundled toolkit there is nothing to render ****/

    if ((BC == null) || (BC.Marked == null)) {
      on('render', () => html`
        <div style=${{ padding:'8px', color:'#a00', font:'13px/1.4 system-ui' }}>
          MarkdownView needs a BrowserCard build that exposes "BC.Marked".
        </div>
      `)
      return
    }

    const { Marked, markedKatex, hljs } = BC

    const AssetBase = (
      Configuration?.AssetBase
      ?? ( BC.ModuleURL != null
           ? new URL(AssetsBeside, BC.ModuleURL).href      // beside BrowserCard.js
           : new URL(AssetsFromHere, import.meta.url).href )
    )
    const MermaidEnabled = (Configuration?.Mermaid !== false)

  /**** "nonStandard" lets inline $…$ touch brackets/words, no surrounding blanks needed ****/

    const KatexOptions = (Configuration?.KaTeX ?? { throwOnError:false, nonStandard:true })

  /**** the highlighting / math CSS lives next to the behaviour's assets ****/

    linkStyleOnce('bc-md-styles', new URL('../markdown.css', AssetBase).href)
    linkStyleOnce('bc-md-katex',  AssetBase + 'katex/katex.min.css')

  /**** renderCode - Mermaid blocks stay raw, everything else is highlighted ****/

    function renderCode (TokenOrCode, maybeLang) {
      const isToken = (typeof TokenOrCode === 'object') && (TokenOrCode != null)
      const Source  = (isToken ? TokenOrCode.text : TokenOrCode) ?? ''
      const rawLang = (isToken ? TokenOrCode.lang : maybeLang) ?? ''
      const Language = String(rawLang).trim().split(/\s+/)[0]

      if (MermaidEnabled && (Language === 'mermaid')) {
        return `<pre class="mermaid">${escapedForHTML(Source)}</pre>`
      }

      const canHighlight = (hljs != null) && (typeof hljs.highlight === 'function')
      const highlighted = (
        ! canHighlight
        ? escapedForHTML(Source)
        : (
            (Language !== '') && (hljs.getLanguage(Language) != null)
            ? hljs.highlight(Source, { language:Language }).value
            : hljs.highlightAuto(Source).value
          )
      )
      return `<pre><code class="hljs language-${Language}">${highlighted}</code></pre>`
    }

    const Markdown = new Marked()
      Markdown.use({ renderer:{ code:renderCode } })
      if (typeof markedKatex === 'function') {
        Markdown.use(markedKatex(KatexOptions))
      } else {
        console.warn(
          '[MarkdownView] BC.markedKatex is unavailable - math rendering is ' +
          'disabled; rebuild/redeploy BrowserCard so its global "BC" exposes ' +
          'markedKatex, markedHighlight and hljs'
        )
      }

  /**** runMermaidWithin - turns unprocessed Mermaid blocks into diagrams ****/

    function runMermaidWithin (Element) {
      if ((Element == null) || ! MermaidEnabled) { return }
      const Diagrams = Element.querySelectorAll('pre.mermaid:not([data-processed])')
      if (Diagrams.length === 0) { return }

      loadedMermaid(AssetBase + 'mermaid.min.js')
        .then((Mermaid) => Mermaid.run({ nodes:Diagrams }))
        .catch((Signal) => console.warn('[MarkdownView] Mermaid failed:', Signal))
    }

  /**** renderer callback ****/

    on('render', () => {
      let renderedContent
      try {
        renderedContent = Markdown.parse(my.Value ?? '')
      } catch (Signal) {
        renderedContent = '<pre style="color:#a00">' +
          escapedForHTML('Markdown error: ' + Signal.message) + '</pre>'
      }
      return html`
        <div
          class="bc-markdown"
          style=${{
            width:'100%', height:'100%', overflow:'auto',
            padding:'0px', textAlign:'left',
          }}
          ref=${(Element) => runMermaidWithin(Element)}
          dangerouslySetInnerHTML=${{ __html:renderedContent }}
        ></div>
      `
    })
  }
