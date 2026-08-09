// app/data/matchups/akali/akali_anivia.ts
import type { MatchupSummary } from "../_types";

export const akali_anivia: MatchupSummary = {
  champs: ["akali", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [],
      en: [],
    },
    anivia: {
      ko: ["Q의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음.(이론상)"],
      en: ["Q [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]]. (theoretically)"],
    },
  },
};
