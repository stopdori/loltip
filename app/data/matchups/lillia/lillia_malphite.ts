// app/data/matchups/lillia/lillia_malphite.ts
import type { MatchupSummary } from "../_types";

export const lillia_malphite: MatchupSummary = {
  champs: ["lillia", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lillia: {
      ko: [""],
      en: [""],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 릴리아 R의 [[SLEEP]]을 무시할 수 있음. \n 단, [[DROWSY]]에서 [[SLEEP]]으로 넘어갈 때 [[UNSTOPPABLE]] 상태에 있어야 무시할 수 있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Lillia's R [[SLEEP]]. \n However, [[UNSTOPPABLE]] must be active at the moment [[DROWSY]] transitions into [[SLEEP]] in order to ignore it."],
    },
  },
};
