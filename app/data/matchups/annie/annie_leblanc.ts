// app/data/matchups/annie/annie_leblanc.ts
import type { MatchupSummary } from "../_types";

export const annie_leblanc: MatchupSummary = {
  champs: ["annie", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 르블랑 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 르블랑 E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt LeBlanc's W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block LeBlanc's E [[SINGLE]] [[PROJECTILE]]."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
