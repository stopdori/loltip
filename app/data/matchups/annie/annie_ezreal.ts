// app/data/matchups/annie/annie_ezreal.ts
import type { MatchupSummary } from "../_types";

export const annie_ezreal: MatchupSummary = {
  champs: ["annie", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 이즈리얼 E의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 이즈리얼 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Ezreal's E [[BLINK]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Ezreal's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    ezreal: {
      ko: ["E의 [[CC_BUFFER]]로 애니 P의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
