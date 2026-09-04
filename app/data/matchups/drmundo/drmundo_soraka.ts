// app/data/matchups/drmundo/drmundo_soraka.ts
import type { MatchupSummary } from "../_types";

export const drmundo_soraka: MatchupSummary = {
  champs: ["drmundo", "soraka"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 소라카 E의 [[ROOT]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]].",
        "P의 [[CC_IMMUNE]] 효과로 소라카 E의 [[SILENCE]]을 무시할 수 없음."
      ],
      en: ["P's [[CC_IMMUNE]] effect can ignore Soraka's E [[ROOT]] once.\nAt this time, P also [[DROP]]s a canister.",
        "P's [[CC_IMMUNE]] effect cannot ignore Soraka's E [[SILENCE]]."
      ],
    },
    soraka: {
      ko: [],
      en: [],
    },
  },
};
