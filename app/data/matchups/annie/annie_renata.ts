// app/data/matchups/annie/annie_renata.ts
import type { MatchupSummary } from "../_types";

export const annie_renata: MatchupSummary = {
  champs: ["annie", "renata"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["R로 [[SUMMON]]된 티버로 레나타 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, 레나타가 Q2를 사용할 수 있음."],
      en: ["R [[SUMMON]]ed Tibbers can block Renata's Q [[SINGLE]] [[PROJECTILE]]. \n However, Renata can still use Q2."],
    },
    renata: {
      ko: ["Q2의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Renata's Q2 [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
