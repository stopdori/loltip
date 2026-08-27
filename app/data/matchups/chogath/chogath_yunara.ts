// app/data/matchups/chogath/chogath_yunara.ts
import type { MatchupSummary } from "../_types";

export const chogath_yunara: MatchupSummary = {
  champs: ["chogath", "yunara"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 유나라 RE의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 유나라 RE의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Yunara's RE [[DASH]].",
        "W [[SILENCE]] cannot interrupt Yunara's RE [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
