// app/data/matchups/chogath/chogath_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const chogath_jarvaniv: MatchupSummary = {
  champs: ["chogath", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 자르반 EQ의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 자르반 EQ의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Jarvan IV's EQ [[DASH]].",
        "W [[SILENCE]] cannot interrupt Jarvan IV's EQ [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    jarvaniv: {
      ko: [],
      en: [],
    },
  },
};
