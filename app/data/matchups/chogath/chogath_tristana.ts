// app/data/matchups/chogath/chogath_tristana.ts
import type { MatchupSummary } from "../_types";

export const chogath_tristana: MatchupSummary = {
  champs: ["chogath", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 트리스타나 W의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 트리스타나 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Tristana's W [[DASH]].",
        "W [[SILENCE]] cannot interrupt Tristana's W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
