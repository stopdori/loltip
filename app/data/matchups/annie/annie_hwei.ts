// app/data/matchups/annie/annie_hwei.ts
import type { MatchupSummary } from "../_types";

export const annie_hwei: MatchupSummary = {
  champs: ["annie", "hwei"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["R로 [[SUMMON]]된 티버로 흐웨이 QQ, EQ, EW의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, 흐웨이 QQ의 폭발 [[AOE]] 피해는 막을 수 없음."],
      en: ["R [[SUMMON]]ed Tibbers can block Hwei's QQ, EQ, and EW [[SINGLE]] [[PROJECTILE]]. \n However, Hwei's QQ explosion [[AOE]] damage cannot be blocked."],
    },
    hwei: {
      ko: ["EE의 [[GRAB]]으로 애니 R로 [[SUMMON]]된 티버를 [[GRAB]] 할 수 있음."],
      en: ["Hwei's EE [[GRAB]] can grab Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
