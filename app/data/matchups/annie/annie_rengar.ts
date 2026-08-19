// app/data/matchups/annie/annie_rengar.ts
import type { MatchupSummary } from "../_types";

export const annie_rengar: MatchupSummary = {
  champs: ["annie", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 렝가 P, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", "R로 [[SUMMON]]된 티버로 렝가 E, [[EMPOWERED]] E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Rengar's P and R [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Rengar's E and [[EMPOWERED]] E [[SINGLE]] [[PROJECTILE]]."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
