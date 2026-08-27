// app/data/matchups/chogath/chogath_renekton.ts
import type { MatchupSummary } from "../_types";

export const chogath_renekton: MatchupSummary = {
  champs: ["chogath", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 레넥톤 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 레넥톤 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Renekton's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Renekton's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
