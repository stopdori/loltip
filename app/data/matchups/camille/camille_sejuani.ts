// app/data/matchups/camille/camille_sejuani.ts
import type { MatchupSummary } from "../_types";

export const camille_sejuani: MatchupSummary = {
  champs: ["camille", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 세주아니 Q의 [[AIRBORNE]] / E, R의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 세주아니 Q의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 세주아니 Q, W1, W2, E([[PROJECTILE]]), R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Sejuani's Q [[AIRBORNE]] / E and R [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Sejuani's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Sejuani's Q, W1, W2, E ([[PROJECTILE]]), and R."
      ],
    },
    sejuani: {
      ko: ["Q의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "E, R의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."
      ],
      en: ["Sejuani's Q [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Sejuani's E and R [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."
      ],
    },
  },
};
