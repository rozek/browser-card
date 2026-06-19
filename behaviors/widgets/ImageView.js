/**** ImageView - shows the image whose URL is in "Value" ****/

// Configuration fields "scaling" ('none'|'stretch'|'cover'|'contain') and
// "alignment" (e.g. 'center center', 'left top', ...) control fit and position

  const ScalingToFit = {
    none:'none', stretch:'fill', cover:'cover', contain:'contain',
  }

  const AlignmentValues = [
    'left top',    'center top',    'right top',
    'left center', 'center center', 'right center',
    'left bottom', 'center bottom', 'right bottom',
  ]

  export default async function ({ on, my, html, Configuration }) {
    const ObjectFit      = (ScalingToFit[Configuration?.scaling] ?? ScalingToFit.contain)
    const ObjectPosition = (
      AlignmentValues.includes(Configuration?.alignment)
      ? Configuration.alignment
      : 'center center'
    )

    on('render', () => {
      const URL = String(my.Value ?? '').trim()
      if (URL === '') {
        return html`
          <div style=${{
            display:'flex', alignItems:'center', justifyContent:'center',
            width:'100%', height:'100%',
            color:'#999999', fontSize:'13px', textAlign:'center',
          }}>(image URL in "Value")</div>
        `
      }
      return html`
        <img
          src=${URL}
          alt=""
          style=${{
            display:'block', width:'100%', height:'100%',
            objectFit:ObjectFit, objectPosition:ObjectPosition,
          }}
        />
      `
    })
  }
