// app/data/matchups/chogath/chogath_elise.ts
import type { MatchupSummary } from "../_types";

export const chogath_elise: MatchupSummary = {
  champs: ["chogath", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Elise's Spider Form Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Elise's Spider Form Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    elise: {
      ko: [],
      en: [],
    },
  },
};
