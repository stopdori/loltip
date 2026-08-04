// app/data/matchups/ambessa/ambessa_kayn.ts
import type { MatchupSummary } from "../_types";

export const ambessa_kayn: MatchupSummary = {
  champs: ["ambessa", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 케인 Q의 [[DASH]], E(벽이동)의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 케인(다르킨) W의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Kayn's Q [[DASH]] and E (wall movement) [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Kayn (Darkin) W [[AIRBORNE]]."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
