# Changelog

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

