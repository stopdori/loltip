// app/data/matchups/annie/annie_lucian.ts
import type { MatchupSummary } from "../_types";

export const annie_lucian: MatchupSummary = {
  champs: ["annie", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 루시안 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(티버)의 [[SUMMON]]으로 루시안 W, R의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, W의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Lucian's E [[DASH]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Lucian's W and R [[SINGLE]] [[PROJECTILE]]. \n However, W's additional [[AOE]] damage cannot be blocked."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
