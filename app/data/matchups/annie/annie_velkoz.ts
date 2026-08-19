// app/data/matchups/annie/annie_velkoz.ts
import type { MatchupSummary } from "../_types";

export const annie_velkoz: MatchupSummary = {
  champs: ["annie", "velkoz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R로 [[SUMMON]]된 티버로 벨코즈 Q1, Q2의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q1의 추가 효과는 막을 수 없음."],
      en: ["P [[STUN]] can interrupt Vel'Koz's R [[SKILL_CHANNEL]].", "R [[SUMMON]]ed Tibbers can block Vel'Koz's Q1 and Q2 [[SINGLE]] [[PROJECTILE]]. \n However, Q1's additional effects cannot be blocked."],
    },
    velkoz: {
      ko: [],
      en: [],
    },
  },
};
