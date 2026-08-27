// app/data/matchups/chogath/chogath_kindred.ts
import type { MatchupSummary } from "../_types";

export const chogath_kindred: MatchupSummary = {
  champs: ["chogath", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Kindred's Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Kindred's Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
