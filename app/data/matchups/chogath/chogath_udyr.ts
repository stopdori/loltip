// app/data/matchups/chogath/chogath_udyr.ts
import type { MatchupSummary } from "../_types";

export const chogath_udyr: MatchupSummary = {
  champs: ["chogath", "udyr"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 우디르 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 우디르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Udyr's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Udyr's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    udyr: {
      ko: [],
      en: [],
    },
  },
};
