// app/data/matchups/chogath/chogath_leona.ts
import type { MatchupSummary } from "../_types";

export const chogath_leona: MatchupSummary = {
  champs: ["chogath", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 레오나 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 레오나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Leona's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Leona's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
