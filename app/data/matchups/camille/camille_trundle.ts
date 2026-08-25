// app/data/matchups/camille/camille_trundle.ts
import type { MatchupSummary } from "../_types";

export const camille_trundle: MatchupSummary = {
  champs: ["camille", "trundle"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 트런들 E([[TERRAIN]])의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 트런들 Q, E를 피할 수 있음. \n \n 단, 트런들 R을 카밀에게 사용했을 때 취소될 수 있음. [[COOLDOWN]] 소모 없음.", 
        "R의 [[UNTARGETABLE]]로 트런들 R의 지속피해를 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Trundle's E ([[TERRAIN]]) [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Trundle's Q and E. \n \n However, it can be canceled if Trundle uses R on Camille. No [[COOLDOWN]] is consumed.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Trundle's R damage-over-time."
      ],
    },
    trundle: {
      ko: ["트런들 E([[TERRAIN]])의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Trundle's E ([[TERRAIN]]) [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
