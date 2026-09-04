// app/data/matchups/drmundo/drmundo_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const drmundo_fiddlesticks: MatchupSummary = {
  champs: ["drmundo", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 피들스틱 P, Q의 [[FEAR]]를 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]].",
        "P의 [[CC_IMMUNE]] 효과로 피들스틱 E의 [[SILENCE]] 효과를 무시할 수 없음."
      ],
      en: ["P's [[CC_IMMUNE]] effect can ignore Fiddlesticks's P and Q [[FEAR]] once.\nAt this time, P also [[DROP]]s a canister.",
        "P's [[CC_IMMUNE]] effect cannot ignore Fiddlesticks's E [[SILENCE]] effect."
      ],
    },
    fiddlesticks: {
      ko: [],
      en: [],
    },
  },
};
