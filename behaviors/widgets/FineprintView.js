/**** FineprintView - shows the widget's "Value" property as 13px normal text ****/

  export default async function ({ on, my, html, Configuration }) {
    on('render', () => html`
      <div style=${{
        display:'flex', alignItems:'center', justifyContent:'flex-start',
        width:'100%', height:'100%',
        fontSize:'13px', fontWeight:'normal', textAlign:'left', color:(my.Color ?? Configuration?.Color),
        overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
      }}>${my.Value ?? '(Fineprint)'}</div>
    `)
  }
