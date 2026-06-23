/**** TabStrip - a horizontal row of selectable "tabs" ****/

// "Value" is the index of the currently active tab and may be read and written.
// "Tabs" is a list of strings holding the HTML content of the individual tabs -
// if such a text starts with "-", its tab is not clickable (the "-" itself is
// not part of the tab content). "GapIndex" is the optional index of that tab in
// front of which a (non-clickable) gap is inserted which fills all the space not
// occupied by tabs. between any two tabs there are 20px of room. underneath the
// active tab a 2px thick dark grey strip is rendered, underneath inactive tabs
// this strip is transparent. clicking a clickable tab writes its index back to
// "Value" and triggers 'change'.

  const StripColor = '#555555'  // dark grey strip underneath the active tab
  const TabGap     = '20px'     // room between any two neighbouring tabs

  /**** TabList - normalises "Tabs" into { Content, clickable } entries ****/

  function TabList (rawTabs) {
    const Items = (
      Array.isArray(rawTabs)
      ? rawTabs
      : (rawTabs == null ? [] : [ rawTabs ])
    )
    return Items.map((Item) => {
      let clickable = true
      let Content   = String(Item ?? '')
      if (Content.startsWith('-')) { clickable = false; Content = Content.slice(1) }
      return { Content:Content, clickable:clickable }
    })
  }

  /**** IndexOf - parses an optional integer index, -1 if missing/invalid ****/

  function IndexOf (rawIndex) {
    if (rawIndex == null) { return -1 }
    const Index = Math.trunc(Number(rawIndex))
    return (Number.isFinite(Index) ? Index : -1)
  }

/**** actual behavior script ****/

  export default async function ({ on, my, html, trigger, Configuration }) {
    on('render', () => {
      const Tabs     = TabList(my.Tabs ?? Configuration?.Tabs)
      const active   = IndexOf(my.Value ?? Configuration?.Value ?? 0)
      const GapIndex = IndexOf(my.GapIndex ?? Configuration?.GapIndex)

      const Spacer = html`
        <div key="bc-tabstrip-gap" style=${{
          flex:'1 1 auto',
          borderBottom:'2px solid transparent',
          pointerEvents:'none',
        }}></div>
      `

      const Children = []
        Tabs.forEach((Tab, Index) => {
          if (Index === GapIndex) { Children.push(Spacer) }

          const isActive = (Index === active)
          Children.push(html`
            <div
              key=${Index}
              style=${{
                display:'flex', alignItems:'center', justifyContent:'center',
                whiteSpace:'nowrap',
                borderBottom:'2px solid '+(isActive ? StripColor : 'transparent'),
                cursor:(Tab.clickable ? 'pointer' : 'default'),
                opacity:(Tab.clickable ? 1 : 0.3),
                userSelect:'none',
              }}
              onClick=${
                Tab.clickable
                ? (() => { my.Value = Index; trigger('change', Index) })
                : undefined
              }
              dangerouslySetInnerHTML=${{ __html:Tab.Content }}
            ></div>
          `)
        })
        if (GapIndex >= Tabs.length) { Children.push(Spacer) }

      return html`
        <div style=${{
          display:'flex', flexDirection:'row', alignItems:'stretch',
          gap:TabGap,
          width:'100%', height:'100%',
          overflow:'hidden',
        }}>${Children}</div>
      `
    })
  }
