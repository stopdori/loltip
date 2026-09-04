// app/data/matchups/drmundo/drmundo_quinn.ts
import type { MatchupSummary } from "../_types";

export const drmundo_quinn: MatchupSummary = {
  champs: ["drmundo", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 퀸 E의 [[KNOCKBACK]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]].",
        "P의 [[CC_IMMUNE]] 효과로 퀸 Q의 [[NEAR_SIGHT]] 효과를 무시할 수 없음."
      ],
      en: ["P's [[CC_IMMUNE]] effect can ignore Quinn's E [[KNOCKBACK]] once.\nAt this time, P also [[DROP]]s a canister.",
        "P's [[CC_IMMUNE]] effect cannot ignore Quinn's Q [[NEAR_SIGHT]] effect."
      ],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
