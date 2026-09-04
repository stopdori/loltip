// app/data/matchups/bard/bard_drmundo.ts
import type { MatchupSummary } from "../_types";

export const bard_drmundo: MatchupSummary = {
  champs: ["bard", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 바드 Q의 [[STUN]], R(존야)의 [[STASIS]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Bard's Q [[STUN]] and R (Zhonya) [[STASIS]] once.\nAt this time, P also [[DROP]]s a canister."],
    },
  },
};
