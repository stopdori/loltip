// app/data/matchups/anivia/anivia_kalista.ts
import type { MatchupSummary } from "../_types";

export const anivia_kalista: MatchupSummary = {
  champs: ["anivia", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 칼리스타 P, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 칼리스타 P의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kalista's P or R2 [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Kalista's P [[DASH]]."],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
