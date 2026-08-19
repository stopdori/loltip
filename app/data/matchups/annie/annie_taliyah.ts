// app/data/matchups/annie/annie_taliyah.ts
import type { MatchupSummary } from "../_types";

export const annie_taliyah: MatchupSummary = {
  champs: ["annie", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["R로 [[SUMMON]]된 티버로 탈리야 Q, [[EMPOWERED]] Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 폭발 [[AOE]] 피해, [[EMPOWERED]] Q의 폭발 [[AOE]]피해는 막을 수 없음."],
      en: ["R [[SUMMON]]ed Tibbers can block Taliyah's Q and [[EMPOWERED]] Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's explosion [[AOE]] damage and [[EMPOWERED]] Q's explosion [[AOE]] damage cannot be blocked."],
    },
    taliyah: {
      ko: ["W, R의 [[KNOCKBACK]], 으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Taliyah's W and R [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
