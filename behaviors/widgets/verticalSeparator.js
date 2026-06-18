/**** verticalSeparator - a thin light-grey vertical separation line ****/

  export default async function ({ on, html }) {
    on('render', () => html`
      <div style=${{
        display:'flex', justifyContent:'center',
        width:'100%', height:'100%',
      }}>
        <div style=${{ width:'1px', height:'100%', backgroundColor:'#cccccc' }}></div>
      </div>
    `)
  }
