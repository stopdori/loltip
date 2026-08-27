// app/data/matchups/chogath/chogath_irelia.ts
import type { MatchupSummary } from "../_types";

export const chogath_irelia: MatchupSummary = {
  champs: ["chogath", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Irelia's Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Irelia's Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    irelia: {
      ko: [],
      en: [],
    },
  },
};
