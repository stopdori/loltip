// app/data/matchups/annie/annie_nidalee.ts
import type { MatchupSummary } from "../_types";

export const annie_nidalee: MatchupSummary = {
  champs: ["annie", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 니달리 인간폼 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Nidalee's Cougar Form W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Nidalee's Human Form Q [[SINGLE]] [[PROJECTILE]]."],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
