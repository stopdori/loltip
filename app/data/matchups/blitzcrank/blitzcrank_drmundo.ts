// app/data/matchups/blitzcrank/blitzcrank_drmundo.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_drmundo: MatchupSummary = {
  champs: ["blitzcrank", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: [],
      en: [],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 블리츠 크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]].",
        "P의 [[CC_IMMUNE]] 효과로 블리츠 크랭크 R의 [[SILENCE]] 효과를 무시할 수 없음."
      ],
      en: ["P's [[CC_IMMUNE]] effect can ignore Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] once.\nAt this time, P also [[DROP]]s a canister.",
        "P's [[CC_IMMUNE]] effect cannot ignore Blitzcrank's R [[SILENCE]] effect."
      ],
    },
  },
};
