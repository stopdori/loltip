// app/data/matchups/chogath/chogath_rengar.ts
import type { MatchupSummary } from "../_types";

export const chogath_rengar: MatchupSummary = {
  champs: ["chogath", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 렝가 P, R의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 렝가 P, R의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Rengar's P and R [[DASH]].",
        "W [[SILENCE]] cannot interrupt Rengar's P and R [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
