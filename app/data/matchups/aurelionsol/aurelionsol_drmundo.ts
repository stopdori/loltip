// app/data/matchups/aurelionsol/aurelionsol_drmundo.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_drmundo: MatchupSummary = {
  champs: ["aurelionsol", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: [],
      en: [],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 아우렐리온 솔 R의 [[STUN]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]].",
        "P의 [[CC_IMMUNE]] 효과로 아우렐리온 솔 E의 [[KINEMATICS]] 효과를 무시할 수 없음."
      ],
      en: ["P's [[CC_IMMUNE]] effect can ignore Aurelion Sol's R [[STUN]] once.\nAt this time, P also [[DROP]]s a canister.",
        "P's [[CC_IMMUNE]] effect cannot ignore Aurelion Sol's E [[KINEMATICS]] effect."
      ],
    },
  },
};
