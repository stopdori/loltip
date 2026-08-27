// app/data/matchups/chogath/chogath_riven.ts
import type { MatchupSummary } from "../_types";

export const chogath_riven: MatchupSummary = {
  champs: ["chogath", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Riven's Q and E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Riven's Q and E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
