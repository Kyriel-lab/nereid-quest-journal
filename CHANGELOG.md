# Changelog

## v2.2a — Static Manifestation Requirement Copy

**Status:** Patch candidate.

### Added / Changed

- Replaces the rejected dynamic v2.2 approach with a static-only safe patch.
- Added static planned Resonant Manifestation requirement copy inside the Moonlit Resonance card:
  - Evolution III awakened
  - Bond ≥ 900
  - Available Moonlit Fragments ≥ 10
  - Resonant Memory
- Added static CSS styling for the planned requirement block.

### Preserved

- v2.1 Resonant Manifestation State Foundation.
- v2.0 Moonlit Resonance UI Foundation.
- v1.9 Evolution Track Completion Lock.
- Evolution III Asset Integration from v1.8.
- Evolution III Awakening Ritual from v1.7.
- Evolution I / II / III rituals and assets.
- Moonlit Fragment Spend Ledger.
- Bond lifetime logic.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No JavaScript logic changes from v2.1.
- No Achievements changes.
- No dynamic Manifestation requirement calculation.
- No Manifestation ritual.
- No Manifestation unlock action.
- No Manifestation asset reveal.
- No Companion Card manifestation image swap.
- No Apex Crest requirements.
- No Apex Crest ritual.
- No fragment earning/spending changes.
- No Bond logic changes.
- No Evolution I / II / III logic changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v2.1 — Resonant Manifestation State Foundation

**Status:** Patch candidate.

### Added / Changed

- Added standalone Resonant Manifestation state foundation under:
  - `companionResonance.lanternJelly`
- Added normalized state fields:
  - `manifestationUnlocked`
  - `manifestationName`
- Locked Lantern Jelly manifestation name in state/UI:
  - `Astrael Lanternveil`
- Added safe migration for older local saves that do not yet have `companionResonance`.
- Added `normalizeCompanionResonance()`.
- Added `getLanternJellyResonanceState()`.
- Added `isLanternJellyManifestationUnlocked()`.
- Added `renderMoonlitResonance()`.
- Moonlit Resonance placeholder now displays:
  - `Resonant Manifestation`
  - `Astrael Lanternveil`
  - `Sleeping`

### Preserved

- v2.0 Moonlit Resonance UI Foundation.
- v1.9 Evolution Track Completion Lock.
- Evolution III Asset Integration from v1.8.
- Evolution III Awakening Ritual from v1.7.
- Evolution I / II / III rituals and assets.
- Moonlit Fragment Spend Ledger.
- Bond lifetime logic.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Manifestation unlock requirements.
- No Manifestation ritual.
- No Manifestation asset reveal.
- No Companion Card manifestation image swap.
- No Apex Crest requirements.
- No Apex Crest ritual.
- No fragment spending changes.
- No Bond logic changes.
- No Evolution I / II / III changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v2.0 — Moonlit Resonance UI Foundation

**Status:** Patch candidate.

### Added / Changed

- Added new `Moonlit Resonance` section below `Companion Evolution`.
- Added two non-interactive placeholder branch cards:
  - `Resonant Manifestation`
  - `Apex Crest`
- Clarified UI architecture:
  - Companion Evolution = normal creature form track.
  - Moonlit Resonance = special post-evolution branches.
- Resonant Manifestation is presented as a persona branch, not an evolution form.
- Apex Crest is presented as a crest layer beyond the normal evolution track, not Evolution IV.
- Added responsive styling for the new Moonlit Resonance card grid.

### Preserved

- v1.9 Evolution Track Completion Lock.
- Evolution III Asset Integration from v1.8.
- Evolution III Awakening Ritual from v1.7.
- Evolution III Requirement Foundation from v1.6.
- Evolution I / II / III rituals and assets.
- Moonlit Fragment Spend Ledger.
- Bond lifetime logic.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Resonant Manifestation unlock logic.
- No Resonant Manifestation asset reveal.
- No Resonant Manifestation ritual.
- No Companion Card manifestation image swap.
- No Apex Crest requirements.
- No Apex Crest ritual.
- No Apex Crest asset reveal.
- No fragment spending changes.
- No Bond logic changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.9 — Evolution Track Completion Lock

**Status:** Patch candidate.

### Added / Changed

- Locked the normal Lantern Jelly evolution track after validated Evolution III asset integration:
  - Dormant Form
  - Evolution I
  - Evolution II
  - Evolution III
- Clarified Evolution III as the final normal evolution.
- Clarified Apex Crest as a separate layer beyond the normal evolution track, not Evolution IV.
- Companion Card now labels the post-form progression row as `Next Layer` instead of `Next Evolution`.
- Polished post-Evolution III copy:
  - `Evolution III · The final normal evolution has awakened.`
  - `The final normal evolution has opened.`
  - `A final crest remains beyond the normal evolution track.`
- Fixed Companion Card next-layer badge styling so readiness follows the current next layer, not only Evolution I.

### Preserved

- Evolution III Asset Integration from v1.8.
- Evolution III Awakening Ritual from v1.7.
- Evolution III Requirement Foundation from v1.6.
- Evolution II Asset Integration from v1.4.
- Evolution II Awakening Ritual from v1.3.
- Evolution I Asset Integration from v1.0.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Apex Crest requirements.
- No Apex Crest ritual.
- No Resonant Manifestation UI.
- No Resonant Manifestation logic.
- No Evolution I / II / III ritual logic changes.
- No fragment spending changes.
- No Bond logic changes.
- No asset changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.8 — Evolution III Asset Integration

**Status:** Patch candidate.

### Added / Changed

- Integrated official Lantern Jelly Evolution III asset:
  - Source: `Nereid_Evolution_III_Asset_Pack_v1.0/01_Lantern_Jelly_EvoIII_Astral_Abyss_Oracle.png`
  - App path: `assets/lantern-jelly-evolution-3.png`
- Added Evolution III asset mapping to `LANTERN_JELLY_ASSETS`.
- Companion Card now switches to Evolution III image after Evolution III awakens.
- Evolution III slot now reveals the Evolution III image after unlock.
- Removed Evolution III placeholder copy:
  - `Image pending future asset pass.`
- Evolution III awakened copy is now:
  - `Evolution III · The final lantern evolution has awakened.`
  - `The final lantern evolution has opened.`

### Preserved

- Evolution III Awakening Ritual from v1.7.
- Evolution III Requirement Foundation from v1.6.
- Evolution Track Cleanup & Canon Lock from v1.5.
- Evolution II Requirement Source Hotfix from v1.4a.
- Evolution II Asset Integration from v1.4.
- Evolution I Asset Integration from v1.0.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution III ritual logic changes.
- No fragment spending changes.
- No Bond logic changes.
- No Evolution I / II changes.
- No Apex Crest requirements.
- No Apex Crest ritual.
- No Resonant Manifestation UI.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.7 — Evolution III Awakening Ritual

**Status:** Patch candidate.

### Added / Changed

- Added guarded Evolution III awakening ritual.
- Added:
  - `canAwakenEvolutionIII()`
  - `awakenEvolutionIII()`
- Evolution III ritual appears only when all Evolution III signs are aligned.
- The third ritual:
  - confirms before action
  - spends 8 available Moonlit Fragments through the existing spend ledger
  - unlocks `evolution-3`
  - sets Lantern Jelly current form to `evolution-3`
- Active Companion card can now show:
  - `Evolution III · Awakened`
  - `Apex Crest sleeping`
- Evolution III slot can now show:
  - `Evolution III`
  - `Awakened`
  - `The final lantern evolution has opened. Image pending future asset pass.`
- Apex Crest remains sealed beyond the normal evolution track.

### Preserved

- Evolution III Requirement Foundation from v1.6.
- Evolution Track Cleanup & Canon Lock from v1.5.
- Evolution II Requirement Source Hotfix from v1.4a.
- Evolution II Asset Integration from v1.4.
- Evolution II Awakening Ritual from v1.3.
- Evolution I Asset Integration from v1.0.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution III image reveal.
- No Evolution III asset integration.
- No Apex Crest requirement logic.
- No Apex Crest ritual.
- No Evolution I / II ritual logic changes.
- No fragment earning logic changes.
- No Bond logic changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.6 — Evolution III Requirement Foundation

**Status:** Patch candidate.

### Added / Changed

- Added `Moonlit Constellation` achievement:
  - Earn 14 Moonlit Fragments from perfect days.
- Added Evolution III requirement foundation:
  - Evolution II awakened
  - Bond 600
  - Available Moonlit Fragments 8
  - Moonlit Constellation unlocked
- Added Evolution III progress helper and signs markup.
- Evolution III slot now shows requirement signs after Evolution II awakens.
- Companion Card can now show:
  - `Evolution III sleeping`
  - `Evolution III ready`
- No Evolution III ritual button is added yet.

### Preserved

- Evolution Track Cleanup & Canon Lock from v1.5.
- Evolution II Requirement Source Hotfix from v1.4a.
- Evolution II Asset Integration from v1.4.
- Evolution II Awakening Ritual from v1.3.
- Evolution II Requirement Signs from v1.2.
- Evolution I Asset Integration from v1.0.
- Evolution I Awakening Ritual from v0.9b.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution III ritual.
- No Evolution III button.
- No Evolution III unlock state changes.
- No Evolution III asset integration.
- No Apex Crest logic.
- No Evolution I / II ritual logic changes.
- No fragment logic changes.
- No Bond logic changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.5 — Evolution Track Cleanup & Canon Lock

**Status:** Patch candidate.

### Added / Changed

- Polished and locked evolution track copy after the validated v1.4a baseline.
- Clarified the current canon path:
  - Dormant Form
  - Evolution I
  - Evolution II
  - Evolution III sleeping
  - Apex Crest later
- Clarified Dormant Form as the revealed base form.
- Clarified Evolution III as sealed with no requirements, button, ritual, or asset reveal.
- Clarified Apex Crest as a final crest beyond the evolution path, not an Evolution IV form.
- Removed older ambiguous user-facing phrasing where needed.

### Stable Baseline Note

- `v1.4a — Evolution II Requirement Source Hotfix` is the validated Evolution II baseline.
- v1.5 does not change ritual, fragment, Bond, asset, or state logic.

### Preserved

- Evolution II Asset Integration from v1.4.
- Evolution II Requirement Source Hotfix from v1.4a.
- Evolution II Awakening Ritual from v1.3.
- Evolution II Requirement Signs from v1.2.
- Evolution I Asset Integration from v1.0.
- Evolution I Awakening Ritual from v0.9b.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution III requirements.
- No Evolution III ritual.
- No Evolution III asset.
- No Apex Crest logic.
- No Evolution I / II ritual logic changes.
- No fragment logic changes.
- No Bond logic changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.4a — Evolution II Requirement Source Hotfix

**Status:** Patch candidate.

### Fixed

- Fixed Evolution II Bond requirement source.
  - Evolution II now checks lifetime Bond from saved history plus today's completed Bond.
  - Bond is a milestone requirement and is not spent by evolution rituals.
- Fixed Lantern Rite requirement source.
  - Evolution II now checks `Lantern Rite` directly from lifetime achievement stats.
  - `Lantern Rite` unlocks from 7 earned Moonlit Fragments in history.
- Preserved Moonlit Fragment spending behavior:
  - Evolution II still spends only 5 available Moonlit Fragments.
  - Bond is never consumed.

### Preserved

- Evolution II Asset Integration from v1.4.
- Evolution II Awakening Ritual from v1.3.
- Evolution II Requirement Signs from v1.2.
- Evolution I Asset Integration from v1.0.
- Evolution I Awakening Ritual from v0.9b.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution II asset changes.
- No Evolution II ritual flow changes.
- No fragment earning logic changes.
- No evolution state shape changes.
- No Evolution III requirement logic.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.4 — Evolution II Asset Integration

**Status:** Patch candidate.

### Added / Changed

- Integrated official Lantern Jelly Evolution II asset:
  - Source: `02_Abyssal_Star_Lantern_stage_3.png`
  - App path: `assets/lantern-jelly-evolution-2.png`
- Added Evolution II asset mapping to `LANTERN_JELLY_ASSETS`.
- Companion Card now switches to Evolution II image after Evolution II awakens.
- Evolution II slot now reveals the Evolution II image after unlock.
- Removed Evolution II placeholder copy:
  - `Image pending future asset pass.`
- Evolution II awakened copy is now:
  - `Evolution II · A deeper lantern form has awakened.`
  - `A deeper lantern has opened within the current.`

### Preserved

- Evolution II Awakening Ritual from v1.3.
- Evolution II Requirement Signs from v1.2.
- Evolution I Asset Integration from v1.0.
- Evolution I Awakening Ritual from v0.9b.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution II ritual logic changes.
- No fragment logic changes.
- No evolution state logic changes.
- No Evolution III requirement logic.
- No Evolution III ritual.
- No Evolution I asset change.
- No Dormant asset change.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.3 — Evolution II Awakening Ritual

**Status:** Patch candidate.

### Added / Changed

- Added guarded Evolution II awakening ritual.
- Added:
  - `isLanternJellyEvolutionIIUnlocked()`
  - `canAwakenEvolutionII()`
  - `awakenEvolutionII()`
- Evolution II ritual appears only when all Evolution II signs are aligned.
- The second ritual:
  - confirms before action
  - spends 5 available Moonlit Fragments through the existing spend ledger
  - unlocks `evolution-2`
  - sets Lantern Jelly current form to `evolution-2`
- Active Companion card can now show:
  - `Evolution II · Awakened`
  - `Evolution III sleeping`
- Evolution II slot can now show:
  - `Evolution II`
  - `Awakened`
  - `A deeper lantern has opened within the current. Image pending future asset pass.`
- Evolution III remains sealed with:
  - `The third lantern remains sealed.`

### Preserved

- Evolution II Requirement Signs from v1.2.
- Evolution I Asset Integration from v1.0.
- Evolution I Awakening Ritual from v0.9b.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution II image reveal.
- No Evolution II asset integration.
- No Evolution III requirement logic.
- No Evolution I ritual logic changes.
- No fragment earning logic changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.2 — Evolution II Requirement Signs

**Status:** Patch candidate.

### Added / Changed

- Added `Lantern Rite` achievement:
  - Earn 7 Moonlit Fragments from perfect days.
- Added Evolution II requirement foundation:
  - Evolution I awakened
  - Bond 300
  - Available Moonlit Fragments 5
  - Lantern Rite unlocked
- Added Evolution II signs after Evolution I awakens.
- Companion Card can now show:
  - `Evolution II sleeping`
  - `Evolution II ready`
- Evolution II slot can now show:
  - `A deeper ritual is forming.`
  - `The second lantern is ready to awaken.`
- No Evolution II ritual button is added yet.

### Preserved

- Evolution II Requirement Foundation copy from v1.1.
- Evolution I Asset Integration from v1.0.
- Evolution I Awakening Ritual from v0.9b.
- Moonlit Fragment Spend Ledger from v0.9a.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution II button.
- No Evolution II ritual.
- No Evolution II unlock state.
- No Evolution II asset integration.
- No Evolution I ritual logic changes.
- No fragment ledger changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.1 — Evolution II Requirement Foundation

**Status:** Patch candidate.

### Added / Changed

- Clarified Evolution II as the next sealed milestone after Lantern Jelly awakens Evolution I.
- Updated post-awakening companion card hint to:
  - `A deeper ritual has not formed yet.`
- Updated Evolution II slot copy after Evolution I awakens to:
  - `A deeper ritual has not formed yet.`
- Added light CSS stability for sealed milestone copy height.

### Preserved

- Evolution I Asset Integration from v1.0.
- Awakened State Polish from v0.9c.
- Evolution I Awakening Ritual from v0.9b.
- Moonlit Fragment Spend Ledger from v0.9a.
- Evolution Ready State Foundation from v0.8.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution II button.
- No Evolution II ritual.
- No Evolution II requirements.
- No Evolution II unlock state.
- No Evolution II asset integration.
- No Evolution I ritual logic changes.
- No fragment ledger changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v1.0 — Evolution I Asset Integration

**Status:** Patch candidate.

### Added / Changed

- Integrated the official Lantern Jelly Evolution I asset from the Stage 2 asset pack.
- Added:
  - `assets/lantern-jelly-evolution-1.png`
- Mapped old Stage 2 Lantern Oracle art to the new Evolution I system.
- Active Companion card now switches image after Evolution I awakens:
  - Dormant: `assets/lantern-jelly-dormant.png`
  - Evolution I: `assets/lantern-jelly-evolution-1.png`
- Evolution I slot now reveals the Evolution I image after awakening.
- Removed the post-awakening placeholder copy:
  - `Image pending future asset pass.`

### Preserved

- Awakened State Polish from v0.9c.
- Current Form Meta Hotfix from v0.9b-ui.
- Evolution I Awakening Ritual from v0.9b.
- Fragment Ledger Visibility Hotfix from v0.9a-ui.
- Moonlit Fragment Spend Ledger from v0.9a.
- Evolution Ready State Foundation from v0.8.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No ritual logic changes.
- No fragment logic changes.
- No companion evolution state changes.
- No Evolution II requirement logic.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v0.9c — Awakened State Polish

**Status:** Patch candidate.

### Added / Changed

- Polished post-awakening copy for Lantern Jelly Evolution I.
- Active Companion card now updates its role copy after Evolution I awakens:
  - `Evolution I · A newly awakened lantern spirit, glowing with deeper ritual light.`
- Dormant Form slot now clarifies its archived status after awakening:
  - `Previous form archived.`
- Evolution I awakened slot now clarifies that art is pending:
  - `A new form has surfaced from the lantern light. Image pending future asset pass.`
- Evolution II slot now hints that it requires a future ritual after Evolution I awakens:
  - `Requires a future ritual.`
- Added light CSS polish for awakened slot readability.

### Preserved

- Current Form Meta Hotfix from v0.9b-ui.
- Evolution I Awakening Ritual from v0.9b.
- Fragment Ledger Visibility Hotfix from v0.9a-ui.
- Moonlit Fragment Spend Ledger from v0.9a.
- Evolution Ready State Foundation from v0.8.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No ritual logic changes.
- No fragment logic changes.
- No companion evolution state changes.
- No Evolution I image reveal.
- No new asset integration.
- No Evolution II requirement logic.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v0.9b-ui — Current Form Meta Hotfix

**Status:** Patch candidate.

### Fixed

- Fixed the Companion Evolution header continuing to show `Current Form: Dormant Form` after Evolution I awakens.
- The Companion Evolution header now displays:
  - `Current Form: Dormant Form` before awakening.
  - `Current Form: Evolution I · Awakened` after awakening.

### Preserved

- Evolution I Awakening Ritual from v0.9b.
- Fragment Ledger Visibility Hotfix from v0.9a-ui.
- Moonlit Fragment Spend Ledger from v0.9a.
- Evolution Ready State Foundation from v0.8.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No ritual logic changes.
- No fragment logic changes.
- No companion evolution state changes.
- No Evolution I image reveal.
- No new asset integration.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v0.9b — Evolution I Awakening Ritual

**Status:** Patch candidate.

### Added / Changed

- Added Lantern Jelly evolution state:
  - `currentForm`
  - `unlockedForms`
- Added normalization for the new companion evolution state while preserving the existing `localStorage` key.
- Added one `Begin Awakening Ritual` control inside the Evolution I slot when all Awakening Signs are aligned.
- Added confirmation before awakening Evolution I.
- Awakening Evolution I now:
  - spends 3 available Moonlit Fragments through `spentMoonlitFragments`
  - unlocks `evolution-1`
  - sets Lantern Jelly current form to `evolution-1`
- Active Companion card now shows:
  - `Evolution I · Awakened`
  - `Evolution II sleeping`
- Evolution I slot now shows:
  - `Evolution I`
  - `Awakened`
  - `A new form has surfaced from the lantern light.`

### Preserved

- Fragment Ledger Visibility Hotfix from v0.9a-ui.
- Moonlit Fragment Spend Ledger from v0.9a.
- Evolution Ready State Foundation from v0.8.
- Evolution I Render Hotfix from v0.7d.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolution I image reveal.
- No new asset integration.
- No animation.
- No Evolution II requirement logic.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v0.9a-ui — Fragment Ledger Visibility Hotfix

**Status:** Patch candidate.

### Fixed

- Made the Moonlit Fragment ledger line visible inside Evolution I Awakening Signs.
- Updated ledger copy from:
  - `Earned X · Spent Y`
- To:
  - `Available X · Earned Y · Spent Z`
- Added full-width styling so the ledger line does not disappear in the narrow Evolution I slot.

### Preserved

- Moonlit Fragment Spend Ledger from v0.9a.
- Evolution Ready State Foundation from v0.8.
- Evolution I Render Hotfix from v0.7d.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolve button.
- No Awakening Ritual action.
- No Moonlit Fragment spending action yet.
- No Evolution I unlock state.
- No Evolution I image reveal.
- No asset changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v0.9a — Moonlit Fragment Spend Ledger

**Status:** Patch candidate.

### Added / Changed

- Added a Moonlit Fragment spend ledger foundation.
- Added `spentMoonlitFragments` to journal state while preserving the existing `localStorage` key.
- Split Moonlit Fragment logic into:
  - earned fragments from perfect-day history
  - spent fragments from state
  - available fragments for evolution requirements
- `getMoonlitFragmentTotal()` now returns available fragments.
- Evolution I requirements now use available Moonlit Fragments.
- Awakening Signs now show:
  - available / required Moonlit Fragments
  - earned / spent ledger copy

### Preserved

- Evolution Ready State Foundation from v0.8.
- Evolution I Render Hotfix from v0.7d.
- Evolution I Awakening Signs UI from v0.7c.
- Remove EXP Foundation from v0.7.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolve button.
- No Awakening Ritual action.
- No Moonlit Fragment spending action yet.
- No Evolution I unlock state.
- No Evolution I image reveal.
- No asset changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v0.8 — Evolution Ready State Foundation

**Status:** Patch candidate.

### Added / Changed

- Added ready-aware copy to the Active Companion card.
- `Next Evolution` now displays:
  - `Evolution I sleeping` when Awakening Signs are incomplete.
  - `Evolution I ready` when all requirements are met.
- Added companion-card hint text:
  - `Awakening signs are still aligning.`
  - `Awakening ritual pending.`
- Enhanced Evolution I Awakening Signs copy:
  - `Complete all signs to prepare Evolution I.`
  - `All awakening signs are aligned.`
- Updated Evolution I ready toast copy to:
  - `Evolution I is ready. Awakening ritual can begin.`

### Preserved

- Evolution I Render Hotfix from v0.7d.
- Evolution I Awakening Signs UI from v0.7c.
- Evolution Wording Alignment from v0.7b.
- Restore Dashboard Render Hotfix from v0.7a.
- Remove EXP Foundation from v0.7.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No Evolve button.
- No Evolution I image reveal.
- No Moonlit Fragment consumption.
- No companion form unlock state.
- No Evolution II / III logic.
- No asset changes.
- No Save Data / export / import branch.
- No EXP restoration.

---

## v0.7d — Evolution I Render Hotfix

**Status:** Patch candidate.

### Fixed

- Fixed Companion Evolution becoming blank after v0.7c.
- Replaced the unsafe `getStats()` render fallback with a safe `getCurrentStats()` helper.
- Made Evolution I progress robust when achievement helper naming differs across versions.
- Kept Awakening Signs for Evolution I without revealing assets or adding an evolve button.

### Preserved

- Evolution I Awakening Signs UI from v0.7c.
- Evolution Wording Alignment from v0.7b.
- Restore Dashboard Render Hotfix from v0.7a.
- Remove EXP Foundation from v0.7.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No actual evolution.
- No evolve button.
- No Evolution I image reveal.
- No Moonlit Fragment consumption.
- No Evolution II / III / Apex Crest requirement UI.
- No asset renaming.
- No localStorage migration.

---

## v0.7c — Evolution I Awakening Signs UI

**Status:** Patch candidate.

### Added / Changed

- Added Awakening Signs progress to Sealed Evolution I.
- Evolution I now checks:
  - Bond: `150`
  - Moonlit Fragments: `3`
  - Achievement: `First Ripple`
- Sealed Evolution I can show:
  - `Sleeping` when requirements are incomplete
  - `Ready` when all Awakening Signs are complete
- Updated Evolution I click hints:
  - Sleeping: follow Awakening Signs
  - Ready: awakening ritual will be added later
- Active Companion card can show `Evolution I ready` when the seal is prepared.

### Preserved

- Evolution Wording Alignment from v0.7b.
- Restore Dashboard Render Hotfix from v0.7a.
- Remove EXP Foundation from v0.7.
- Active Companion Card Polish from v0.6b.
- Companion Evolution Seals from v0.6.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No actual evolution.
- No evolve button.
- No Evolution I image reveal.
- No Moonlit Fragment consumption.
- No Evolution II / III / Apex Crest requirement UI.
- No asset renaming.
- No localStorage migration.

---

## v0.7b — Evolution Wording Alignment

**Status:** Patch candidate.

### Added / Changed

- Aligned companion evolution wording to the current canon structure:
  - Dormant Form
  - Evolution I
  - Evolution II
  - Evolution III
  - Apex Crest
- Renamed sealed stage labels:
  - `Sealed Stage I` → `Sealed Evolution I`
  - `Sealed Stage II` → `Sealed Evolution II`
  - `Sealed Stage III` → `Sealed Evolution III`
- Renamed `Apex Seal` to `Apex Crest`.
- Updated Active Companion card:
  - `Evolution Seal` → `Next Evolution`
  - `Stage I sleeping` → `Evolution I sleeping`
- Preserved the Dormant Form as the base/current form.

### Preserved

- Restore Dashboard Render Hotfix from v0.7a.
- Remove EXP Foundation from v0.7.
- Active Companion Card Polish from v0.6b.
- Companion Evolution Seals Render Hotfix from v0.6a.
- Achievement Foundation from v0.5.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No asset renaming.
- No Evolution IV.
- No actual evolution.
- No evolve button.
- No requirement UI.
- No companion switching.
- No future form reveal.
- No localStorage migration.

---

## v0.7a — Restore Dashboard Render Hotfix

**Status:** Patch candidate.

### Fixed

- Restored the dynamic render chain after v0.7.
- Prevented one render block from stopping Stats, Achievements, or Companion Evolution.
- Added guarded rendering for removed EXP UI targets.
- Kept EXP hidden from the visible core UI while preserving safe fallback behavior.

### Preserved

- Remove EXP Foundation from v0.7:
  - Skill Quest: `+8 Bond`
  - Home Quest: `+5 Bond`
  - No visible EXP row/card in Companion or Stats UI
- Active Companion Card Polish from v0.6b.
- Companion Evolution Seals Render Hotfix from v0.6a.
- Companion Evolution Seals from v0.6.
- Achievement Foundation from v0.5.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No actual evolution.
- No evolve button.
- No companion switching.
- No Stage I requirement UI.
- No localStorage migration.
- No future form reveal.

---

## v0.7 — Remove EXP Foundation

**Status:** Patch candidate.

### Added / Changed

- Removed EXP from the visible core journal system.
- Converted quest rewards to Bond-focused progression:
  - Study Quest: `+10 Bond`
  - Skill Quest: `+8 Bond`
  - Care Quest: `+5 Bond`
  - Home Quest: `+5 Bond`
- Removed the EXP row from the Active Companion card.
- Removed the fake `/100` Bond cap from the Active Companion card.
- Removed visible EXP summary/render targets from companion, entry, and stats UI.
- Preserved existing saved EXP data without migration or conversion.

### Preserved

- Active Companion Card Polish from v0.6b.
- Companion Evolution Seals Render Hotfix from v0.6a.
- Companion Evolution Seals from v0.6.
- Achievement Foundation from v0.5.
- Moonlit Fragment Tracking from v0.4c.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No actual evolution.
- No evolve button.
- No companion switching.
- No Stage I requirement UI yet.
- No new resource.
- No localStorage migration.
- No future form reveal.

---

## v0.6b — Active Companion Card Polish

**Status:** Patch candidate.

### Added / Changed

- Polished the Active Companion sidebar card.
- Added active companion status rows:
  - Current Form
  - Evolution Seal
  - Moonlit Fragments
- Current Form shows:
  - `Dormant Form · Revealed`
- Evolution Seal shows:
  - `Stage I sleeping`
- Moonlit Fragments are counted from Journal History with backward compatibility:
  - `moonlitFragmentEarned ?? rewardUnlocked`

### Preserved

- Companion Evolution Seals Render Hotfix from v0.6a.
- Companion Evolution Seals from v0.6.
- Achievement Foundation from v0.5.
- Moonlit Fragment Tracking from v0.4c.
- Active Companion Focus from v0.4b.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No actual evolution.
- No evolve button.
- No companion switching.
- No new form images.
- No resource costs.
- No EXP/Bond/Moonlit Fragment unlock rules.
- No stats, achievements, quest, or history logic changes.

---

## v0.6a — Evolution Seals Render Hotfix

**Status:** Patch candidate.

### Fixed

- Fixed Companion Evolution section showing only the header without revealed/sealed content.
- Ensured `renderEvolutionSeals()` runs during the main render cycle.
- Added a direct element fallback for `evolutionSealsList` so the section can render safely.
- Companion Evolution now renders:
  - Lantern Jelly Dormant Form — Revealed
  - Sealed Stage I
  - Sealed Stage II
  - Sealed Stage III
  - Apex Seal
  - Tideback / Shellfin / Moon Otter as Sealed Starters

### Preserved

- Companion Evolution Seals from v0.6.
- Achievement Foundation from v0.5.
- Moonlit Fragment Tracking from v0.4c.
- Active Companion Focus from v0.4b.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No actual evolution.
- No evolve button.
- No resource costs.
- No future form reveal.
- No stats, achievements, quest, or history logic changes.

---

## v0.6 — Companion Evolution Seals

**Status:** Patch candidate.

### Added / Changed

- Added a sealed Companion Evolution section.
- Revealed only Lantern Jelly’s current Dormant Form.
- Added sealed future slots for Lantern Jelly:
  - Sealed Stage I
  - Sealed Stage II
  - Sealed Stage III
  - Apex Seal
- Added compact sealed starter cards for:
  - Tideback
  - Shellfin
  - Moon Otter
- Sealed slots use fantasy UI labels instead of technical `asset pending` wording.
- Clicking sealed slots shows a light hint through the existing toast system.
- Future forms are not revealed through images, names, silhouettes, or lore.

### Preserved

- Achievement Foundation from v0.5.
- Moonlit Fragment Tracking from v0.4c.
- Active Companion Focus from v0.4b.
- Stats Dashboard Hotfix from v0.3a.
- Flexible Daily Start from v0.2e.
- Quest Library content from v0.2d.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No actual evolution.
- No evolve button.
- No resource costs.
- No EXP/Bond/Moonlit Fragment rules.
- No future form assets.
- No companion switching.
- No Apex system.

---

## v0.5 — Achievement Foundation

**Status:** Patch candidate.

### Added / Changed

- Added a lightweight Achievements section.
- Added 7 foundation achievements:
  - First Ripple
  - Seven Ripples
  - Ritual Keeper
  - Moonlit Collector
  - Korean Spark
  - Carekeeper
  - Moonlit Note
- Achievements are derived from Journal History, not stored separately.
- Achievement progress now uses:
  - Journal days
  - Completed quests
  - Moonlit Fragments
  - Quest type counts
  - Reflection entries
- Added locked/unlocked visual states and simple progress bars.

### Preserved

- Moonlit Fragment Tracking from v0.4c.
- Active Companion Focus from v0.4b.
- Stats Dashboard Hotfix from v0.3a.
- Flexible Daily Start from v0.2e.
- Quest Library content from v0.2d.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No achievement rewards.
- No Moonlit Fragment spending.
- No inventory.
- No companion evolution.
- No companion switching.
- No monthly achievements.
- No unlock popups or heavy animations.

---

## v0.4c — Moonlit Fragment Tracking

**Status:** Patch candidate.

### Added / Changed

- Added Moonlit Fragment tracking as a perfect-day reward token.
- Added a Stats Dashboard tile:
  - `Moonlit Fragments`
- New valid history entries now save:
  - `moonlitFragmentEarned: true / false`
- Moonlit Fragment total is calculated from Journal History.
- Added backward compatibility for older history entries:
  - `moonlitFragmentEarned ?? rewardUnlocked`
- Clarified Daily Entry reward wording from unlocked to earned where applicable.

### Preserved

- Active Companion Focus from v0.4b.
- Companion Registry code foundation from v0.4/v0.4a for possible later reuse.
- Stats Dashboard Hotfix from v0.3a.
- Flexible Daily Start from v0.2e.
- Quest Library content from v0.2d.
- Existing `localStorage` key:
  - `nereidQuestJournal_v01`

### Not Changed

- No inventory.
- No fragment spending.
- No shop.
- No evolution cost.
- No achievements.
- No new assets.
- No Daily Quest logic changes.

---

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

