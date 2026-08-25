// app/data/matchups/camille/camille_ornn.ts
import type { MatchupSummary } from "../_types";

export const camille_ornn: MatchupSummary = {
  champs: ["camille", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 오른 Q([[TERRAIN]])의 [[AIRBORNE]] / P, E, R2의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 오른 E, R2의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 오른 Q, W, E, R1, R2을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Ornn's Q ([[TERRAIN]]) [[AIRBORNE]] / P, E, and R2 [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Ornn's E and R2 [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Ornn's Q, W, E, R1, and R2."
      ],
    },
    ornn: {
      ko: ["Q([[TERRAIN]])의 [[AIRBORNE]] / P, E, R2의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Ornn's Q ([[TERRAIN]]) [[AIRBORNE]] / P, E, and R2 [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
