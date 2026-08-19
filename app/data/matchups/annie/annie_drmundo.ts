// app/data/matchups/annie/annie_drmundo.ts
import type { MatchupSummary } from "../_types";

export const annie_drmundo: MatchupSummary = {
  champs: ["annie", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["R로 [[SUMMON]]된 티버로 문도박사 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["R(Tibbers) [[SUMMON]] can block Dr. Mundo's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]]으로 애니 P의 [[STUN]]을 무시할 수 있음.",],
      en: ["Dr. Mundo's P [[CC_IMMUNE]] can ignore Annie's P [[STUN]]."],
    },
  },
};
