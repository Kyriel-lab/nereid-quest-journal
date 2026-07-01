const STORAGE_KEY = "nereidQuestJournal_v01";

    const DEFAULT_QUESTS = [
      {
        id: "korean-study",
        title: "Korean Study — 30 minutes",
        type: "Study Quest",
        rewardType: "bond",
        rewardValue: 10,
        custom: false
      },
      {
        id: "piano-practice",
        title: "Piano Practice — 20 minutes",
        type: "Skill Quest",
        rewardType: "exp",
        rewardValue: 8,
        custom: false
      },
      {
        id: "skincare-routine",
        title: "Skincare Routine",
        type: "Care Quest",
        rewardType: "bond",
        rewardValue: 5,
        custom: false
      },
      {
        id: "clean-desk",
        title: "Clean Desk",
        type: "Home Quest",
        rewardType: "exp",
        rewardValue: 5,
        custom: false
      }
    ];

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
      "Skill Quest": { rewardType: "exp", rewardValue: 8 },
      "Care Quest": { rewardType: "bond", rewardValue: 5 },
      "Home Quest": { rewardType: "exp", rewardValue: 5 }
    };


    const QUEST_LIBRARY = [
      {
        id: "lib-korean-study",
        title: "Korean Study — 30 minutes",
        type: "Study Quest"
      },
      {
        id: "lib-logistics-review",
        title: "Logistics Review",
        type: "Study Quest"
      },
      {
        id: "lib-read-10-pages",
        title: "Read 10 pages",
        type: "Study Quest"
      },
      {
        id: "lib-piano-practice",
        title: "Piano Practice — 20 minutes",
        type: "Skill Quest"
      },
      {
        id: "lib-drawing-practice",
        title: "Drawing Practice",
        type: "Skill Quest"
      },
      {
        id: "lib-skincare-routine",
        title: "Skincare Routine",
        type: "Care Quest"
      },
      {
        id: "lib-drink-water",
        title: "Drink Water",
        type: "Care Quest"
      },
      {
        id: "lib-stretching",
        title: "Stretching",
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
      }
    ];

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
      historyList: document.getElementById("historyList")
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

    function createDefaultState(history = []) {
      return {
        date: getTodayKey(),
        completedQuestIds: [],
        customQuests: [],
        history: normalizeHistoryEntries(history),
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

        if (parsed.date !== getTodayKey()) {
          return createDefaultState(history);
        }

        const base = createDefaultState(history);
        const customQuests = normalizeCustomQuests(parsed.customQuests);
        const validQuestIds = new Set([...DEFAULT_QUESTS, ...customQuests].map((quest) => quest.id));

        return {
          ...base,
          ...parsed,
          history,
          customQuests,
          completedQuestIds: Array.isArray(parsed.completedQuestIds)
            ? parsed.completedQuestIds.filter((id) => validQuestIds.has(id))
            : []
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

        const rewardLabel = quest.rewardType === "bond"
          ? `+${quest.rewardValue} Bond`
          : `+${quest.rewardValue} EXP`;

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

    function renderCompanion(stats) {
      elements.moodBadge.textContent = stats.mood;
      elements.companionMood.textContent = stats.mood;
      elements.bondValue.textContent = stats.bond;
      elements.expValue.textContent = stats.exp;
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
      const shouldShowEntry = state.ended === true;
      elements.dailyEntryCard.hidden = !shouldShowEntry;

      if (!shouldShowEntry) {
        return;
      }

      elements.entryDateStamp.textContent = getReadableDate();
      elements.entryQuestSummary.textContent = `${stats.completedCount} / ${stats.totalCount}`;
      elements.entryBondSummary.textContent = `+${stats.bond}`;
      elements.entryExpSummary.textContent = `+${stats.exp}`;
      elements.entryRewardSummary.textContent = stats.rewardUnlocked ? "Unlocked" : "Locked";
      elements.entryRewardChip.classList.toggle("reward-unlocked", stats.rewardUnlocked);

      if (stats.rewardUnlocked) {
        elements.entryStatusTitle.textContent = "The day is complete.";
        elements.entryStatusCopy.textContent = "Moonlit Fragment unlocked.";
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
        progress: stats.progress,
        bond: stats.bond,
        exp: stats.exp,
        rewardUnlocked: stats.rewardUnlocked,
        reflection: (state.reflection || "").trim(),
        endedAt: new Date().toISOString()
      };
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
            <span>+${entry.exp} EXP</span>
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

    function renderAll() {
      const stats = calculateStats();
      renderHeader();
      renderQuests(stats);
      renderQuestLibrary();
      renderProgress(stats);
      renderCompanion(stats);
      renderReward(stats);
      renderDailyEntry(stats);
      renderHistory();
      renderReflection();
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
      state.ended = true;
      upsertTodayHistoryEntry(stats);
      saveState();

      if (stats.rewardUnlocked) {
        showToast("The day is complete. Moonlit Fragment unlocked.");
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
