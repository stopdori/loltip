// app/data/matchups/chogath/chogath_leesin.ts
import type { MatchupSummary } from "../_types";

export const chogath_leesin: MatchupSummary = {
  champs: ["chogath", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 리 신 Q2, W1의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 리 신 Q2, W1의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Lee Sin's Q2 and W1 [[DASH]].",
        "W [[SILENCE]] cannot interrupt Lee Sin's Q2 and W1 [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
