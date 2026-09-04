// app/data/matchups/chogath/chogath_drmundo.ts
import type { MatchupSummary } from "../_types";

export const chogath_drmundo: MatchupSummary = {
  champs: ["chogath", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: [],
      en: [],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 초가스 Q의 [[AIRBORNE]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]].",
        "P의 [[CC_IMMUNE]] 효과로 초가스 W의 [[SILENCE]] 효과를 무시할 수 없음."
      ],
      en: ["P's [[CC_IMMUNE]] effect can ignore Cho'Gath's Q [[AIRBORNE]] once.\nAt this time, P also [[DROP]]s a canister.",
        "P's [[CC_IMMUNE]] effect cannot ignore Cho'Gath's W [[SILENCE]] effect."
      ],
    },
  },
};
