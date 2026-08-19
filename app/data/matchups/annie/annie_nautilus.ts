// app/data/matchups/annie/annie_nautilus.ts
import type { MatchupSummary } from "../_types";

export const annie_nautilus: MatchupSummary = {
  champs: ["annie", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["R로 [[SUMMON]]된 티버로 노틸러스 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["R [[SUMMON]]ed Tibbers can block Nautilus's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    nautilus: {
      ko: ["Q의 [[GRAB]], R의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[GRAB]], [[AIRBORNE]] 할 수 있음."],
      en: ["Nautilus's Q [[GRAB]] and R [[AIRBORNE]] can grab Annie's R [[SUMMON]]ed Tibbers or send it airborne."],
    },
  },
};
