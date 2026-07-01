# Changelog

## v0.2-dev — Project Folder + GitHub Pages Baseline

**Status:** Current stable web baseline.

### Added / Changed

- Refactored single-file HTML prototype into a project folder.
- Split files into:
  - `index.html`
  - `style.css`
  - `script.js`
  - `assets/`
- Extracted official Lantern Jelly Dormant Form image into:
  - `assets/lantern-jelly-dormant.png`
- Added `README.md`.
- Prepared project for GitHub Pages deployment.
- Confirmed GitHub Pages deployment works.
- Confirmed Lantern Jelly asset displays correctly after uploading `assets/`.

### Preserved

- Custom quest flow from v0.1c.
- Daily Entry flow from v0.1d.
- Official Lantern Jelly dormant asset.
- `localStorage` key:
  - `nereidQuestJournal_v01`

---

## v0.1d — Daily Entry Feel

**Status:** Validated feature baseline before project folder refactor.

### Added

- Daily Entry Card below Reflection.
- Entry card appears after pressing `End Day`.
- Entry summary includes:
  - completed quests / total quests
  - Bond gained
  - EXP gained
  - reward status
  - reflection text
- Entry persists after refresh when `ended = true`.
- Reset Today hides the Daily Entry Card.
- If the day has ended and quests/reflection are edited, the entry updates instead of disappearing.

### Not Added

- No calendar history.
- No multi-day archive.
- No streaks.
- No achievements.
- No evolution system.

---

## v0.1c — Custom Quest Basic

**Status:** Validated usable daily prototype baseline.

### Added

- Custom quest input.
- Quest type dropdown:
  - Study Quest
  - Skill Quest
  - Care Quest
  - Home Quest
- Automatic reward rules:
  - Study Quest → +10 Bond
  - Skill Quest → +8 EXP
  - Care Quest → +5 Bond
  - Home Quest → +5 EXP
- Custom quest delete button.
- Progress now calculates from total quests:
  - default quests + custom quests
- Mood and feedback changed from completed-count logic to progress-percentage logic.
- Custom quests persist through refresh using `localStorage`.
- Reset Today clears custom quests.

### Preserved

- 4 default quests.
- Lantern Jelly companion.
- Moonlit Fragment reward.
- Reflection, Save Day, End Day, Reset Today.

---

## v0.1b — Real Companion Asset Integration

**Status:** Validated visual identity patch.

### Added / Changed

- Replaced CSS Lantern Jelly placeholder with official Lantern Jelly Dormant Form asset.
- Embedded official companion image into the standalone HTML build.
- Companion Card now uses the official Nereid project asset.

### Preserved

- Quest logic.
- Progress logic.
- Bond / EXP logic.
- Reward unlock logic.
- Reflection flow.
- localStorage behavior.

---

## v0.1a — Visual Depth Polish

**Status:** Validated visual polish layer.

### Added / Changed

- Improved background atmosphere.
- Added ocean mist / paper-like visual feeling.
- Improved card depth.
- Improved quest board styling.
- Improved companion aura and glow.
- Added subtle companion animation.
- Improved tide-like progress bar.
- Improved reward locked/unlocked visual state.
- Improved reflection area visual style.

### Preserved

- Core loop from v0.1.
- No feature expansion.

---

## v0.1 — Foundation Prototype

**Status:** Initial playable prototype.

### Added

- Single-file HTML prototype.
- Daily Quest Board.
- 4 default quests:
  - Korean Study — 30 minutes
  - Piano Practice — 20 minutes
  - Skincare Routine
  - Clean Desk
- Quest tick / untick interaction.
- Daily progress bar.
- Companion Card:
  - Lantern Jelly
  - Dormant Form
- Bond and EXP calculation.
- Mood update based on completion.
- Reward Preview:
  - Moonlit Fragment
- Reward unlock at 4/4 completed quests.
- Daily Reflection.
- Save Day.
- End Day.
- Reset Today.
- localStorage persistence.

---

## Future Patch Candidates

These are not implemented yet.

```text
v0.2a — Daily History Lite
v0.2b — Quest Library Lite
v0.2c — Companion Progression Preview
v0.2d — Mobile Polish
v0.3  — Creature Registry Lite
```

Future work should continue using:

```text
spec → approve/chốt → patch → test → approve/chốt
```
