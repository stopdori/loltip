// app/data/matchups/azir/azir_chogath.ts
import type { MatchupSummary } from "../_types";

export const azir_chogath: MatchupSummary = {
  champs: ["azir", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: [],
      en: [],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 아지르 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Azir's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Azir's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
