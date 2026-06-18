/**** horizontalSeparator - a thin light-grey line across the widget's ****/
/**** vertical middle, from the left to the right edge. ****/

  export default async function ({ on, html }) {
    on('render', () => html`
      <div style=${{
        display:'flex', alignItems:'center',
        width:'100%', height:'100%',
      }}>
        <div style=${{ width:'100%', height:'1px', backgroundColor:'#cccccc' }}></div>
      </div>
    `)
  }
