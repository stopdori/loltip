// app/data/matchups/chogath/chogath_kaisa.ts
import type { MatchupSummary } from "../_types";

export const chogath_kaisa: MatchupSummary = {
  champs: ["chogath", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 카이사 R의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 카이사 R의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Kai'Sa's R [[DASH]].",
        "W [[SILENCE]] cannot interrupt Kai'Sa's R [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    kaisa: {
      ko: [],
      en: [],
    },
  },
};
