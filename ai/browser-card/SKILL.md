---
name: browser-card
description: Create or modify a BrowserCard deck file (.bc). Apply automatically when the user wants to create, edit, extend, or repair a BrowserCard deck — e.g. "create a BrowserCard deck", "add a card", "change the widget", "new deck with …".
---

# Skill: browser-card

Create or modify a BrowserCard deck file in `.bc` format (JSON).

## Context

**Before doing any work**, read the full BrowserCard reference "SystemPrompt.md"

This document defines the complete JSON format for `.bc` files, all property names and types, the anchor-based geometry system, the scripting API, and validation rules. Do not generate any deck JSON without reading it first.

---

## Workflow

### Step 1 — Clarify the goal

Determine from the user's request:
- **New or modify?** Create a new deck or modify an existing file?
- **Content:** Which cards, widgets, and interactions are needed?
- **Dimensions:** CardWidth/CardHeight (default: 600 × 450 px) unless specified
- **Output file:** Where should the `.bc` file be saved?

Ask only for missing information that would lead to fundamentally different solutions. Choose sensible defaults silently.

### Step 2 — For modifications: read the file

If an existing deck file is to be changed:
1. Read the file and parse it as JSON
2. Understand the structure — existing cards, widgets, scripts (identify elements by `Name`)

### Step 3 — Generate or update the deck JSON

**New decks:**
- Create the full JSON structure according to the SystemPrompt
- Set all required fields — omit nothing

**Modifications:**
- To restack widgets, reorder them within the card's `Widgets` array (first = back, last = front)
- Identify and reference elements by their `Name`

**Always verify:**
- `Widgets` (not `objects`) as the key for widget arrays in cards
- `Anchors` is a 2-element array, `Offsets` is a 4-element array
- None of the reserved properties are present (see the "Reserved properties" note in the SystemPrompt)
- Valid JSON syntax (no trailing commas, no undefined values)

### Step 4 — Add scripts

Write meaningful scripts for interactive elements:
- Buttons: navigation, dialogs, messages to other widgets
- Fields: text updates, shared text
- Cards: initialization via `on('open', ...)`, global card logic
- Deck/card level: initialization via `on('ready', ...)`, global logic
- Use `on('click', ...)`, `on('open', ...)`, `on('ready', ...)`, `on('update', ...)`, `on('render', ...)` and the full API from the SystemPrompt
- `triggered(msg, ...args)` / `trigger(msg, ...args)` fire an event on the current Visual; it bubbles up (widget → card → deck) to the first matching handler and returns its result — use for event-driven value propagation. The same methods exist on every proxy, so `Widget('Other').triggered(msg, ...args)` fires an event on another widget
- Access the current card from a widget script via `my.Card`, the deck via `my.Deck`
- **Do not** use `Card()` without arguments — it returns `null`. `Card('Name')` / `Card(N)` is navigation only
- **Widget behavior pattern:** custom input widgets use `on('update', ...)` to pull state from `my.Card` before render, and `trigger('change', value)` (or `await triggered('change', value)`) to notify the card of user input — the event bubbles up to the first matching handler — see the "Widget Behavior Pattern" section in the SystemPrompt for a full `NumberInput` example
- **Built-in behaviors:** before writing custom render code, check whether a built-in behavior fits — `TitleView`, `SubtitleView`, `Label`, `TextView`, `FineprintView`, `MarkdownView`, `HTMLView`, `SVGView`, `ImageView`, `WebView`, `QRCodeView`, `Icon`, `FAIcon`, `TabStrip`, `PseudoDropDown`, `PseudoFileInput`, `nativeButton`, `nativeCheckbox`, `nativeRadiobutton`, `nativeDropDown`, `nativeNumberInput`, `nativeSlider`, `nativeTextlineInput`, `nativeTextInput`, `horizontalSeparator`, `verticalSeparator`, `straightLine`, `curvedLine`, `StickyNote`, `StickyTextNote`, `StickyNoteMenu`, etc. — see "Built-in Widget Behavior Catalog" in the SystemPrompt
- **Local behaviors:** store reusable behavior functions inline in the deck with `defineLocalBehavior('Name', fn)` and load them with `await behaveLike(localBehavior('Name'))`
- **Do not import Preact** — use the injected `html` tag and `preact` object (e.g. `preact.useState(...)`) instead

### Step 5 — Output

- Save the file at the requested path (default: current directory)
- Use the `.bc` file extension
- Print a short summary: number of cards, widgets per card, key scripts

---

## Quality Rules

| Rule | Details |
|---|---|
| No reserved properties | Never include `Id` or computed geometry fields — BrowserCard manages them |
| Valid JSON | No trailing commas, no comments, correct types |
| Anchor completeness | `Anchors` + `Offsets` present on every widget |
| Required fields | All properties marked `required` in the SystemPrompt must be set |
| Sensible defaults | Empty scripts as `""`, missing optional colors as `null` |
| Widget array key | Always `"Widgets"` in cards, never `"objects"` |
| Unique names | Every card and widget needs a unique `Name` (the scripting handle) |

---

## Trigger Examples

- `/browser-card`
- "Create a BrowserCard deck with 3 cards"
- "Add a new card with a button and a text field to the deck"
- "Change the 'Title' widget on card 2 so that …"
- "New BC deck: quiz with 5 questions"
- "Repair this .bc file: [file content]"
- "Make the deck responsive"
