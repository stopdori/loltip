// app/data/matchups/annie/annie_sylas.ts
import type { MatchupSummary } from "../_types";

export const annie_sylas: MatchupSummary = {
  champs: ["annie", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 사일러스 E2의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Sylas's W, E1, and E2 [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Sylas's E2 [[SINGLE]] [[PROJECTILE]]."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
