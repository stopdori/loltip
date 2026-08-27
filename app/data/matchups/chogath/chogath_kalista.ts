// app/data/matchups/chogath/chogath_kalista.ts
import type { MatchupSummary } from "../_types";

export const chogath_kalista: MatchupSummary = {
  champs: ["chogath", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 칼리스타 P의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 칼리스타 P의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Kalista's P [[DASH]].",
        "W [[SILENCE]] cannot interrupt Kalista's P [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
