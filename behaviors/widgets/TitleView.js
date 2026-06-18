/**** TitleView - shows the widget's "Text" property as 22px bold text ****/

  export default async function ({ on, my, html }) {
    on('render', () => html`
      <div style=${{
        display:'flex', alignItems:'center', justifyContent:'flex-start',
        width:'100%', height:'100%',
        fontSize:'22px', fontWeight:'bold', textAlign:'left',
        overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
      }}>${my.Text ?? '(Title)'}</div>
    `)
  }
