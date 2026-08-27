// app/data/matchups/chogath/chogath_ornn.ts
import type { MatchupSummary } from "../_types";

export const chogath_ornn: MatchupSummary = {
  champs: ["chogath", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 오른 E, R2의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 오른 E, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Ornn's E and R2 [[DASH]].",
        "W [[SILENCE]] cannot interrupt Ornn's E and R2 [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
