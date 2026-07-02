const STORAGE_KEY = "nereidQuestJournal_v01";
    const LANTERN_JELLY_ASSETS = {
      dormant: "assets/lantern-jelly-dormant.png",
      evolution1: "assets/lantern-jelly-evolution-1.png",
      evolution2: "assets/lantern-jelly-evolution-2.png",
      evolution3: "assets/lantern-jelly-evolution-3.png"
    };


    const DEFAULT_QUESTS = [];

    const feedbackByStage = [
      "The shore is quiet.",
      "A small ripple begins.",
      "The tide is rising slowly.",
      "Your companion feels your rhythm.",
      "The day is complete."
    ];

    const moodByStage = ["Calm", "Curious", "Glowing", "Encouraged", "Radiant"];

    const questIcons = {
      "Study Quest": "✧",
      "Skill Quest": "✦",
      "Care Quest": "❦",
      "Home Quest": "◌"
    };

    const rewardRules = {
      "Study Quest": { rewardType: "bond", rewardValue: 10 },
      "Skill Quest": { rewardType: "bond", rewardValue: 8 },
      "Care Quest": { rewardType: "bond", rewardValue: 5 },
      "Home Quest": { rewardType: "bond", rewardValue: 5 }
    };


    const QUEST_LIBRARY = [
      {
        id: "lib-daily-korean",
        title: "Daily Korean",
        type: "Study Quest"
      },
      {
        id: "lib-korean-review",
        title: "Korean Review",
        type: "Study Quest"
      },
      {
        id: "lib-new-vocabulary",
        title: "New Vocabulary",
        type: "Study Quest"
      },
      {
        id: "lib-new-grammar",
        title: "New Grammar",
        type: "Study Quest"
      },
      {
        id: "lib-listening-practice",
        title: "Listening Practice",
        type: "Study Quest"
      },
      {
        id: "lib-lecture-review",
        title: "Lecture Review",
        type: "Study Quest"
      },
      {
        id: "lib-study-notes",
        title: "Study Notes",
        type: "Study Quest"
      },
      {
        id: "lib-work-on-assignment",
        title: "Work on Assignment",
        type: "Study Quest"
      },
      {
        id: "lib-organize-study-files",
        title: "Organize Study Files",
        type: "Home Quest"
      },
      {
        id: "lib-piano-practice-30",
        title: "Piano Practice — 30 minutes",
        type: "Skill Quest"
      },
      {
        id: "lib-nereid-project-work",
        title: "Nereid Project Work",
        type: "Skill Quest"
      },
      {
        id: "lib-skincare-routine",
        title: "Skincare Routine",
        type: "Care Quest"
      },
      {
        id: "lib-drink-water-1",
        title: "Drink Water 1",
        type: "Care Quest"
      },
      {
        id: "lib-drink-water-2",
        title: "Drink Water 2",
        type: "Care Quest"
      },
      {
        id: "lib-drink-water-3",
        title: "Drink Water 3",
        type: "Care Quest"
      },
      {
        id: "lib-workout",
        title: "Workout",
        type: "Care Quest"
      },
      {
        id: "lib-clean-desk",
        title: "Clean Desk",
        type: "Home Quest"
      },
      {
        id: "lib-laundry",
        title: "Laundry",
        type: "Home Quest"
      },
      {
        id: "lib-tidy-room",
        title: "Tidy Room",
        type: "Home Quest"
      },
      {
        id: "lib-check-tomorrows-schedule",
        title: "Check Tomorrow’s Schedule",
        type: "Home Quest"
      }
    ];

    const COMPANION_REGISTRY = [
      {
        id: "lantern-jelly",
        name: "Lantern Jelly",
        status: "Active",
        form: "Dormant Form",
        role: "Gentle guide",
        description: "A celestial lantern jellyfish that glows softly beside your daily rituals.",
        asset: "assets/lantern-jelly-dormant.png"
      },
      {
        id: "tideback",
        name: "Tideback",
        status: "Dormant",
        form: "Dormant Form",
        role: "Guardian shell",
        description: "A shrine-backed tide creature that carries quiet protection across the water.",
        asset: null
      },
      {
        id: "shellfin",
        name: "Shellfin",
        status: "Dormant",
        form: "Dormant Form",
        role: "Echo keeper",
        description: "A shell-like spirit that listens to small promises and stores them like songs.",
        asset: null
      },
      {
        id: "moon-otter",
        name: "Moon Otter",
        status: "Dormant",
        form: "Dormant Form",
        role: "Pearl bearer",
        description: "A moonlit otter companion that carries a soft pearl of comfort and curiosity.",
        asset: null
      }
    ];

    const ACHIEVEMENTS = [
      {
        id: "first-ripple",
        name: "First Ripple",
        description: "End your first valid journal day.",
        target: 1,
        icon: "✧",
        getProgress: (stats) => stats.journalDays
      },
      {
        id: "seven-ripples",
        name: "Seven Ripples",
        description: "Record 7 journal days.",
        target: 7,
        icon: "〰",
        getProgress: (stats) => stats.journalDays
      },
      {
        id: "ritual-keeper",
        name: "Ritual Keeper",
        description: "Complete 20 quests across your journal.",
        target: 20,
        icon: "✓",
        getProgress: (stats) => stats.completedQuests
      },
      {
        id: "moonlit-collector",
        name: "Moonlit Collector",
        description: "Earn 5 Moonlit Fragments from perfect days.",
        target: 5,
        icon: "☾",
        getProgress: (stats) => stats.moonlitFragments
      },
      {
        id: "lantern-rite",
        name: "Lantern Rite",
        description: "Earn 7 Moonlit Fragments from perfect days.",
        target: 7,
        icon: "✦",
        getProgress: (stats) => stats.moonlitFragments
      },
      {
        id: "moonlit-constellation",
        name: "Moonlit Constellation",
        description: "Earn 14 Moonlit Fragments from perfect days.",
        target: 14,
        icon: "✺",
        getProgress: (stats) => stats.moonlitFragments
      },
      {
        id: "resonant-memory",
        name: "Resonant Memory",
        description: "Earn 21 Moonlit Fragments from perfect days.",
        target: 21,
        icon: "☌",
        getProgress: (stats) => stats.moonlitFragments
      },
      {
        id: "korean-spark",
        name: "Korean Spark",
        description: "Complete 5 Study quests.",
        target: 5,
        icon: "文",
        getProgress: (stats) => stats.completedTypeCounts["Study Quest"] || 0
      },
      {
        id: "carekeeper",
        name: "Carekeeper",
        description: "Complete 5 Care quests.",
        target: 5,
        icon: "♡",
        getProgress: (stats) => stats.completedTypeCounts["Care Quest"] || 0
      },
      {
        id: "moonlit-note",
        name: "Moonlit Note",
        description: "Write 3 reflections in your journal entries.",
        target: 3,
        icon: "✎",
        getProgress: (stats) => stats.reflectionEntries
      }
    ];

    const EVOLUTION_SEALS = {
      activeCompanion: {
        id: "lantern-jelly",
        name: "Lantern Jelly",
        currentForm: "Dormant Form",
        description: "A soft celestial guide for small daily rituals.",
        asset: "assets/lantern-jelly-dormant.png",
        slots: [
          {
            id: "lantern-jelly-dormant",
            label: "Dormant Form",
            status: "revealed",
            statusLabel: "Revealed",
            copy: "Current form in the evolution track.",
            asset: "assets/lantern-jelly-dormant.png",
            hint: "Dormant Form is the revealed base form of Lantern Jelly."
          },
          {
            id: "lantern-jelly-stage-1",
            label: "Sealed Evolution I",
            status: "sealed",
            statusLabel: "Sleeping",
            copy: "The first lantern awakening sleeps behind this seal.",
            icon: "✧",
            hint: "This evolution is sealed. Keep journaling to awaken it later."
          },
          {
            id: "lantern-jelly-stage-2",
            label: "Sealed Evolution II",
            status: "sealed",
            statusLabel: "Sleeping",
            copy: "The second lantern awakening is hidden.",
            icon: "✧",
            hint: "This evolution is sealed. Keep journaling to awaken it later."
          },
          {
            id: "lantern-jelly-stage-3",
            label: "Sealed Evolution III",
            status: "sealed",
            statusLabel: "Sleeping",
            copy: "The third lantern remains sealed.",
            icon: "✧",
            hint: "This evolution is sealed. Keep journaling to awaken it later."
          },
          {
            id: "lantern-jelly-apex",
            label: "Apex Crest",
            status: "apex",
            statusLabel: "Later",
            copy: "A final crest remains beyond the normal evolution track.",
            icon: "☾",
            hint: "Apex Crest is a final crest beyond the normal evolution track, not Evolution IV."
          }
        ]
      },
      sealedStarters: [
        {
          id: "tideback",
          name: "Tideback",
          copy: "Forms hidden until this companion joins the journal."
        },
        {
          id: "shellfin",
          name: "Shellfin",
          copy: "Forms hidden until this companion joins the journal."
        },
        {
          id: "moon-otter",
          name: "Moon Otter",
          copy: "Forms hidden until this companion joins the journal."
        }
      ]
    };




    let state = loadState();

    const elements = {
      dateText: document.getElementById("dateText"),
      questCountText: document.getElementById("questCountText"),
      questsWaitingText: document.getElementById("questsWaitingText"),
      questList: document.getElementById("questList"),
      customQuestInput: document.getElementById("customQuestInput"),
      customQuestType: document.getElementById("customQuestType"),
      addQuestButton: document.getElementById("addQuestButton"),
      questLibrary: document.getElementById("questLibrary"),
      progressCount: document.getElementById("progressCount"),
      progressPercent: document.getElementById("progressPercent"),
      progressFill: document.getElementById("progressFill"),
      feedbackText: document.getElementById("feedbackText"),
      moodBadge: document.getElementById("moodBadge"),
      companionMood: document.getElementById("companionMood"),
      companionRole: document.querySelector(".companion-role"),
      companionImage: document.getElementById("companionImage"),
      companionCurrentForm: document.getElementById("companionCurrentForm"),
      companionEvolutionSeal: document.getElementById("companionEvolutionSeal"),
      companionEvolutionHint: document.getElementById("companionEvolutionHint"),
      companionMoonlitFragments: document.getElementById("companionMoonlitFragments"),
      manifestationBranchCard: document.getElementById("manifestationBranchCard"),
      manifestationBranchName: document.getElementById("manifestationBranchName"),
      manifestationBranchCopy: document.getElementById("manifestationBranchCopy"),
      manifestationBranchStatus: document.getElementById("manifestationBranchStatus"),
      bondValue: document.getElementById("bondValue"),
      expValue: document.getElementById("expValue"),
      rewardCard: document.getElementById("rewardCard"),
      rewardCopy: document.getElementById("rewardCopy"),
      rewardStatus: document.getElementById("rewardStatus"),
      reflectionInput: document.getElementById("reflectionInput"),
      saveButton: document.getElementById("saveButton"),
      endButton: document.getElementById("endButton"),
      resetButton: document.getElementById("resetButton"),
      toast: document.getElementById("toast"),
      dailyEntryCard: document.getElementById("dailyEntryCard"),
      entryDateStamp: document.getElementById("entryDateStamp"),
      entryStatusTitle: document.getElementById("entryStatusTitle"),
      entryStatusCopy: document.getElementById("entryStatusCopy"),
      entryQuestSummary: document.getElementById("entryQuestSummary"),
      entryBondSummary: document.getElementById("entryBondSummary"),
      entryExpSummary: document.getElementById("entryExpSummary"),
      entryRewardChip: document.getElementById("entryRewardChip"),
      entryRewardSummary: document.getElementById("entryRewardSummary"),
      entryReflectionText: document.getElementById("entryReflectionText"),
      historyCard: document.getElementById("historyCard"),
      historyCountBadge: document.getElementById("historyCountBadge"),
      historyEmpty: document.getElementById("historyEmpty"),
      historyList: document.getElementById("historyList"),
      statsEmptyState: document.getElementById("statsEmptyState"),
      statsContent: document.getElementById("statsContent"),
      statJournalDays: document.getElementById("statJournalDays"),
      statCompletedQuests: document.getElementById("statCompletedQuests"),
      statMoonlitFragments: document.getElementById("statMoonlitFragments"),
      statTotalBond: document.getElementById("statTotalBond"),
      statTotalExp: document.getElementById("statTotalExp"),
      statAverageCompletion: document.getElementById("statAverageCompletion"),
      statBestDay: document.getElementById("statBestDay"),
      statMostUsedType: document.getElementById("statMostUsedType"),
      recentStatsList: document.getElementById("recentStatsList"),
      achievementsList: document.getElementById("achievementsList"),
      evolutionSealsList: document.getElementById("evolutionSealsList"),
      companionRegistryList: document.getElementById("companionRegistryList"),
    };

    function getTodayKey() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    function getReadableDate() {
      return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
      }).format(new Date());
    }

    function normalizeCompanionEvolution(rawEvolution = null) {
      const rawLanternJelly = rawEvolution?.lanternJelly || {};
      const rawUnlockedForms = Array.isArray(rawLanternJelly.unlockedForms)
        ? rawLanternJelly.unlockedForms
        : ["dormant"];

      const unlockedForms = Array.from(new Set(["dormant", ...rawUnlockedForms.filter((form) => typeof form === "string")]));
      const currentForm = unlockedForms.includes(rawLanternJelly.currentForm)
        ? rawLanternJelly.currentForm
        : "dormant";

      return {
        lanternJelly: {
          currentForm,
          unlockedForms
        }
      };
    }

    function normalizeCompanionResonance(rawResonance = null) {
      const rawLanternJelly = rawResonance?.lanternJelly || {};

      return {
        lanternJelly: {
          manifestationUnlocked: rawLanternJelly.manifestationUnlocked === true,
          manifestationName: typeof rawLanternJelly.manifestationName === "string" && rawLanternJelly.manifestationName.trim()
            ? rawLanternJelly.manifestationName.trim()
            : "Astrael Lanternveil"
        }
      };
    }

    function getLanternJellyResonanceState() {
      return normalizeCompanionResonance(state.companionResonance).lanternJelly;
    }

    function isLanternJellyManifestationUnlocked() {
      return getLanternJellyResonanceState().manifestationUnlocked === true;
    }

    function getLanternJellyEvolutionState() {
      return normalizeCompanionEvolution(state.companionEvolution).lanternJelly;
    }

    function isLanternJellyEvolutionIUnlocked() {
      return getLanternJellyEvolutionState().unlockedForms.includes("evolution-1");
    }

    function canAwakenEvolutionI(stats = getCurrentStats()) {
      const progress = getEvolutionIProgress(stats);

      return progress.ready && !isLanternJellyEvolutionIUnlocked();
    }

    function isLanternJellyEvolutionIIUnlocked() {
      return getLanternJellyEvolutionState().unlockedForms.includes("evolution-2");
    }

    function isLanternJellyEvolutionIIIUnlocked() {
      return getLanternJellyEvolutionState().unlockedForms.includes("evolution-3");
    }

    function canAwakenEvolutionII(stats = getCurrentStats()) {
      const progress = getEvolutionIIProgress(stats);

      return progress.ready && !isLanternJellyEvolutionIIUnlocked();
    }

    function awakenEvolutionII() {
      if (!canAwakenEvolutionII()) {
        showToast("Evolution II signs are not fully aligned yet.");
        return;
      }

      const confirmed = window.confirm(
        "Begin Evolution II awakening?\n\nThis will spend 5 Moonlit Fragments and unlock Lantern Jelly’s Evolution II form."
      );

      if (!confirmed) {
        showToast("Second awakening cancelled.");
        return;
      }

      const currentEvolution = normalizeCompanionEvolution(state.companionEvolution);
      const lanternJelly = currentEvolution.lanternJelly;
      const unlockedForms = Array.from(new Set([...lanternJelly.unlockedForms, "evolution-2"]));

      state.spentMoonlitFragments = Math.max(0, Number(state.spentMoonlitFragments) || 0) + EVOLUTION_II_REQUIREMENTS.moonlitFragments;
      state.companionEvolution = {
        ...currentEvolution,
        lanternJelly: {
          currentForm: "evolution-2",
          unlockedForms
        }
      };

      saveState("Evolution II awakened.");
      renderAll();
    }

    function canAwakenEvolutionIII(stats = getCurrentStats()) {
      const progress = getEvolutionIIIProgress(stats);

      return progress.ready && !isLanternJellyEvolutionIIIUnlocked();
    }

    function awakenEvolutionIII() {
      if (!canAwakenEvolutionIII()) {
        showToast("Evolution III signs are not fully aligned yet.");
        return;
      }

      const confirmed = window.confirm(
        "Begin Evolution III awakening?\n\nThis will spend 8 Moonlit Fragments and unlock Lantern Jelly’s Evolution III form."
      );

      if (!confirmed) {
        showToast("Third awakening cancelled.");
        return;
      }

      const currentEvolution = normalizeCompanionEvolution(state.companionEvolution);
      const lanternJelly = currentEvolution.lanternJelly;
      const unlockedForms = Array.from(new Set([...lanternJelly.unlockedForms, "evolution-3"]));

      state.spentMoonlitFragments = Math.max(0, Number(state.spentMoonlitFragments) || 0) + EVOLUTION_III_REQUIREMENTS.moonlitFragments;
      state.companionEvolution = {
        ...currentEvolution,
        lanternJelly: {
          currentForm: "evolution-3",
          unlockedForms
        }
      };

      saveState("Evolution III awakened.");
      renderAll();
    }

    function awakenEvolutionI() {
      if (!canAwakenEvolutionI()) {
        showToast("Awakening signs are not fully aligned yet.");
        return;
      }

      const confirmed = window.confirm(
        "Begin Evolution I awakening?\n\nThis will spend 3 Moonlit Fragments and unlock Lantern Jelly’s Evolution I form."
      );

      if (!confirmed) {
        showToast("Awakening cancelled.");
        return;
      }

      const currentEvolution = normalizeCompanionEvolution(state.companionEvolution);
      const lanternJelly = currentEvolution.lanternJelly;
      const unlockedForms = Array.from(new Set([...lanternJelly.unlockedForms, "evolution-1"]));

      state.spentMoonlitFragments = Math.max(0, Number(state.spentMoonlitFragments) || 0) + EVOLUTION_I_REQUIREMENTS.moonlitFragments;
      state.companionEvolution = {
        ...currentEvolution,
        lanternJelly: {
          currentForm: "evolution-1",
          unlockedForms
        }
      };

      saveState("Evolution I awakened.");
      renderAll();
    }

    function createDefaultState(history = [], spentMoonlitFragments = 0, companionEvolution = null, companionResonance = null) {
      return {
        date: getTodayKey(),
        completedQuestIds: [],
        customQuests: [],
        history: normalizeHistoryEntries(history),
        spentMoonlitFragments: Math.max(0, Number(spentMoonlitFragments) || 0),
        companionEvolution: normalizeCompanionEvolution(companionEvolution),
        companionResonance: normalizeCompanionResonance(companionResonance),
        reflection: "",
        lastSavedAt: "",
        ended: false
      };
    }

    function normalizeCustomQuests(customQuests) {
      if (!Array.isArray(customQuests)) {
        return [];
      }

      return customQuests
        .filter((quest) => quest && typeof quest.title === "string" && quest.title.trim())
        .map((quest) => {
          const type = rewardRules[quest.type] ? quest.type : "Study Quest";
          const reward = rewardRules[type];

          return {
            id: typeof quest.id === "string" && quest.id ? quest.id : `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            title: quest.title.trim().slice(0, 80),
            type,
            rewardType: reward.rewardType,
            rewardValue: reward.rewardValue,
            custom: true,
            source: quest.source === "library" ? "library" : "custom"
          };
        });
    }


    function normalizeHistoryEntries(history) {
      if (!Array.isArray(history)) {
        return [];
      }

      return history
        .filter((entry) => entry && typeof entry.date === "string")
        .map((entry) => ({
          date: entry.date,
          readableDate: typeof entry.readableDate === "string" ? entry.readableDate : entry.date,
          completedCount: Number.isFinite(Number(entry.completedCount)) ? Number(entry.completedCount) : 0,
          totalCount: Number.isFinite(Number(entry.totalCount)) ? Number(entry.totalCount) : 0,
          progress: Number.isFinite(Number(entry.progress)) ? Number(entry.progress) : 0,
          bond: Number.isFinite(Number(entry.bond)) ? Number(entry.bond) : 0,
          exp: Number.isFinite(Number(entry.exp)) ? Number(entry.exp) : 0,
          rewardUnlocked: entry.rewardUnlocked === true,
          reflection: typeof entry.reflection === "string" ? entry.reflection : "",
          endedAt: typeof entry.endedAt === "string" ? entry.endedAt : new Date().toISOString()
        }))
        .sort((a, b) => new Date(b.endedAt) - new Date(a.endedAt));
    }

    function loadState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
          return createDefaultState();
        }

        const parsed = JSON.parse(saved);

        if (!parsed) {
          return createDefaultState();
        }

        const history = normalizeHistoryEntries(parsed.history);

        const spentMoonlitFragments = Math.max(0, Number(parsed.spentMoonlitFragments) || 0);
        const companionEvolution = normalizeCompanionEvolution(parsed.companionEvolution);
        const companionResonance = normalizeCompanionResonance(parsed.companionResonance);

        if (parsed.date !== getTodayKey()) {
          return createDefaultState(history, spentMoonlitFragments, companionEvolution, companionResonance);
        }

        const base = createDefaultState(history, spentMoonlitFragments, companionEvolution, companionResonance);
        const customQuests = normalizeCustomQuests(parsed.customQuests);
        const validQuestIds = new Set([...DEFAULT_QUESTS, ...customQuests].map((quest) => quest.id));

        return {
          ...base,
          ...parsed,
          history,
          customQuests,
          completedQuestIds: Array.isArray(parsed.completedQuestIds)
            ? parsed.completedQuestIds.filter((id) => validQuestIds.has(id))
            : [],
          spentMoonlitFragments,
          companionEvolution,
          companionResonance
        };
      } catch (error) {
        console.warn("Could not load Nereid Quest Journal state:", error);
        return createDefaultState();
      }
    }

    function saveState(showMessage = "") {
      state.lastSavedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

      if (showMessage) {
        showToast(showMessage);
      }
    }

    function getAllQuests() {
      return [...DEFAULT_QUESTS, ...normalizeCustomQuests(state.customQuests)];
    }

    function getProgressStage(progress, completedCount) {
      if (completedCount === 0 || progress === 0) return 0;
      if (progress <= 25) return 1;
      if (progress <= 50) return 2;
      if (progress < 100) return 3;
      return 4;
    }

    function calculateStats() {
      const allQuests = getAllQuests();
      const completedQuests = allQuests.filter((quest) =>
        state.completedQuestIds.includes(quest.id)
      );

      const completedCount = completedQuests.length;
      const totalCount = allQuests.length;
      const progress = totalCount > 0
        ? Math.round((completedCount / totalCount) * 100)
        : 0;
      const stage = getProgressStage(progress, completedCount);

      const bond = completedQuests
        .filter((quest) => quest.rewardType === "bond")
        .reduce((sum, quest) => sum + quest.rewardValue, 0);

      const exp = completedQuests
        .filter((quest) => quest.rewardType === "exp")
        .reduce((sum, quest) => sum + quest.rewardValue, 0);

      return {
        allQuests,
        completedCount,
        totalCount,
        progress,
        stage,
        bond: Math.max(0, bond),
        exp: Math.max(0, exp),
        mood: moodByStage[stage] || moodByStage[0],
        feedback: feedbackByStage[stage] || feedbackByStage[0],
        rewardUnlocked: totalCount > 0 && completedCount === totalCount
      };
    }

    function renderQuests(stats) {
      elements.questList.innerHTML = "";

      if (stats.allQuests.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.className = "quest-empty-state";
        emptyState.innerHTML = `
          <div class="quest-empty-mark">✧</div>
          <strong>No quests chosen yet.</strong>
          <span>Pick a ritual from the Quest Library or add a small quest.</span>
        `;
        elements.questList.appendChild(emptyState);

        elements.questCountText.textContent = "0 quests";
        elements.questsWaitingText.textContent = "Choose quests";
        return;
      }

      stats.allQuests.forEach((quest) => {
        const completed = state.completedQuestIds.includes(quest.id);
        const questCard = document.createElement("div");

        questCard.className = `quest${completed ? " completed" : ""}${quest.custom ? " custom" : ""}`;
        questCard.setAttribute("role", "button");
        questCard.setAttribute("tabindex", "0");
        questCard.setAttribute("aria-pressed", completed ? "true" : "false");

        questCard.addEventListener("click", () => toggleQuest(quest.id));
        questCard.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleQuest(quest.id);
          }
        });

        const rewardLabel = `+${quest.rewardValue} Bond`;

        const icon = questIcons[quest.type] || "✧";

        questCard.innerHTML = `
          <span class="check">${completed ? "✓" : ""}</span>
          <span class="quest-main">
            <span class="quest-title-row">
              <span class="quest-icon">${icon}</span>
              <span class="quest-title"></span>
              <span class="completed-note">completed</span>
            </span>
            <span class="quest-meta">${quest.type} · ${rewardLabel}</span>
          </span>
          <span class="reward-chip">${rewardLabel}</span>
        `;

        questCard.querySelector(".quest-title").textContent = quest.title;

        if (quest.custom) {
          const deleteButton = document.createElement("button");
          deleteButton.className = "delete-quest";
          deleteButton.type = "button";
          deleteButton.setAttribute("aria-label", `Remove ${quest.title}`);
          deleteButton.textContent = "×";
          deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteCustomQuest(quest.id);
          });

          questCard.appendChild(deleteButton);
        }

        elements.questList.appendChild(questCard);
      });

      const waiting = stats.totalCount - stats.completedCount;
      const questWord = stats.totalCount === 1 ? "quest" : "quests";

      elements.questCountText.textContent = `${stats.totalCount} ${questWord}`;
      elements.questsWaitingText.textContent = waiting === 0
        ? "All complete"
        : `${waiting} waiting`;
    }


    function normalizeQuestTitle(title) {
      return String(title || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();
    }

    function isDuplicateQuestTitle(title) {
      const normalizedTitle = normalizeQuestTitle(title);

      if (!normalizedTitle) {
        return false;
      }

      return getAllQuests().some((quest) => normalizeQuestTitle(quest.title) === normalizedTitle);
    }

    function renderQuestLibrary() {
      elements.questLibrary.innerHTML = "";

      QUEST_LIBRARY.forEach((preset) => {
        const chip = document.createElement("button");
        const alreadyAdded = isDuplicateQuestTitle(preset.title);
        const icon = questIcons[preset.type] || "✧";

        chip.type = "button";
        chip.className = `library-chip${alreadyAdded ? " added" : ""}`;
        chip.disabled = alreadyAdded;
        chip.title = alreadyAdded ? "Quest already added" : `Add ${preset.title}`;
        chip.innerHTML = `
          <span class="library-chip-icon">${icon}</span>
          <span></span>
        `;
        chip.querySelector("span:last-child").textContent = preset.title;

        chip.addEventListener("click", () => addLibraryQuest(preset.id));

        elements.questLibrary.appendChild(chip);
      });
    }

    function addLibraryQuest(presetId) {
      const preset = QUEST_LIBRARY.find((item) => item.id === presetId);

      if (!preset) {
        showToast("Quest preset not found.");
        return;
      }

      if (isDuplicateQuestTitle(preset.title)) {
        showToast("Quest already added.");
        return;
      }

      const reward = rewardRules[preset.type] || rewardRules["Study Quest"];

      const quest = {
        id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        title: preset.title,
        type: preset.type,
        rewardType: reward.rewardType,
        rewardValue: reward.rewardValue,
        custom: true,
        source: "library"
      };

      state.customQuests = [...normalizeCustomQuests(state.customQuests), quest];

      saveState("Quest added from library.");
      renderAll();
    }

    function renderProgress(stats) {
      const questWord = stats.totalCount === 1 ? "quest" : "quests";

      elements.progressCount.textContent = `${stats.completedCount} / ${stats.totalCount} ${questWord} completed`;
      elements.progressPercent.textContent = `${stats.progress}%`;
      elements.progressFill.style.width = `${stats.progress}%`;
      elements.progressFill.classList.toggle("complete", stats.rewardUnlocked);
      elements.feedbackText.textContent = stats.feedback;
      document.body.dataset.progressLevel = String(stats.stage);
    }


    function getMoonlitFragmentEarnedTotal() {
      const history = Array.isArray(state.history) ? state.history : [];

      return history.reduce((total, entry) => {
        if (!entry || !entry.totalCount) {
          return total;
        }

        return total + ((entry.moonlitFragmentEarned ?? entry.rewardUnlocked) ? 1 : 0);
      }, 0);
    }

    function getMoonlitFragmentSpentTotal() {
      return Math.max(0, Number(state.spentMoonlitFragments) || 0);
    }

    function getMoonlitFragmentTotal() {
      return Math.max(0, getMoonlitFragmentEarnedTotal() - getMoonlitFragmentSpentTotal());
    }

    function getMoonlitFragmentLedger() {
      const earned = getMoonlitFragmentEarnedTotal();
      const spent = Math.min(getMoonlitFragmentSpentTotal(), earned);
      const available = Math.max(0, earned - spent);

      return {
        earned,
        spent,
        available
      };
    }

    function renderCompanion(stats) {
      elements.moodBadge.textContent = stats.mood;
      elements.companionMood.textContent = stats.mood;
      elements.bondValue.textContent = stats.bond;
      if (elements.expValue) {

        elements.expValue.textContent = stats.exp;

      }

      const lanternJellyEvolution = getLanternJellyEvolutionState();
      const evolutionIUnlocked = isLanternJellyEvolutionIUnlocked();
      const evolutionIIUnlocked = isLanternJellyEvolutionIIUnlocked();
      const evolutionIIIUnlocked = isLanternJellyEvolutionIIIUnlocked();

      if (elements.companionCurrentForm) {
        elements.companionCurrentForm.textContent = evolutionIIIUnlocked
          ? "Evolution III · Awakened"
          : (
              evolutionIIUnlocked
                ? "Evolution II · Awakened"
                : (
                    evolutionIUnlocked
                      ? "Evolution I · Awakened"
                      : "Dormant Form · Revealed"
                  )
            );
      }

      if (elements.companionRole) {
        elements.companionRole.textContent = evolutionIIIUnlocked
          ? "Evolution III · The final normal evolution has awakened."
          : (
              evolutionIIUnlocked
                ? "Evolution II · A deeper lantern form has awakened."
                : (
                    evolutionIUnlocked
                      ? "Evolution I · A newly awakened lantern spirit, glowing with deeper ritual light."
                      : "Dormant Form · A small lantern-like jelly companion that glows brighter when daily rituals are completed."
                  )
            );
      }

      if (elements.companionImage) {
        const nextImage = evolutionIIIUnlocked
          ? LANTERN_JELLY_ASSETS.evolution3
          : (
              evolutionIIUnlocked
                ? LANTERN_JELLY_ASSETS.evolution2
                : (
                    evolutionIUnlocked
                      ? LANTERN_JELLY_ASSETS.evolution1
                      : LANTERN_JELLY_ASSETS.dormant
                  )
            );

        if (elements.companionImage.getAttribute("src") !== nextImage) {
          elements.companionImage.src = nextImage;
        }

        elements.companionImage.alt = evolutionIIIUnlocked
          ? "Lantern Jelly Evolution III awakened form"
          : (
              evolutionIIUnlocked
                ? "Lantern Jelly Evolution II awakened form"
                : (
                    evolutionIUnlocked
                      ? "Lantern Jelly Evolution I awakened form"
                      : "Lantern Jelly dormant form"
                  )
            );
      }

      const evolutionIProgress = getEvolutionIProgress(stats);
      const evolutionIIProgress = getEvolutionIIProgress(stats);
      const evolutionIIIProgress = getEvolutionIIIProgress(stats);
      const evolutionIStatus = evolutionIIIUnlocked
        ? "Apex Crest sleeping"
        : (
            evolutionIIUnlocked
              ? (evolutionIIIProgress.ready ? "Evolution III ready" : "Evolution III sleeping")
              : (
                  evolutionIUnlocked
                    ? (evolutionIIProgress.ready ? "Evolution II ready" : "Evolution II sleeping")
                    : (evolutionIProgress.ready ? "Evolution I ready" : "Evolution I sleeping")
                )
          );
      const evolutionIHint = evolutionIIIUnlocked
        ? "A final crest remains beyond the normal evolution track."
        : (
            evolutionIIUnlocked
              ? (
                  evolutionIIIProgress.ready
                    ? "The third lantern is ready to awaken."
                    : "The third lantern is still gathering light."
                )
              : (
                  evolutionIUnlocked
                    ? (
                        evolutionIIProgress.ready
                          ? "The second lantern is ready to awaken."
                          : "A deeper ritual is forming."
                      )
                    : (
                        evolutionIProgress.ready
                          ? "Awakening ritual pending."
                          : "Awakening signs are still aligning."
                      )
                )
          );

      const nextLayerReady = evolutionIIIUnlocked
        ? false
        : (
            evolutionIIUnlocked
              ? evolutionIIIProgress.ready
              : (
                  evolutionIUnlocked
                    ? evolutionIIProgress.ready
                    : evolutionIProgress.ready
                )
          );

      if (elements.companionEvolutionSeal) {
        elements.companionEvolutionSeal.textContent = evolutionIStatus;
        elements.companionEvolutionSeal.classList.toggle("ready", nextLayerReady);
        elements.companionEvolutionSeal.classList.toggle("sleeping", !nextLayerReady);
      }

      if (elements.companionEvolutionHint) {
        elements.companionEvolutionHint.textContent = evolutionIHint;
        elements.companionEvolutionHint.classList.toggle("ready", nextLayerReady);
      }

      if (elements.companionMoonlitFragments) {
        elements.companionMoonlitFragments.textContent = getMoonlitFragmentTotal();
      }

    }

    
    function renderMoonlitResonance() {
      const resonance = getLanternJellyResonanceState();
      const manifestationUnlocked = isLanternJellyManifestationUnlocked();

      if (elements.manifestationBranchName) {
        elements.manifestationBranchName.textContent = resonance.manifestationName;
      }

      if (elements.manifestationBranchCopy) {
        elements.manifestationBranchCopy.textContent = manifestationUnlocked
          ? "Lantern Jelly’s human-like spirit persona has manifested through deep resonance."
          : "A human-like spirit persona expressed through Lantern Jelly’s deepest resonance.";
      }

      if (elements.manifestationBranchStatus) {
        elements.manifestationBranchStatus.textContent = manifestationUnlocked ? "Manifested" : "Sleeping";
        elements.manifestationBranchStatus.classList.toggle("sleeping", !manifestationUnlocked);
        elements.manifestationBranchStatus.classList.toggle("manifested", manifestationUnlocked);
      }

      if (elements.manifestationBranchCard) {
        elements.manifestationBranchCard.classList.toggle("sleeping", !manifestationUnlocked);
        elements.manifestationBranchCard.classList.toggle("manifested", manifestationUnlocked);
      }
    }


    function renderReward(stats) {
      elements.rewardCard.classList.toggle("unlocked", stats.rewardUnlocked);
      elements.rewardStatus.classList.toggle("unlocked", stats.rewardUnlocked);

      if (stats.rewardUnlocked) {
        elements.rewardCopy.textContent = "Unlocked by today’s rhythm.";
        elements.rewardStatus.textContent = "Status: Unlocked";
      } else {
        elements.rewardCopy.textContent = "Complete all daily quests to claim.";
        elements.rewardStatus.textContent = "Status: Locked";
      }
    }


    function renderDailyEntry(stats) {
      const shouldShowEntry = state.ended === true && stats.totalCount > 0;
      elements.dailyEntryCard.hidden = !shouldShowEntry;

      if (!shouldShowEntry) {
        return;
      }

      elements.entryDateStamp.textContent = getReadableDate();
      elements.entryQuestSummary.textContent = `${stats.completedCount} / ${stats.totalCount}`;
      elements.entryBondSummary.textContent = `+${stats.bond}`;
      if (elements.entryExpSummary) {

        elements.entryExpSummary.textContent = `+${stats.exp}`;

      }
      elements.entryRewardSummary.textContent = stats.rewardUnlocked ? "Unlocked" : "Locked";
      elements.entryRewardChip.classList.toggle("reward-unlocked", stats.rewardUnlocked);

      if (stats.rewardUnlocked) {
        elements.entryStatusTitle.textContent = "The day is complete.";
        elements.entryStatusCopy.textContent = "Moonlit Fragment earned.";
      } else {
        elements.entryStatusTitle.textContent = "The day has been saved.";
        elements.entryStatusCopy.textContent = "Small rituals still count.";
      }

      const reflection = (state.reflection || "").trim();

      if (reflection) {
        elements.entryReflectionText.textContent = reflection;
        elements.entryReflectionText.classList.remove("empty");
      } else {
        elements.entryReflectionText.textContent = "No reflection written yet.";
        elements.entryReflectionText.classList.add("empty");
      }
    }


    function createHistoryEntry(stats) {
      return {
        date: state.date || getTodayKey(),
        readableDate: getReadableDate(),
        completedCount: stats.completedCount,
        totalCount: stats.totalCount,
        completionPercent: stats.totalCount > 0 ? Math.round((stats.completedCount / stats.totalCount) * 100) : 0,
        completedTypeCounts: getCompletedTypeCounts(stats),
        progress: stats.progress,
        bond: stats.bond,
        exp: stats.exp,
        rewardUnlocked: stats.rewardUnlocked,
        moonlitFragmentEarned: stats.rewardUnlocked,
        reflection: (state.reflection || "").trim(),
        endedAt: new Date().toISOString()
      };
    }


    function getCompletedTypeCounts(stats) {
      return stats.allQuests.reduce((counts, quest) => {
        if (!state.completedQuestIds.includes(quest.id)) {
          return counts;
        }

        counts[quest.type] = (counts[quest.type] || 0) + 1;
        return counts;
      }, {});
    }

    function getCompletionPercent(entry) {
      if (!entry || !entry.totalCount) {
        return 0;
      }

      if (typeof entry.completionPercent === "number") {
        return entry.completionPercent;
      }

      return Math.round((entry.completedCount / entry.totalCount) * 100);
    }


    function getEntryDisplayDate(entry) {
      if (!entry) {
        return "Today";
      }

      return entry.displayDate ||
        entry.dateLabel ||
        entry.shortDate ||
        entry.date ||
        entry.dateKey ||
        "Today";
    }

    function calculateLongTermStats() {
      const history = Array.isArray(state.history) ? state.history : [];
      const validEntries = history.filter((entry) => entry && entry.totalCount > 0);

      if (validEntries.length === 0) {
        return {
          hasStats: false,
          journalDays: 0,
          completedQuests: 0,
          totalBond: 0,
          totalExp: 0,
          moonlitFragments: 0,
          averageCompletion: 0,
          bestDay: null,
          mostUsedType: "Not enough data yet",
          recentEntries: []
        };
      }

      const totals = validEntries.reduce((acc, entry) => {
        const completionPercent = getCompletionPercent(entry);

        acc.completedQuests += entry.completedCount || 0;
        acc.totalBond += entry.bond || 0;
        acc.totalExp += entry.exp || 0;
        acc.moonlitFragments += (entry.moonlitFragmentEarned ?? entry.rewardUnlocked) ? 1 : 0;
        acc.completionSum += completionPercent;

        const typeCounts = entry.completedTypeCounts || {};
        Object.keys(typeCounts).forEach((type) => {
          acc.typeCounts[type] = (acc.typeCounts[type] || 0) + typeCounts[type];
        });

        if (
          !acc.bestDay ||
          completionPercent > acc.bestDay.completionPercent ||
          (completionPercent === acc.bestDay.completionPercent && entry.dateKey > acc.bestDay.dateKey)
        ) {
          acc.bestDay = {
            dateKey: entry.dateKey,
            displayDate: getEntryDisplayDate(entry),
            completionPercent
          };
        }

        return acc;
      }, {
        completedQuests: 0,
        totalBond: 0,
        totalExp: 0,
        moonlitFragments: 0,
        completionSum: 0,
        typeCounts: {},
        bestDay: null
      });

      const typeEntries = Object.entries(totals.typeCounts)
        .filter(([, count]) => count > 0)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

      const mostUsedType = typeEntries.length > 0
        ? typeEntries[0][0]
        : "Not enough data yet";

      const recentEntries = validEntries.slice(0, 7).map((entry) => ({
        dateKey: entry.dateKey,
        displayDate: getEntryDisplayDate(entry),
        completedCount: entry.completedCount || 0,
        totalCount: entry.totalCount || 0,
        completionPercent: getCompletionPercent(entry)
      }));

      return {
        hasStats: true,
        journalDays: validEntries.length,
        completedQuests: totals.completedQuests,
        totalBond: totals.totalBond,
        totalExp: totals.totalExp,
        moonlitFragments: totals.moonlitFragments,
        averageCompletion: Math.round(totals.completionSum / validEntries.length),
        bestDay: totals.bestDay,
        mostUsedType,
        recentEntries
      };
    }

    function renderStatsDashboard() {
      if (!elements.statsEmptyState || !elements.statsContent) {
        return;
      }

      const stats = calculateLongTermStats();

      elements.statsEmptyState.hidden = stats.hasStats;
      elements.statsContent.hidden = !stats.hasStats;

      if (!stats.hasStats) {
        return;
      }

      elements.statJournalDays.textContent = stats.journalDays;
      elements.statCompletedQuests.textContent = stats.completedQuests;
      elements.statMoonlitFragments.textContent = stats.moonlitFragments;
      elements.statTotalBond.textContent = stats.totalBond;
      if (elements.statTotalExp) {

        elements.statTotalExp.textContent = stats.totalExp;

      }
      elements.statAverageCompletion.textContent = `${stats.averageCompletion}%`;
      elements.statBestDay.textContent = stats.bestDay
        ? `${stats.bestDay.displayDate || stats.bestDay.dateKey || "Today"} — ${stats.bestDay.completionPercent}%`
        : "—";
      elements.statMostUsedType.textContent = stats.mostUsedType;

      elements.recentStatsList.innerHTML = "";

      stats.recentEntries.forEach((entry) => {
        const row = document.createElement("div");
        row.className = "recent-stats-row";
        row.innerHTML = `
          <span class="recent-stats-date"></span>
          <span class="recent-stats-count">${entry.completedCount}/${entry.totalCount}</span>
          <span class="recent-stats-rate">${entry.completionPercent}%</span>
        `;
        row.querySelector(".recent-stats-date").textContent = entry.displayDate || entry.dateKey || "Today";
        elements.recentStatsList.appendChild(row);
      });
    }


    function upsertTodayHistoryEntry(stats) {
      const entry = createHistoryEntry(stats);
      const history = normalizeHistoryEntries(state.history);
      const existingIndex = history.findIndex((item) => item.date === entry.date);

      if (existingIndex >= 0) {
        history[existingIndex] = entry;
      } else {
        history.unshift(entry);
      }

      state.history = normalizeHistoryEntries(history);
    }

    function renderHistory() {
      const history = normalizeHistoryEntries(state.history).slice(0, 7);
      elements.historyList.innerHTML = "";

      elements.historyCountBadge.textContent = history.length === 1
        ? "1 saved"
        : `${history.length} saved`;

      elements.historyEmpty.hidden = history.length > 0;

      history.forEach((entry) => {
        const item = document.createElement("article");
        item.className = "history-entry";

        const rewardLabel = entry.rewardUnlocked ? "Reward: Unlocked" : "Reward: Locked";
        const reflectionText = entry.reflection ? entry.reflection : "No reflection written.";

        item.innerHTML = `
          <div class="history-entry-header">
            <h3 class="history-date"></h3>
            <span class="history-reward${entry.rewardUnlocked ? " unlocked" : ""}">${rewardLabel}</span>
          </div>
          <div class="history-meta">
            <span>${entry.completedCount} / ${entry.totalCount} quests</span>
            <span>+${entry.bond} Bond</span>
            <span>+${entry.exp} Bond</span>
          </div>
          <p class="history-reflection${entry.reflection ? "" : " empty"}"></p>
        `;

        item.querySelector(".history-date").textContent = entry.readableDate;
        item.querySelector(".history-reflection").textContent = reflectionText;

        elements.historyList.appendChild(item);
      });
    }

    function renderReflection() {
      elements.reflectionInput.value = state.reflection || "";
    }

    function renderHeader() {
      elements.dateText.textContent = getReadableDate();
    }



    function calculateAchievementStats() {
      const history = Array.isArray(state.history) ? state.history : [];
      const validEntries = history.filter((entry) => entry && entry.totalCount > 0);

      return validEntries.reduce((acc, entry) => {
        acc.journalDays += 1;
        acc.completedQuests += entry.completedCount || 0;
        acc.moonlitFragments += (entry.moonlitFragmentEarned ?? entry.rewardUnlocked) ? 1 : 0;

        const typeCounts = entry.completedTypeCounts || {};
        Object.keys(typeCounts).forEach((type) => {
          acc.completedTypeCounts[type] = (acc.completedTypeCounts[type] || 0) + typeCounts[type];
        });

        const reflection = (entry.reflection || "").trim();
        if (reflection.length > 0) {
          acc.reflectionEntries += 1;
        }

        return acc;
      }, {
        journalDays: 0,
        completedQuests: 0,
        moonlitFragments: 0,
        completedTypeCounts: {},
        reflectionEntries: 0
      });
    }

    function renderAchievements() {
      if (!elements.achievementsList) {
        return;
      }

      const stats = calculateAchievementStats();
      elements.achievementsList.innerHTML = "";

      ACHIEVEMENTS.forEach((achievement) => {
        const rawProgress = achievement.getProgress(stats) || 0;
        const cappedProgress = Math.min(rawProgress, achievement.target);
        const unlocked = rawProgress >= achievement.target;
        const percent = achievement.target > 0
          ? Math.round((cappedProgress / achievement.target) * 100)
          : 0;

        const item = document.createElement("article");
        item.className = `achievement-item ${unlocked ? "unlocked" : "locked"}`;

        item.innerHTML = `
          <div class="achievement-icon">${achievement.icon}</div>
          <div class="achievement-info">
            <div class="achievement-topline">
              <span class="achievement-name"></span>
              <span class="achievement-status">${unlocked ? "Unlocked" : "Locked"}</span>
            </div>
            <div class="achievement-description"></div>
            <div class="achievement-progress">
              <span class="achievement-progress-text">${unlocked ? "Unlocked" : `${cappedProgress} / ${achievement.target}`}</span>
              <div class="achievement-progress-track" aria-hidden="true">
                <div class="achievement-progress-fill" style="width: ${percent}%"></div>
              </div>
            </div>
          </div>
        `;

        item.querySelector(".achievement-name").textContent = achievement.name;
        item.querySelector(".achievement-description").textContent = achievement.description;
        elements.achievementsList.appendChild(item);
      });
    }





    function getCurrentStats() {
      if (typeof calculateStats === "function") {
        return calculateStats();
      }

      if (typeof getStats === "function") {
        return getStats();
      }

      const completedQuests = state.quests.filter((quest) => quest.completed);
      const bond = completedQuests.reduce((total, quest) => (
        quest.rewardType === "bond" ? total + quest.rewardValue : total
      ), 0);

      return {
        completedCount: completedQuests.length,
        totalCount: state.quests.length,
        bond,
        mood: getMood(bond, completedQuests.length, state.quests.length)
      };
    }

    const EVOLUTION_I_REQUIREMENTS = {
      bond: 150,
      moonlitFragments: 3,
      achievementId: "first-ripple"
    };

    const EVOLUTION_II_REQUIREMENTS = {
      bond: 300,
      moonlitFragments: 5,
      achievementId: "lantern-rite"
    };

    const EVOLUTION_III_REQUIREMENTS = {
      bond: 600,
      moonlitFragments: 8,
      achievementId: "moonlit-constellation"
    };

    const LANTERN_JELLY_MANIFESTATION = {
      name: "Astrael Lanternveil",
      branchLabel: "Resonant Manifestation"
    };

    function getAchievementState(achievementId) {
      if (typeof getAchievements === "function") {
        const achievements = getAchievements();
        return achievements.find((achievement) => achievement.id === achievementId) || null;
      }

      if (typeof buildAchievements === "function") {
        const achievements = buildAchievements();
        return achievements.find((achievement) => achievement.id === achievementId) || null;
      }

      const history = Array.isArray(state.history) ? state.history : [];
      const completedDays = history.filter((entry) => entry && entry.totalCount > 0).length;

      if (achievementId === "first-ripple") {
        return {
          id: "first-ripple",
          unlocked: completedDays >= 1
        };
      }

      return {
        id: achievementId,
        unlocked: false
      };
    }


    function getLifetimeBondTotal(currentStats = getCurrentStats()) {
      const todayBond = Math.max(0, Number(currentStats?.bond) || 0);
      const history = Array.isArray(state.history) ? state.history : [];
      const historyBond = history.reduce((total, entry) => {
        if (!entry || !entry.totalCount) {
          return total;
        }

        return total + Math.max(0, Number(entry.bond) || 0);
      }, 0);

      return historyBond + todayBond;
    }

    function isAchievementUnlockedFromStats(achievementId, stats = calculateAchievementStats()) {
      const achievement = ACHIEVEMENTS.find((item) => item.id === achievementId);

      if (!achievement) {
        return false;
      }

      const progress = Math.max(0, Number(achievement.getProgress(stats)) || 0);
      return progress >= achievement.target;
    }


    function getEvolutionIProgress(stats) {
      const currentStats = stats || getCurrentStats();
      const bond = Math.max(0, currentStats?.bond || 0);
      const moonlitLedger = getMoonlitFragmentLedger();
      const moonlitFragments = moonlitLedger.available;
      const firstRipple = getAchievementState(EVOLUTION_I_REQUIREMENTS.achievementId);
      const firstRippleUnlocked = Boolean(firstRipple?.unlocked);

      return {
        bond,
        bondRequired: EVOLUTION_I_REQUIREMENTS.bond,
        bondReady: bond >= EVOLUTION_I_REQUIREMENTS.bond,
        moonlitFragments,
        moonlitFragmentsEarned: moonlitLedger.earned,
        moonlitFragmentsSpent: moonlitLedger.spent,
        moonlitFragmentsAvailable: moonlitLedger.available,
        moonlitFragmentsRequired: EVOLUTION_I_REQUIREMENTS.moonlitFragments,
        moonlitFragmentsReady: moonlitFragments >= EVOLUTION_I_REQUIREMENTS.moonlitFragments,
        firstRippleUnlocked,
        ready:
          bond >= EVOLUTION_I_REQUIREMENTS.bond &&
          moonlitFragments >= EVOLUTION_I_REQUIREMENTS.moonlitFragments &&
          firstRippleUnlocked
      };
    }

    function createAwakeningSignsMarkup(progress) {
      const alignmentCopy = progress.ready
        ? "All awakening signs are aligned."
        : "Complete all signs to prepare Evolution I.";

      return `
        <div class="awakening-signs ${progress.ready ? "ready" : "sleeping"}" aria-label="Evolution I awakening signs">
          <span class="awakening-signs-title">Awakening Signs</span>
          <span class="awakening-sign ${progress.bondReady ? "complete" : ""}">
            <span>Bond</span>
            <strong>${progress.bond} / ${progress.bondRequired}</strong>
          </span>
          <span class="awakening-sign ${progress.moonlitFragmentsReady ? "complete" : ""}">
            <span>Moonlit Fragments</span>
            <strong>${progress.moonlitFragmentsAvailable} / ${progress.moonlitFragmentsRequired}</strong>
          </span>
          <span class="awakening-ledger">
            Available ${progress.moonlitFragmentsAvailable} · Earned ${progress.moonlitFragmentsEarned} · Spent ${progress.moonlitFragmentsSpent}
          </span>
          <span class="awakening-sign ${progress.firstRippleUnlocked ? "complete" : ""}">
            <span>First Ripple</span>
            <strong>${progress.firstRippleUnlocked ? "✓" : "Sleeping"}</strong>
          </span>
          <span class="awakening-signs-copy">${alignmentCopy}</span>
        </div>
      `;
    }

    function getEvolutionIIProgress(stats) {
      const currentStats = stats || getCurrentStats();
      const bond = getLifetimeBondTotal(currentStats);
      const moonlitLedger = getMoonlitFragmentLedger();
      const moonlitFragments = moonlitLedger.available;
      const achievementStats = calculateAchievementStats();
      const lanternRiteUnlocked = isAchievementUnlockedFromStats(EVOLUTION_II_REQUIREMENTS.achievementId, achievementStats);
      const evolutionIUnlocked = isLanternJellyEvolutionIUnlocked();

      return {
        evolutionIUnlocked,
        bond,
        bondRequired: EVOLUTION_II_REQUIREMENTS.bond,
        bondReady: bond >= EVOLUTION_II_REQUIREMENTS.bond,
        moonlitFragments,
        moonlitFragmentsEarned: moonlitLedger.earned,
        moonlitFragmentsSpent: moonlitLedger.spent,
        moonlitFragmentsAvailable: moonlitLedger.available,
        moonlitFragmentsRequired: EVOLUTION_II_REQUIREMENTS.moonlitFragments,
        moonlitFragmentsReady: moonlitFragments >= EVOLUTION_II_REQUIREMENTS.moonlitFragments,
        lanternRiteUnlocked,
        ready:
          evolutionIUnlocked &&
          bond >= EVOLUTION_II_REQUIREMENTS.bond &&
          moonlitFragments >= EVOLUTION_II_REQUIREMENTS.moonlitFragments &&
          lanternRiteUnlocked
      };
    }

    function createEvolutionIISignsMarkup(progress) {
      const alignmentCopy = progress.ready
        ? "The second lantern is ready to awaken."
        : "A deeper ritual is forming.";

      return `
        <div class="awakening-signs evolution-ii ${progress.ready ? "ready" : "sleeping"}" aria-label="Evolution II requirement signs">
          <span class="awakening-signs-title">Evolution II Signs</span>
          <span class="awakening-sign ${progress.evolutionIUnlocked ? "complete" : ""}">
            <span>Evolution I</span>
            <strong>${progress.evolutionIUnlocked ? "✓" : "Sleeping"}</strong>
          </span>
          <span class="awakening-sign ${progress.bondReady ? "complete" : ""}">
            <span>Bond</span>
            <strong>${progress.bond} / ${progress.bondRequired}</strong>
          </span>
          <span class="awakening-sign ${progress.moonlitFragmentsReady ? "complete" : ""}">
            <span>Moonlit Fragments</span>
            <strong>${progress.moonlitFragmentsAvailable} / ${progress.moonlitFragmentsRequired}</strong>
          </span>
          <span class="awakening-ledger">
            Available ${progress.moonlitFragmentsAvailable} · Earned ${progress.moonlitFragmentsEarned} · Spent ${progress.moonlitFragmentsSpent}
          </span>
          <span class="awakening-sign ${progress.lanternRiteUnlocked ? "complete" : ""}">
            <span>Lantern Rite</span>
            <strong>${progress.lanternRiteUnlocked ? "✓" : "Sleeping"}</strong>
          </span>
          <span class="awakening-signs-copy">${alignmentCopy}</span>
        </div>
      `;
    }

    function getEvolutionIIIProgress(stats) {
      const currentStats = stats || getCurrentStats();
      const bond = getLifetimeBondTotal(currentStats);
      const moonlitLedger = getMoonlitFragmentLedger();
      const moonlitFragments = moonlitLedger.available;
      const achievementStats = calculateAchievementStats();
      const moonlitConstellationUnlocked = isAchievementUnlockedFromStats(EVOLUTION_III_REQUIREMENTS.achievementId, achievementStats);
      const evolutionIIUnlocked = isLanternJellyEvolutionIIUnlocked();

      return {
        evolutionIIUnlocked,
        bond,
        bondRequired: EVOLUTION_III_REQUIREMENTS.bond,
        bondReady: bond >= EVOLUTION_III_REQUIREMENTS.bond,
        moonlitFragments,
        moonlitFragmentsEarned: moonlitLedger.earned,
        moonlitFragmentsSpent: moonlitLedger.spent,
        moonlitFragmentsAvailable: moonlitLedger.available,
        moonlitFragmentsRequired: EVOLUTION_III_REQUIREMENTS.moonlitFragments,
        moonlitFragmentsReady: moonlitFragments >= EVOLUTION_III_REQUIREMENTS.moonlitFragments,
        moonlitConstellationUnlocked,
        ready:
          evolutionIIUnlocked &&
          bond >= EVOLUTION_III_REQUIREMENTS.bond &&
          moonlitFragments >= EVOLUTION_III_REQUIREMENTS.moonlitFragments &&
          moonlitConstellationUnlocked
      };
    }

    function createEvolutionIIISignsMarkup(progress) {
      const alignmentCopy = progress.ready
        ? "The third lantern is ready to awaken."
        : "The third lantern is still gathering light.";

      return `
        <div class="awakening-signs evolution-iii ${progress.ready ? "ready" : "sleeping"}" aria-label="Evolution III requirement signs">
          <span class="awakening-signs-title">Evolution III Signs</span>
          <span class="awakening-sign ${progress.evolutionIIUnlocked ? "complete" : ""}">
            <span>Evolution II</span>
            <strong>${progress.evolutionIIUnlocked ? "✓" : "Sleeping"}</strong>
          </span>
          <span class="awakening-sign ${progress.bondReady ? "complete" : ""}">
            <span>Bond</span>
            <strong>${progress.bond} / ${progress.bondRequired}</strong>
          </span>
          <span class="awakening-sign ${progress.moonlitFragmentsReady ? "complete" : ""}">
            <span>Moonlit Fragments</span>
            <strong>${progress.moonlitFragmentsAvailable} / ${progress.moonlitFragmentsRequired}</strong>
          </span>
          <span class="awakening-ledger">
            Available ${progress.moonlitFragmentsAvailable} · Earned ${progress.moonlitFragmentsEarned} · Spent ${progress.moonlitFragmentsSpent}
          </span>
          <span class="awakening-sign ${progress.moonlitConstellationUnlocked ? "complete" : ""}">
            <span>Moonlit Constellation</span>
            <strong>${progress.moonlitConstellationUnlocked ? "✓" : "Sleeping"}</strong>
          </span>
          <span class="awakening-signs-copy">${alignmentCopy}</span>
        </div>
      `;
    }


    
    function renderEvolutionSeals(stats = getCurrentStats()) {
      const evolutionSealsList = elements.evolutionSealsList || document.getElementById("evolutionSealsList");

      if (!evolutionSealsList) {
        return;
      }

      const active = EVOLUTION_SEALS.activeCompanion;
      evolutionSealsList.innerHTML = "";

      const activeCard = document.createElement("article");
      activeCard.className = "evolution-active-card";

      const evolutionIProgress = getEvolutionIProgress(stats);
      const evolutionIIProgress = getEvolutionIIProgress(stats);
      const evolutionIIIProgress = getEvolutionIIIProgress(stats);

      const evolutionIUnlocked = isLanternJellyEvolutionIUnlocked();
      const evolutionIIUnlocked = isLanternJellyEvolutionIIUnlocked();
      const evolutionIIIUnlocked = isLanternJellyEvolutionIIIUnlocked();

      const slotsMarkup = active.slots.map((slot) => {
        const isDormant = slot.id === "lantern-jelly-dormant";
        const isEvolutionI = slot.id === "lantern-jelly-stage-1";
        const isEvolutionII = slot.id === "lantern-jelly-stage-2";
        const isEvolutionIII = slot.id === "lantern-jelly-stage-3";
        const isApex = slot.id === "lantern-jelly-apex";

        const slotStatus = isEvolutionI
          ? (evolutionIUnlocked ? "awakened" : (evolutionIProgress.ready ? "ready" : slot.status))
          : (
              isEvolutionII && evolutionIUnlocked
                ? (
                    evolutionIIUnlocked
                      ? "awakened"
                      : (evolutionIIProgress.ready ? "ready" : "sealed")
                  )
                : (
                    isEvolutionIII && evolutionIIUnlocked
                      ? (
                          evolutionIIIUnlocked
                            ? "awakened"
                            : (evolutionIIIProgress.ready ? "ready" : "sealed")
                        )
                      : slot.status
                  )
            );
        const statusLabel = isEvolutionI
          ? (evolutionIUnlocked ? "Awakened" : (evolutionIProgress.ready ? "Ready" : slot.statusLabel))
          : (
              isEvolutionII && evolutionIUnlocked
                ? (
                    evolutionIIUnlocked
                      ? "Awakened"
                      : (evolutionIIProgress.ready ? "Ready" : "Sleeping")
                  )
                : (
                    isEvolutionIII && evolutionIIUnlocked
                      ? (
                          evolutionIIIUnlocked
                            ? "Awakened"
                            : (evolutionIIIProgress.ready ? "Ready" : "Sleeping")
                        )
                      : slot.statusLabel
                  )
            );
        const slotLabel = isEvolutionI && evolutionIUnlocked
          ? "Evolution I"
          : (
              isEvolutionII && evolutionIIUnlocked
                ? "Evolution II"
                : (
                    isEvolutionIII && evolutionIIIUnlocked
                      ? "Evolution III"
                      : slot.label
                  )
            );
        const slotCopy = isEvolutionI && evolutionIUnlocked
          ? "A new form has surfaced from the lantern light."
          : (
              isEvolutionII && evolutionIIUnlocked
                ? "A deeper lantern has opened within the current."
                : (
                    isEvolutionIII && evolutionIIIUnlocked
                      ? "The final normal evolution has opened."
                      : (
                          isDormant && evolutionIUnlocked
                            ? "Previous form archived."
                            : (
                                isEvolutionII && evolutionIUnlocked
                                  ? (
                                      evolutionIIProgress.ready
                                        ? "The second lantern is ready to awaken."
                                        : "A deeper ritual is forming."
                                    )
                                  : (
                                      isEvolutionIII && evolutionIIUnlocked
                                        ? (
                                            evolutionIIIProgress.ready
                                              ? "The third lantern is ready to awaken."
                                              : "The third lantern is still gathering light."
                                          )
                                        : (
                                            isApex && evolutionIIIUnlocked
                                              ? "A final crest remains beyond the normal evolution track."
                                              : slot.copy
                                          )
                                    )
                              )
                        )
                  )
            );
        const hint = isEvolutionI
          ? (
              evolutionIUnlocked
                ? "Evolution I has awakened."
                : (
                    evolutionIProgress.ready
                      ? "Evolution I is ready. Awakening ritual can begin."
                      : "Evolution I is still sleeping. Follow its Awakening Signs to prepare the seal."
                  )
            )
          : (
              isEvolutionII && evolutionIUnlocked
                ? (
                    evolutionIIUnlocked
                      ? "Evolution II has awakened."
                      : (
                          evolutionIIProgress.ready
                            ? "Evolution II is ready. Second awakening ritual can begin."
                            : "Evolution II requirements are forming."
                        )
                  )
                : (
                    isEvolutionIII && evolutionIIUnlocked
                      ? (
                          evolutionIIIUnlocked
                            ? "Evolution III has awakened."
                            : (
                                evolutionIIIProgress.ready
                                  ? "Evolution III is ready. Third awakening ritual can begin."
                                  : "Evolution III requirements are forming."
                              )
                        )
                      : (
                          isApex && evolutionIIIUnlocked
                            ? "Apex Crest remains sealed beyond the normal evolution track."
                            : (
                                isDormant && evolutionIUnlocked
                                  ? "Dormant Form remains revealed in the archive."
                                  : slot.hint
                              )
                        )
                  )
            );
        const awakeningMarkup = isEvolutionI && !evolutionIUnlocked ? createAwakeningSignsMarkup(evolutionIProgress) : "";
        const evolutionIIMarkup = isEvolutionII && evolutionIUnlocked && !evolutionIIUnlocked ? createEvolutionIISignsMarkup(evolutionIIProgress) : "";
        const evolutionIIIMarkup = isEvolutionIII && evolutionIIUnlocked && !evolutionIIIUnlocked ? createEvolutionIIISignsMarkup(evolutionIIIProgress) : "";
        const ritualMarkup = isEvolutionI && !evolutionIUnlocked && evolutionIProgress.ready
          ? `<span class="ritual-button" role="button" tabindex="0" data-ritual="evolution-1">Begin Awakening Ritual</span>`
          : (
              isEvolutionII && !evolutionIIUnlocked && evolutionIIProgress.ready
                ? `<span class="ritual-button second-ritual" role="button" tabindex="0" data-ritual="evolution-2">Begin Second Awakening Ritual</span>`
                : (
                    isEvolutionIII && !evolutionIIIUnlocked && evolutionIIIProgress.ready
                      ? `<span class="ritual-button third-ritual" role="button" tabindex="0" data-ritual="evolution-3">Begin Third Awakening Ritual</span>`
                      : ""
                  )
            );
        const slotAsset = isEvolutionIII && evolutionIIIUnlocked
          ? LANTERN_JELLY_ASSETS.evolution3
          : (
              isEvolutionII && evolutionIIUnlocked
                ? LANTERN_JELLY_ASSETS.evolution2
                : (
                    isEvolutionI && evolutionIUnlocked
                      ? LANTERN_JELLY_ASSETS.evolution1
                      : slot.asset
                  )
            );
        const thumb = slotAsset
          ? `<img src="${slotAsset}" alt="${active.name} ${slotLabel}">`
          : (slot.icon || "✧");

        return `
          <button class="evolution-slot ${slotStatus}" type="button" data-hint="${hint}">
            <span class="evolution-slot-thumb">${thumb}</span>
            <span class="evolution-slot-label">${slotLabel}</span>
            <span class="evolution-slot-copy">${slotCopy}</span>
            ${awakeningMarkup}
            ${evolutionIIMarkup}
            ${evolutionIIIMarkup}
            ${ritualMarkup}
            <span class="evolution-slot-status ${slotStatus}">${statusLabel}</span>
          </button>
        `;
      }).join("");

      const currentFormMeta = evolutionIIIUnlocked
        ? "Evolution III · Awakened"
        : (
            evolutionIIUnlocked
              ? "Evolution II · Awakened"
              : (
                  evolutionIUnlocked
                    ? "Evolution I · Awakened"
                    : active.currentForm
                )
          );

      activeCard.innerHTML = `
        <div class="evolution-active-header">
          <span class="evolution-active-name"></span>
          <span class="evolution-active-meta">Current Form: ${currentFormMeta}</span>
          <span class="evolution-active-description"></span>
        </div>
        <div class="evolution-slot-grid">${slotsMarkup}</div>
      `;

      activeCard.querySelector(".evolution-active-name").textContent = active.name;
      activeCard.querySelector(".evolution-active-description").textContent = active.description;

      activeCard.querySelectorAll(".ritual-button").forEach((ritualButton) => {
        const runRitual = () => {
          if (ritualButton.dataset.ritual === "evolution-3") {
            awakenEvolutionIII();
            return;
          }

          if (ritualButton.dataset.ritual === "evolution-2") {
            awakenEvolutionII();
            return;
          }

          awakenEvolutionI();
        };

        ritualButton.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          runRitual();
        });

        ritualButton.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.stopPropagation();
            runRitual();
          }
        });
      });

      activeCard.querySelectorAll(".evolution-slot").forEach((slotButton) => {
        slotButton.addEventListener("click", () => {
          const hint = slotButton.dataset.hint;
          if (hint) {
            showToast(hint);
          }
        });
      });

      evolutionSealsList.appendChild(activeCard);

      const sealedGrid = document.createElement("div");
      sealedGrid.className = "sealed-starters-grid";

      EVOLUTION_SEALS.sealedStarters.forEach((starter) => {
        const starterCard = document.createElement("button");
        starterCard.className = "sealed-starter-card";
        starterCard.type = "button";
        starterCard.innerHTML = `
          <span class="sealed-starter-name"></span>
          <span class="sealed-starter-status">Sealed Starter</span>
          <span class="sealed-starter-copy"></span>
        `;
        starterCard.querySelector(".sealed-starter-name").textContent = starter.name;
        starterCard.querySelector(".sealed-starter-copy").textContent = starter.copy;
        starterCard.addEventListener("click", () => {
          showToast("This companion is still sealed. It may join the journal in a later phase.");
        });

        sealedGrid.appendChild(starterCard);
      });

      evolutionSealsList.appendChild(sealedGrid);
    }


    function renderCompanionRegistry() {
      if (!elements.companionRegistryList) {
        return;
      }

      elements.companionRegistryList.innerHTML = "";

      COMPANION_REGISTRY.forEach((companion) => {
        const item = document.createElement("article");
        item.className = "companion-registry-item";

        const isActive = companion.status === "Active";
        const thumbContent = companion.asset
          ? `<img src="${companion.asset}" alt="${companion.name} dormant form">`
          : "✧";
        const assetNote = companion.asset
          ? ""
          : `<span class="companion-asset-note">Sealed</span>`;

        item.innerHTML = `
          <div class="companion-registry-thumb">${thumbContent}</div>
          <div class="companion-registry-info">
            <div class="companion-registry-topline">
              <span class="companion-registry-name"></span>
              <span class="companion-status-pill${isActive ? " active" : ""}">${companion.status}</span>
            </div>
            <div class="companion-registry-meta">${companion.form} · ${companion.role}</div>
            <div class="companion-registry-role"></div>
            ${assetNote}
          </div>
        `;

        item.querySelector(".companion-registry-name").textContent = companion.name;
        item.querySelector(".companion-registry-role").textContent = companion.description;
        elements.companionRegistryList.appendChild(item);
      });
    }



    function safeRender(renderName, renderTask) {
      try {
        renderTask();
      } catch (error) {
        console.error(`[Nereid Journal] ${renderName} render failed`, error);
      }
    }

    function renderAll() {
      const stats = calculateStats();
      safeRender("renderHeader", () => renderHeader());
      safeRender("renderQuests", () => renderQuests(stats));
      safeRender("renderQuestLibrary", () => renderQuestLibrary());
      safeRender("renderProgress", () => renderProgress(stats));
      safeRender("renderCompanion", () => renderCompanion(stats));
      safeRender("renderMoonlitResonance", () => renderMoonlitResonance());
      safeRender("renderReward", () => renderReward(stats));
      safeRender("renderDailyEntry", () => renderDailyEntry(stats));
      safeRender("renderHistory", () => renderHistory());
      safeRender("renderStatsDashboard", () => renderStatsDashboard());
      safeRender("renderAchievements", () => renderAchievements());
      safeRender("renderEvolutionSeals", () => renderEvolutionSeals());
      safeRender("renderCompanionRegistry", () => renderCompanionRegistry());
      safeRender("renderReflection", () => renderReflection());
    }

    function toggleQuest(id) {
      const alreadyCompleted = state.completedQuestIds.includes(id);

      if (alreadyCompleted) {
        state.completedQuestIds = state.completedQuestIds.filter((questId) => questId !== id);
      } else {
        state.completedQuestIds = [...state.completedQuestIds, id];
      }

      saveState();
      renderAll();
    }

    function addCustomQuest() {
      const title = elements.customQuestInput.value.trim().replace(/\s+/g, " ");

      if (!title) {
        showToast("Write a quest first.");
        elements.customQuestInput.focus();
        return;
      }

      if (isDuplicateQuestTitle(title)) {
        showToast("Quest already added.");
        return;
      }

      const type = elements.customQuestType.value;
      const reward = rewardRules[type] || rewardRules["Study Quest"];

      const quest = {
        id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        title: title.slice(0, 80),
        type,
        rewardType: reward.rewardType,
        rewardValue: reward.rewardValue,
        custom: true,
        source: "custom"
      };

      state.customQuests = [...normalizeCustomQuests(state.customQuests), quest];
      elements.customQuestInput.value = "";

      saveState("Quest added.");
      renderAll();
    }

    function deleteCustomQuest(id) {
      state.customQuests = normalizeCustomQuests(state.customQuests).filter((quest) => quest.id !== id);
      state.completedQuestIds = state.completedQuestIds.filter((questId) => questId !== id);
      saveState("Quest removed.");
      renderAll();
    }

    function saveDay() {
      saveState("Day saved.");
      renderAll();
    }

    function endDay() {
      const stats = calculateStats();

      if (stats.totalCount === 0) {
        showToast("Choose at least one quest before ending the day.");
        return;
      }

      state.ended = true;
      upsertTodayHistoryEntry(stats);
      saveState();

      if (stats.rewardUnlocked) {
        showToast("The day is complete. Moonlit Fragment earned.");
      } else {
        showToast("The day has been saved. Small rituals still count.");
      }

      renderAll();
    }

    function resetToday() {
      const history = normalizeHistoryEntries(state.history);
      state = createDefaultState(history);
      saveState("Today has been reset.");
      renderAll();
    }

    let toastTimer = null;

    function showToast(message) {
      elements.toast.textContent = message;

      if (toastTimer) {
        window.clearTimeout(toastTimer);
      }

      toastTimer = window.setTimeout(() => {
        elements.toast.textContent = "";
      }, 3200);
    }

    elements.reflectionInput.addEventListener("input", (event) => {
      state.reflection = event.target.value;
      saveState();
      renderAll();
    });

    elements.addQuestButton.addEventListener("click", addCustomQuest);
    elements.customQuestInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addCustomQuest();
      }
    });

    elements.saveButton.addEventListener("click", saveDay);
    elements.endButton.addEventListener("click", endDay);
    elements.resetButton.addEventListener("click", resetToday);

    renderAll();
