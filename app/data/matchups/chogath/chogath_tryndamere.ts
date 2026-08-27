// app/data/matchups/chogath/chogath_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const chogath_tryndamere: MatchupSummary = {
  champs: ["chogath", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 트린다미어 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 트린다미어 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Tryndamere's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Tryndamere's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
