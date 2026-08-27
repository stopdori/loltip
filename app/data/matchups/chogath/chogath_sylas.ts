// app/data/matchups/chogath/chogath_sylas.ts
import type { MatchupSummary } from "../_types";

export const chogath_sylas: MatchupSummary = {
  champs: ["chogath", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Sylas's W, E1, and E2 [[DASH]].",
        "W [[SILENCE]] cannot interrupt Sylas's W, E1, and E2 [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
