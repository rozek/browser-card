/**** verticalSeparator - a thin light-grey line down the widget's ****/
/**** horizontal middle, from the top to the bottom edge. ****/

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
