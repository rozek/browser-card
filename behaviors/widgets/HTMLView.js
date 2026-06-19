/**** HTMLView - renders the widget's "Value" property as HTML ****/

  export default async function ({ on, my, html }) {
    on('render', () => html`
      <div
        style=${{
          width:'100%', height:'100%',
          fontSize:'15px', fontWeight:'normal', textAlign:'left',
          overflow:'auto',
        }}
        dangerouslySetInnerHTML=${{ __html:my.Value ?? '(HTML)' }}
      ></div>
    `)
  }
