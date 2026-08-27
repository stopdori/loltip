// app/data/matchups/chogath/chogath_vayne.ts
import type { MatchupSummary } from "../_types";

export const chogath_vayne: MatchupSummary = {
  champs: ["chogath", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 베인 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 베인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Vayne's Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Vayne's Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
