// app/data/matchups/chogath/chogath_ekko.ts
import type { MatchupSummary } from "../_types";

export const chogath_ekko: MatchupSummary = {
  champs: ["chogath", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 에코 Q의 [[DASH]], [[BLINK]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 에코 Q의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Ekko's Q [[DASH]] and [[BLINK]].",
        "W [[SILENCE]] cannot interrupt Ekko's Q [[DASH]] and [[BLINK]]. \n However, the [[SILENCE]] still applies."],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
