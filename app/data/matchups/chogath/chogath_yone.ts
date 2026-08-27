// app/data/matchups/chogath/chogath_yone.ts
import type { MatchupSummary } from "../_types";

export const chogath_yone: MatchupSummary = {
  champs: ["chogath", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 요네 Q3, E1의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 요네 Q3, E1의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Yone's Q3 and E1 [[DASH]].",
        "W [[SILENCE]] cannot interrupt Yone's Q3 and E1 [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
