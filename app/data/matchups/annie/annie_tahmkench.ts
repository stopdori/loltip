// app/data/matchups/annie/annie_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const annie_tahmkench: MatchupSummary = {
  champs: ["annie", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R로 [[SUMMON]]된 티버로 탐켄치 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]].", "R [[SUMMON]]ed Tibbers can block Tahm Kench's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    tahmkench: {
      ko: ["R (집어삼키기)의 [[SUPPRESS]]으로 애니 R로 [[SUMMON]]된 티버를 삼킬 수 없음."],
      en: ["Tahm Kench's R (Devour) [[SUPPRESS]] cannot swallow Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
