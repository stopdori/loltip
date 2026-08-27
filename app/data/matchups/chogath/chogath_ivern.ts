// app/data/matchups/chogath/chogath_ivern.ts
import type { MatchupSummary } from "../_types";

export const chogath_ivern: MatchupSummary = {
  champs: ["chogath", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 아이번 Q2의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 아이번 Q2의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Ivern's Q2 [[DASH]].",
        "W [[SILENCE]] cannot interrupt Ivern's Q2 [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
