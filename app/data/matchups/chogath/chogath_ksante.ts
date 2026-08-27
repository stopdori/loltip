// app/data/matchups/chogath/chogath_ksante.ts
import type { MatchupSummary } from "../_types";

export const chogath_ksante: MatchupSummary = {
  champs: ["chogath", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 크산테 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 크산테 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt K'Sante's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt K'Sante's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
