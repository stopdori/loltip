// app/data/matchups/chogath/chogath_qiyana.ts
import type { MatchupSummary } from "../_types";

export const chogath_qiyana: MatchupSummary = {
  champs: ["chogath", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 키아나 W, E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 키아나 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Qiyana's W and E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Qiyana's W and E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
