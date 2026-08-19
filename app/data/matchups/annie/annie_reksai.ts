// app/data/matchups/annie/annie_reksai.ts
import type { MatchupSummary } from "../_types";

export const annie_reksai: MatchupSummary = {
  champs: ["annie", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
         "R로 [[SUMMON]]된 티버로 렉사이 매복폼 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Rek'Sai's Burrowed Form E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Rek'Sai's Burrowed Form Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional [[AOE]] damage cannot be blocked."],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
