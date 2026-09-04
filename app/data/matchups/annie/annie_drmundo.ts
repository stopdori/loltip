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
      ko: ["R로 [[SUMMON]]된 티버로 문도 박사 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["R [[SUMMON]]ed Tibbers can block Dr. Mundo's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 애니 P의 [[STUN]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Annie's P [[STUN]] once.\nAt this time, P also [[DROP]]s a canister."],
    },
  },
};
