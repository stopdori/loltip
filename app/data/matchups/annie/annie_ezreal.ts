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
        "R(티버)의 [[SUMMON]]으로 이즈리얼 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Ezreal's E [[BLINK]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Ezreal's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    ezreal: {
      ko: [],
      en: [],
    },
  },
};
