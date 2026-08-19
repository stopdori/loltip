// app/data/matchups/annie/annie_ivern.ts
import type { MatchupSummary } from "../_types";

export const annie_ivern: MatchupSummary = {
  champs: ["annie", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 아이번 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 아이번 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Ivern's Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Ivern's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
