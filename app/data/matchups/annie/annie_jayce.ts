// app/data/matchups/annie/annie_jayce.ts
import type { MatchupSummary } from "../_types";

export const annie_jayce: MatchupSummary = {
  champs: ["annie", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 제이스 Q, [[EMPOWERED]] Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Jayce's Hammer Form Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Jayce's Q and [[EMPOWERED]] Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional [[AOE]] damage cannot be blocked."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
