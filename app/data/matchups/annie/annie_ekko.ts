// app/data/matchups/annie/annie_ekko.ts
import type { MatchupSummary } from "../_types";

export const annie_ekko: MatchupSummary = {
  champs: ["annie", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 에코 E의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 에코 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, 에코 Q의 추가 [[PIERCE]] 피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Ekko's E [[DASH]] or [[BLINK]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Ekko's Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional [[PIERCE]] damage cannot be blocked."],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
