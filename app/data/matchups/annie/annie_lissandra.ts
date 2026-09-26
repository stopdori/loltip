// app/data/matchups/annie/annie_lissandra.ts
import type { MatchupSummary } from "../_types";

export const annie_lissandra: MatchupSummary = {
  champs: ["annie", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["R로 [[SUMMON]]된 티버로 리산드라 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["R [[SUMMON]]ed Tibbers can block Lissandra's Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional [[AOE]] damage cannot be blocked."],
    },
    lissandra: {
      ko: ["애니 P의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
