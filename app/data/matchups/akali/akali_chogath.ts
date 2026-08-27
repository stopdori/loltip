// app/data/matchups/akali/akali_chogath.ts
import type { MatchupSummary } from "../_types";

export const akali_chogath: MatchupSummary = {
  champs: ["akali", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [],
      en: [],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음.",
        "W의 [[SILENCE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]].",
        "W [[SILENCE]] cannot interrupt Akali's E1, E2, R1, and R2 [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
