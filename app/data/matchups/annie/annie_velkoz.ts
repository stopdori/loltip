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
        "R(티버)의 [[SUMMON]]으로 벨코즈 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 효과는 막을 수 없음."],
      en: ["P [[STUN]] can interrupt Vel'Koz's R [[SKILL_CHANNEL]].", "R(Tibbers) [[SUMMON]] can block Vel'Koz's Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional effects cannot be blocked."],
    },
    velkoz: {
      ko: [],
      en: [],
    },
  },
};
