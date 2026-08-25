// app/data/matchups/camille/camille_volibear.ts
import type { MatchupSummary } from "../_types";

export const camille_volibear: MatchupSummary = {
  champs: ["camille", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 볼리베어 Q의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 볼리베어 Q의 [[TRANSFORM]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 볼리베어 Q의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 볼리베어 평타, Q(평타), W, E, R을 피할 수 있음. \n 단, 볼리베어 Q(평타)를 카밀에게 사용했을 때 모션은 발동하지만 적용되지 않음. [[COOLDOWN]] 소모. \n 단, 볼리베어 W를 카밀에게 사용했을 때 취소될 수 있음. [[COOLDOWN]] 소모 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Volibear's Q [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Volibear's Q [[TRANSFORM]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Volibear's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Volibear's auto-attacks, Q (auto-attack), W, E, and R. \n However, if Volibear uses Q (auto-attack) on Camille, the animation plays but it does not apply. [[COOLDOWN]] is still consumed. \n However, it can be canceled if Volibear uses W on Camille. No [[COOLDOWN]] is consumed."
      ],
    },
    volibear: {
      ko: ["Q의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Volibear's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
