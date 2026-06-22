/**** TitleView - shows the widget's "Value" property as 22px bold text ****/

  export default async function ({ on, my, html, Configuration }) {
    on('render', () => html`
      <div style=${{
        display:'flex', alignItems:'center', justifyContent:'flex-start',
        width:'100%', height:'100%',
        fontSize:'22px', fontWeight:'bold', textAlign:'left', color:(my.Color ?? Configuration?.Color),
        overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
      }}>${my.Value ?? '(Title)'}</div>
    `)
  }
