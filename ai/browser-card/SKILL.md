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
2. Note the highest existing ID numbers for deck, cards, and widgets
3. Understand the structure — existing cards, widgets, scripts

### Step 3 — Generate or update the deck JSON

**New decks:**
- Create the full JSON structure according to the SystemPrompt
- Assign IDs sequentially starting from 1
- Set all required fields — omit nothing

**Modifications:**
- Preserve all existing IDs — never change them
- New elements get IDs higher than the current maximum
- Re-number widget `Number` values as needed

**Always verify:**
- `Widgets` (not `objects`) as the key for widget arrays in cards
- `Anchors` is a 2-element array, `Offsets` is a 4-element array
- All IDs are unique throughout the entire deck
- Valid JSON syntax (no trailing commas, no undefined values)

### Step 4 — Add scripts

Write meaningful scripts for interactive elements:
- Buttons: navigation, dialogs, messages to other widgets
- Fields: text updates, shared text
- Deck/card level: initialization, global logic
- Use `on('click', ...)`, `on('ready', ...)` and the API from the SystemPrompt

### Step 5 — Output

- Save the file at the requested path (default: current directory)
- Use the `.bc` file extension
- Print a short summary: number of cards, widgets per card, key scripts

---

## Quality Rules

| Rule | Details |
|---|---|
| Unique IDs | All `bc-deck-N`, `bc-card-N`, `bc-widget-N` unique within the deck |
| Valid JSON | No trailing commas, no comments, correct types |
| Anchor completeness | `Anchors` + `Offsets` present on every widget |
| Required fields | All properties marked `required` in the SystemPrompt must be set |
| Sensible defaults | Empty scripts as `""`, missing optional colors as `null` |
| Widget array key | Always `"Widgets"` in cards, never `"objects"` |

---

## Trigger Examples

- `/browser-card`
- "Create a BrowserCard deck with 3 cards"
- "Add a new card with a button and a text field to the deck"
- "Change the 'Title' widget on card 2 so that …"
- "New BC deck: quiz with 5 questions"
- "Repair this .bc file: [file content]"
- "Make the deck responsive"
