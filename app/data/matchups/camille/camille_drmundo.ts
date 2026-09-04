// app/data/matchups/camille/camille_drmundo.ts
import type { MatchupSummary } from "../_types";

export const camille_drmundo: MatchupSummary = {
  champs: ["camille", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["R의 [[UNTARGETABLE]]로 문도 박사 Q, W, E(미니언 넉백)를 피할 수 있음."],
      en: ["Camille's R [[UNTARGETABLE]] can dodge Dr. Mundo's Q, W, and E (minion knockback)."],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 카밀 E2, R의 [[KNOCKBACK]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]. \n 단, 카밀 E2의 [[KNOCKBACK]] 이후 추가로 발생해야 하는 [[STUN]]은 [[KNOCKBACK]]이 걸리지 않아 발생하지 않음.",
        "P의 [[CC_IMMUNE]] 효과로 카밀 R의 [[SILENCE]] 효과를 무시할 수 없음."
      ],
      en: ["P's [[CC_IMMUNE]] effect can ignore Camille's E2 and R [[KNOCKBACK]] once.\nAt this time, P also [[DROP]]s a canister.\nHowever, since the [[KNOCKBACK]] does not apply, the [[STUN]] that would normally follow Camille's E2 [[KNOCKBACK]] does not occur.",
        "P's [[CC_IMMUNE]] effect cannot ignore Camille's R [[SILENCE]] effect."
      ],
    },
  },
};
