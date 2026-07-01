# Changelog

## v0.2c — Desktop Daily Use Polish

**Status:** Patch candidate.

### Added / Changed

- Improved desktop/laptop layout rhythm.
- Expanded the main app shell slightly for wider screens.
- Strengthened Today’s Quests as the primary daily-use board.
- Improved quest card spacing and reward chip alignment.
- Made Add Quest and Quest Library feel more compact and secondary to the quest list.
- Added sticky right sidebar behavior on desktop for Companion / Progress / Reward.
- Tuned Companion card sizing, stats spacing, and sidebar balance.
- Improved Reflection, Daily Entry, and Journal History desktop readability.
- Displayed Journal History entries in a two-column desktop grid.
- Softened long reflection previews in History cards.

### Preserved

- Quest Library Lite from v0.2b.
- Daily History Lite from v0.2a.
- Daily Entry Feel from v0.1d.
- Custom Quest Basic from v0.1c.
- Official Lantern Jelly Dormant Form asset.
- Existing app logic and `localStorage` behavior.

### Not Changed

- No JavaScript logic changes.
- No localStorage key changes.
- No new features.
- No asset changes.
- No mobile deep polish.

---

## v0.2b — Quest Library Lite

**Status:** Patch candidate.

### Added

- Added `Quest Library` section inside Today’s Quests.
- Added preset quest chips for quick daily use:
  - Korean Study — 30 minutes
  - Logistics Review
  - Read 10 pages
  - Piano Practice — 20 minutes
  - Drawing Practice
  - Skincare Routine
  - Drink Water
  - Stretching
  - Clean Desk
  - Laundry
  - Tidy Room
- Library quests are added as custom quests with `source: "library"`.
- Added duplicate-title prevention across default, custom, and library quests.
- Duplicate presets become disabled in the library UI.
- Added toast messages:
  - `Quest added from library.`
  - `Quest already added.`
- Library-added quests can still be ticked, unticked, and deleted like normal custom quests.

### Preserved

- Daily History Lite from v0.2a.
- Daily Entry Feel from v0.1d.
- Custom Quest Basic from v0.1c.
- Official Lantern Jelly Dormant Form asset.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Added

- No editable quest library.
- No custom user-defined library presets.
- No recurring quests.
- No quest difficulty.
- No calendar or streak system.

---

## v0.2a — Daily History Lite

**Status:** Patch candidate.

### Added

- Added `Journal History` section.
- End Day now saves or updates one history entry for the current day.
- History entries include:
  - readable date
  - completed quests / total quests
  - Bond gained
  - EXP gained
  - reward status
  - reflection text
  - ended timestamp
- History persists through browser refresh using the existing `localStorage` key:
  - `nereidQuestJournal_v01`
- Same-day End Day updates the existing history entry instead of creating duplicates.
- Reset Today no longer clears history; it only resets the current day.
- UI shows up to 7 recent history entries.

### Preserved

- Custom Quest Basic from v0.1c.
- Daily Entry Feel from v0.1d.
- Official Lantern Jelly Dormant Form asset.
- GitHub Pages project folder structure.

### Not Added

- No calendar grid.
- No streaks.
- No achievement system.
- No delete/clear history button.
- No cloud sync.
- No creature evolution.

---

