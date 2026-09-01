// app/data/matchups/camille/camille_malphite.ts
import type { MatchupSummary } from "../_types";

export const camille_malphite: MatchupSummary = {
  champs: ["camille", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 말파이트 R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 말파이트 Q, W(충격파), E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Malphite's R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Malphite's Q, W (shockwave), E, and R."
      ],
    },
    malphite: {
      ko: ["R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 카밀 E2 [[KNOCKBACK]], [[STUN]] / R의 [[SILENCE]], [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."
      ],
      en: ["Malphite's R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Camille's E2 [[KNOCKBACK]] and [[STUN]] / R [[SILENCE]] and [[KNOCKBACK]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."
      ],
    },
  },
};
