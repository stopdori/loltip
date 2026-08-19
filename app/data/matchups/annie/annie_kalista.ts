// app/data/matchups/annie/annie_kalista.ts
import type { MatchupSummary } from "../_types";

export const annie_kalista: MatchupSummary = {
  champs: ["annie", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 칼리스타 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 칼리스타 Q의 [[SINGLE]] [[ST_CONDITIONAL]] [[PIERCE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Kalista's P [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Kalista's Q [[SINGLE]] [[ST_CONDITIONAL]] [[PIERCE]] [[PROJECTILE]]."],
    },
    kalista: {
      ko: ["R2의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음."],
      en: ["Kalista's R2 [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne."],
    },
  },
};
