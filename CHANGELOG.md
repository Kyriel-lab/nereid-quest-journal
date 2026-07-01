# Changelog

## v0.4b — Hide Companion Registry UI

**Status:** Patch candidate.

### Changed

- Hid the early Companion Registry UI from the right sidebar.
- Kept the Active Companion card as the main companion display.
- Restored the sidebar focus to:
  - Today
  - Active Companion
  - Daily Progress
  - Today’s Reward

### Preserved

- Companion Registry code foundation for possible later reuse.
- Companion Registry Render Hotfix from v0.4a.
- Companion Registry Foundation from v0.4.
- Stats Dashboard Hotfix from v0.3a.
- Flexible Daily Start from v0.2e.
- Quest Library content from v0.2d.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Daily Quest logic changes.
- No Stats Dashboard changes.
- No Quest Library changes.
- No new assets.
- No companion switching.
- No evolution stages.

---

## v0.4a — Companion Registry Render Hotfix

**Status:** Patch candidate.

### Fixed

- Fixed Companion Registry card showing only the header without companion rows.
- Ensured `renderCompanionRegistry()` runs during the main render cycle.
- Companion Registry now renders the four starter companions:
  - Lantern Jelly
  - Tideback
  - Shellfin
  - Moon Otter

### Preserved

- Companion Registry Foundation from v0.4.
- Stats Dashboard Hotfix from v0.3a.
- Flexible Daily Start from v0.2e.
- Quest Library content from v0.2d.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No new assets.
- No companion switching.
- No evolution stages.
- No stats/history/quest logic changes.

---

## v0.4 — Companion Registry Foundation

**Status:** Patch candidate.

### Added / Changed

- Added a static Companion Registry card.
- Added the four starter companions:
  - Lantern Jelly
  - Tideback
  - Shellfin
  - Moon Otter
- Marked Lantern Jelly as `Active`.
- Marked Tideback, Shellfin, and Moon Otter as `Dormant`.
- Added role/form/description metadata for each starter companion.
- Lantern Jelly uses the official existing dormant asset:
  - `assets/lantern-jelly-dormant.png`
- Non-active starter companions use safe placeholder handling with `Asset pending`.
- Added registry styles for compact right-sidebar display.

### Preserved

- Stats Dashboard Hotfix from v0.3a.
- Stats Dashboard Foundation from v0.3.
- Flexible Daily Start from v0.2e.
- Quest Library content from v0.2d.
- Daily Entry and Journal History.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No companion switching.
- No companion selection.
- No evolution stages.
- No new image assets.
- No achievements.
- No monthly theme or hidden creatures system.

---

## v0.3a — Stats Dashboard Hotfix

**Status:** Patch candidate.

### Fixed

- Fixed Stats Dashboard empty state staying visible after stats exist.
- Added explicit hidden-state CSS for Stats Dashboard panels.
- Fixed `Best Day` showing `undefined`.
- Added safer date fallbacks for older Journal History entries.
- Fixed Recent 7-Day Snapshot rows missing the date label when older entries do not have `displayDate`.

### Preserved

- Stats Dashboard Foundation from v0.3.
- Flexible Daily Start from v0.2e.
- Quest Library content from v0.2d.
- Existing Journal History entries.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No new features.
- No history reset.
- No Daily Quest logic changes.
- No Quest Library changes.

---

## v0.3 — Stats Dashboard Foundation

**Status:** Patch candidate.

### Added / Changed

- Added a Stats Dashboard based on Journal History.
- Added long-term progress metrics:
  - Journal Days
  - Completed Quests
  - Total Bond
  - Total EXP
  - Average Completion
  - Best Day
  - Most Used Quest Type
- Added a Recent 7-Day Snapshot based on the latest history entries.
- Added an empty stats state when there is no Journal History yet.
- Extended new history entries with:
  - `completionPercent`
  - `completedTypeCounts`
- Preserved backward compatibility for older history entries without type-count data.

### Preserved

- Flexible Daily Start from v0.2e.
- Quest Library content from v0.2d.
- Desktop Daily Use Polish from v0.2c.
- Quest Library duplicate prevention from v0.2b.
- Daily History Lite from v0.2a.
- Daily Entry Feel from v0.1d.
- Existing app logic and `localStorage` key:
  - `nereidQuestJournal_v01`
- Official Lantern Jelly Dormant Form asset.

### Not Changed

- No achievements.
- No companion registry.
- No evolution system.
- No charts.
- No calendar, cloud sync, or export/import.

---

## v0.2e — Flexible Daily Start

**Status:** Patch candidate.

### Added / Changed

- Removed fixed daily default quests.
- Each day now starts with 0 selected quests.
- Today’s Quests now shows an empty state when no quests are selected:
  - `No quests chosen yet.`
  - `Pick a ritual from the Quest Library or add a small quest.`
- Updated Today’s Quests subtitle to:
  - `Choose and complete today’s rituals.`
- Updated quest count / waiting badge behavior:
  - 0 quests → `Choose quests`
  - incomplete quests → `N waiting`
  - all complete → `All complete`
- End Day is now blocked when there are 0 selected quests.
- Empty End Day attempts show:
  - `Choose at least one quest before ending the day.`
- Reward stays locked when there are 0 quests.
- Reset Today now returns the current day to a flexible empty board while preserving Journal History.

### Preserved

- Quest Library content from v0.2d.
- Quest Library duplicate prevention from v0.2b.
- Daily History Lite from v0.2a.
- Daily Entry Feel from v0.1d.
- Desktop Daily Use Polish from v0.2c.
- Custom Quest flow.
- Official Lantern Jelly Dormant Form asset.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No recurring quests.
- No editable daily templates.
- No calendar, streak, achievement, or evolution system.
- No cloud sync.

---

## v0.2d — Quest Library Content Polish

**Status:** Patch candidate.

### Added / Changed

- Updated Quest Library presets to better match daily use.
- Korean presets now include:
  - Daily Korean
  - Korean Review
  - New Vocabulary
  - New Grammar
  - Listening Practice
- Logistics / university presets now include:
  - Lecture Review
  - Study Notes
  - Work on Assignment
  - Organize Study Files
- Skill presets now include:
  - Piano Practice — 30 minutes
  - Nereid Project Work
- Care presets now include:
  - Skincare Routine
  - Drink Water 1
  - Drink Water 2
  - Drink Water 3
  - Workout
- Dorm / life admin presets remain:
  - Clean Desk
  - Laundry
  - Tidy Room
  - Check Tomorrow’s Schedule

### Removed / Replaced

- Removed generic presets:
  - Drawing Practice
  - Read 10 pages
  - Stretching
- Replaced `Workout — Light Session` with `Workout`.
- Replaced older Korean/logistics preset wording with the revised library list.

### Preserved

- Quest Library logic from v0.2b.
- Duplicate prevention.
- Daily History Lite from v0.2a.
- Daily Entry Feel from v0.1d.
- Desktop Daily Use Polish from v0.2c.
- Existing app logic and `localStorage` behavior.
- Official Lantern Jelly Dormant Form asset.

### Not Changed

- No HTML changes.
- No CSS changes.
- No localStorage key changes.
- No new feature systems.

---

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

