// app/data/matchups/chogath/chogath_ziggs.ts
import type { MatchupSummary } from "../_types";

export const chogath_ziggs: MatchupSummary = {
  champs: ["chogath", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 직스 W의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 직스 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Ziggs's W [[DASH]].",
        "W [[SILENCE]] cannot interrupt Ziggs's W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    ziggs: {
      ko: [],
      en: [],
    },
  },
};
