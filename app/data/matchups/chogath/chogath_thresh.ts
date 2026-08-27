// app/data/matchups/chogath/chogath_thresh.ts
import type { MatchupSummary } from "../_types";

export const chogath_thresh: MatchupSummary = {
  champs: ["chogath", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Thresh's Q2 and W [[DASH]].",
        "W [[SILENCE]] cannot interrupt Thresh's Q2 and W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
