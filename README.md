# Nereid Quest Journal — v0.2-dev Project Folder

This build refactors the previous single-file HTML prototype into a cleaner project folder.

## Files

```text
nereid-quest-journal/
├─ index.html
├─ style.css
├─ script.js
└─ assets/
   └─ lantern-jelly-dormant.png
```

## How to open

Open `index.html` directly in your browser.

For smoother development, you can also use VS Code Live Server:

1. Open this folder in VS Code.
2. Right-click `index.html`.
3. Choose `Open with Live Server`.

## What each file does

- `index.html` — layout and page structure
- `style.css` — visual design, spacing, cards, companion area, responsive layout
- `script.js` — quest logic, custom quests, progress, Bond/EXP, reward unlock, Daily Entry, localStorage
- `assets/` — official companion image assets

## Data storage

The app stores daily progress locally in the browser using:

```text
nereidQuestJournal_v01
```

This means data stays in the current browser unless the browser cache/localStorage is cleared.

## Current baseline

This project folder is based on:

```text
Nereid Quest Journal v0.1d — Daily Entry Feel
```

No new feature was added in this refactor. The goal is only to make future patching cleaner.
