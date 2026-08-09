// app/data/matchups/annie/annie_leesin.ts
import type { MatchupSummary } from "../_types";

export const annie_leesin: MatchupSummary = {
  champs: ["annie", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 리신 Q2, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(티버)의 [[SUMMON]]으로 리신 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Lee Sin's Q2 and W [[DASH]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Lee Sin's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
