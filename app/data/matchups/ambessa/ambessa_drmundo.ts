// app/data/matchups/ambessa/ambessa_drmundo.ts
import type { MatchupSummary } from "../_types";

export const ambessa_drmundo: MatchupSummary = {
  champs: ["ambessa", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: [],
      en: [],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 암베사 R의 [[SUPPRESS]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]. \n 단, 암베사는 문도를 R로 [[SUPPRESS]]한 것처럼 [[BLINK]]."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Ambessa's R [[SUPPRESS]] once.\nAt this time, P also [[DROP]]s a canister.\nHowever, Ambessa still [[BLINK]]s as if she had [[SUPPRESS]]ed Dr. Mundo with R."],
    },
  },
};
