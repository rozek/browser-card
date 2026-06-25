# Live-Build Clip: Game of Life in BrowserCard

**Audience:** developers (GitHub / Hacker News)
**Length:** 30–45 s, silent with captions (HN/GitHub often watch muted)
**Core message:** "HyperCard for the web. A complete, animated Game of Life app — one custom widget, ~25 lines of plain JS, *no* build step. Assembled live by an AI over MCP."

---

## Storyboard

| t (s) | Shot | Caption (overlay) |
|------|------|-------------------|
| 0–3 | Empty card in `<bc-designer>`, edit mode | `HyperCard, reimagined for the browser. No build step.` |
| 3–8 | Custom widget appears, script editor open with the ~25 lines | `The entire Game of Life: one custom widget.` |
| 8–13 | Two buttons get placed, one-liner script visible each | `Buttons are just on('click', …). Plain JS.` |
| 13–25 | Switch to browse mode → colorful grid animates | `Reactive state · self-cleaning timers · Preact under the hood` |
| 25–32 | Click **🎲 Randomize**, then **⏸ Pause / ▶ Resume** | `Live. Scriptable. Zero dependencies imported.` |
| 32–40 | Deck menu → *Export as Standalone App* / *Export for Embedding* | `Export → one HTML file. Embed anywhere with one <script>.` |
| 40–45 | End card: logo + `Try it live` URL | `github.com/rozek/browser-card` |

**Meta punchline (for the description / first comment):** This card wasn't built by hand — Claude drove it remotely through the BrowserCard MCP broker: created the widgets, set the scripts, verified it live. That's the second hook (AI vibe-coding) on top of the HyperCard-nostalgia angle.

---

## Hero code (for the editor shot)

The whole simulation core — keep it short so it fits in one screenshot:

```js
const COLS=100, ROWS=75, CELL=8
const idx = (x,y) => ((y+ROWS)%ROWS)*COLS + ((x+COLS)%COLS)
const newGrid = r => { const g=new Uint8Array(COLS*ROWS)
  if(r) for(let i=0;i<g.length;i++) g[i]=Math.random()<0.28?1:0; return g }
let grid = newGrid(true), running = true
const step = () => { const n=new Uint8Array(COLS*ROWS)
  for(let y=0;y<ROWS;y++) for(let x=0;x<COLS;x++){ let c=0
    for(let dy=-1;dy<=1;dy++) for(let dx=-1;dx<=1;dx++) if(dx||dy) c+=grid[idx(x+dx,y+dy)]
    n[idx(x,y)] = (grid[idx(x,y)] ? (c===2||c===3) : c===3) ? 1 : 0 }
  grid = n }

on('ready', () => every(80, () => {
  const cv = my.View?.querySelector('canvas'); if(!cv) return
  if(cv.width!==COLS*CELL){ cv.width=COLS*CELL; cv.height=ROWS*CELL }
  const ctx=cv.getContext('2d'); if(running) step()
  ctx.fillStyle='#0a0a14'; ctx.fillRect(0,0,cv.width,cv.height)
  for(let y=0;y<ROWS;y++) for(let x=0;x<COLS;x++) if(grid[idx(x,y)]){
    ctx.fillStyle='hsl('+(((x+y)*2)%360)+' 90% 62%)'
    ctx.fillRect(x*CELL,y*CELL,CELL-1,CELL-1) }
}))
on('randomize', () => grid = newGrid(true))
on('toggle',    () => { running = !running; return running })
on('render', () => html`<canvas style=${{ width:'100%', height:'100%',
  borderRadius:'10px', background:'#0a0a14',
  boxShadow:'0 0 40px rgba(80,120,255,0.25)' }}></canvas>`)
```

Button "Randomize":

```js
on('click', () => Widget('Life').triggered('randomize'))
```

Button "Pause/Resume":

```js
on('click', async () => {
  const running = await Widget('Life').triggered('toggle')
  my.Value = running ? '⏸ Pause' : '▶ Resume'
})
```

---

## Recording tips

- **GIF:** Record only browse mode with the running grid (10–15 s is plenty, loops well). Color + glow = eye-catching in a feed.
- **Resolution:** Card canvas is 1280×780; size the window to ~1280 wide for 1:1 with no scaling.
- **Code shot:** Open the script editor as its own window via "⤢" — cleaner than the properties panel.
- **No audio needed:** captions carry the story; the HN/GitHub crowd scrolls muted.
- **First line of the post** = the punchline, not "I made a thing": e.g. *"A full Conway's Game of Life as a browser-native HyperCard card — 25 lines, no build step, no imports. Assembled live by an AI over MCP."*
