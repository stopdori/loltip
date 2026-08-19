// app/data/matchups/annie/annie_evelynn.ts
import type { MatchupSummary } from "../_types";

export const annie_evelynn: MatchupSummary = {
  champs: ["annie", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 이블린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "R로 [[SUMMON]]된 티버로 이블린 Q1의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."
      ],
      en: ["P [[STUN]] cannot interrupt Evelynn's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Evelynn's Q1 [[SINGLE]] [[PROJECTILE]]."],
    },
    evelynn: {
      ko: [],
      en: [],
    },
  },
};
