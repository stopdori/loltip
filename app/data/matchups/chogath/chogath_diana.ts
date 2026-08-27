// app/data/matchups/chogath/chogath_diana.ts
import type { MatchupSummary } from "../_types";

export const chogath_diana: MatchupSummary = {
  champs: ["chogath", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Diana's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Diana's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    diana: {
      ko: [],
      en: [],
    },
  },
};
