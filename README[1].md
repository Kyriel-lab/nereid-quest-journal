# Nereid Quest Journal

**Current baseline:** `v0.2-dev GitHub Pages Baseline`

Nereid Quest Journal is a gamified web journal prototype: a daily quest board with companion progress, custom quests, rewards, reflection, and a saved Daily Entry preview.

This version is based on the validated `v0.1d — Daily Entry Feel` build, then refactored into a clean project folder for GitHub Pages deployment.

---

## Project Structure

```text
nereid-quest-journal/
├─ index.html
├─ style.css
├─ script.js
├─ assets/
│  └─ lantern-jelly-dormant.png
├─ README.md
└─ CHANGELOG.md
```

---

## File Roles

| File | Purpose |
|---|---|
| `index.html` | Page layout and HTML structure |
| `style.css` | Visual style, spacing, cards, companion area, responsive layout |
| `script.js` | Quest logic, custom quests, progress, Bond/EXP, reward unlock, Daily Entry, localStorage |
| `assets/` | Official companion and future creature image assets |
| `README.md` | Project usage and patch workflow notes |
| `CHANGELOG.md` | Version history and locked patch notes |

---

## Current Features

- Daily quest board
- 4 default quests
- Custom quest creation
- Quest type dropdown
- Automatic reward values by quest type
- Tick / untick quests
- Delete custom quests
- Daily progress bar
- Companion card with official Lantern Jelly Dormant Form asset
- Bond / EXP calculation
- Mood and feedback based on progress percentage
- Moonlit Fragment reward unlock at 100%
- Daily Reflection
- Save Day
- End Day
- Daily Entry summary card
- Reset Today
- Local browser storage with `localStorage`

---

## LocalStorage

The app currently stores daily data in the browser using this key:

```text
nereidQuestJournal_v01
```

Stored data includes:

- Current date
- Completed quest IDs
- Custom quests
- Reflection text
- End Day state
- Last saved timestamp

This data stays in the current browser only. It is not uploaded to GitHub and is not cloud synced.

---

## How to Run Locally

Open:

```text
index.html
```

directly in a browser.

For smoother local development, use VS Code Live Server:

1. Open the project folder in VS Code.
2. Right-click `index.html`.
3. Choose `Open with Live Server`.

---

## GitHub Pages Deployment

The current deployment target is GitHub Pages.

Recommended settings:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

Expected repo root structure:

```text
index.html
style.css
script.js
assets/
README.md
CHANGELOG.md
```

Do not upload the whole `nereid-quest-journal/` folder as a nested folder inside the repo root. `index.html` should be at the root level.

---

## Patch Workflow

Use small, controlled patches.

```text
UI / visual polish      → patch style.css
Logic / interactions    → patch script.js
Layout / structure      → patch index.html
Image / creature assets → patch assets/
Docs / version notes    → patch README.md or CHANGELOG.md
```

After uploading a patched file to GitHub:

1. Commit changes.
2. Wait for GitHub Pages deployment.
3. Hard refresh the web app with `Ctrl + F5`.
4. Test the changed flow only.
5. Then confirm/chốt before the next patch.

---

## Patch Rule

Avoid large mixed patches.

Do not combine unrelated changes such as:

```text
custom quest logic + visual overhaul + asset changes + daily history
```

Preferred workflow:

```text
spec → approve/chốt → patch one area → test → approve/chốt → continue
```

---

## Current Locked Baseline

`v0.2-dev GitHub Pages Baseline` is considered the current stable web baseline.

It includes:

- Project folder refactor
- GitHub Pages deployment
- Official Lantern Jelly dormant asset
- Custom Quest Basic
- Daily Entry Feel

Future feature work should build from this baseline.
