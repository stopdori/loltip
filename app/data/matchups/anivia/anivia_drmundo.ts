// app/data/matchups/anivia/anivia_drmundo.ts
import type { MatchupSummary } from "../_types";

export const anivia_drmundo: MatchupSummary = {
  champs: ["anivia", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Anivia's Q [[STUN]] and W([[TERRAIN]]) [[AIRBORNE]] once.\nAt this time, P also [[DROP]]s a canister."],
    },
  },
};
