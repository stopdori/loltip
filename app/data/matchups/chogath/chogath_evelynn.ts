// app/data/matchups/chogath/chogath_evelynn.ts
import type { MatchupSummary } from "../_types";

export const chogath_evelynn: MatchupSummary = {
  champs: ["chogath", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Evelynn's [[EMPOWERED]] E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    evelynn: {
      ko: [],
      en: [],
    },
  },
};
