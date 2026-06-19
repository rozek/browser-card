/**** SubtitleView - shows the widget's "Value" property as 18px bold text ****/

  export default async function ({ on, my, html }) {
    on('render', () => html`
      <div style=${{
        display:'flex', alignItems:'center', justifyContent:'flex-start',
        width:'100%', height:'100%',
        fontSize:'18px', fontWeight:'bold', textAlign:'left',
        overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
      }}>${my.Value ?? '(Subtitle)'}</div>
    `)
  }
