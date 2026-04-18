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
      ko: ["애니 P의 [[STUN]]로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "애니 R(티버)의 [[SUMMON]]으로 탐켄치 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Annie's P [[STUN]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]].", "Annie's R(Tibbers) [[SUMMON]] can block Tahm Kench's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
};
