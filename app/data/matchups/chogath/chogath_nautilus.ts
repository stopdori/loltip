// app/data/matchups/chogath/chogath_nautilus.ts
import type { MatchupSummary } from "../_types";

export const chogath_nautilus: MatchupSummary = {
  champs: ["chogath", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Nautilus's Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Nautilus's Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
