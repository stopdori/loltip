// app/data/matchups/annie/annie_zeri.ts
import type { MatchupSummary } from "../_types";

export const annie_zeri: MatchupSummary = {
  champs: ["annie", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 제리 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(티버)의 [[SUMMON]]으로 제리 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, [[EMPOWERED]] Q의 [[PIERCE]]피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Zeri's E [[DASH]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Zeri's Q [[SINGLE]] [[PROJECTILE]]. \n However, [[EMPOWERED]] Q's [[PIERCE]] damage cannot be blocked."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
