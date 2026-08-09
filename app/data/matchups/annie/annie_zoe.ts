// app/data/matchups/annie/annie_zoe.ts
import type { MatchupSummary } from "../_types";

export const annie_zoe: MatchupSummary = {
  champs: ["annie", "zoe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 조이 R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(티버)의 [[SUMMON]]으로 조이 Q, E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Zoe's R [[BLINK]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Zoe's Q and E [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional [[AOE]] damage cannot be blocked."],
    },
    zoe: {
      ko: [],
      en: [],
    },
  },
};
