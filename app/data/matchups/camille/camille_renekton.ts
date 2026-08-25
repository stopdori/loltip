// app/data/matchups/camille/camille_renekton.ts
import type { MatchupSummary } from "../_types";

export const camille_renekton: MatchupSummary = {
  champs: ["camille", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 레넥톤 W의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 레넥톤 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 레넥톤 Q, E, R(범위 피해)을 피할 수 있음. \n 단, 레넥톤 W를 카밀에게 사용했을 때 모션은 발동하지만 적용되지 않음. [[CLIP:https://www.youtube.com/shorts/s-CYtXpSW_g]] \n 레넥톤이 다른 대상에게 W를 사용할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Renekton's W [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Renekton's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Renekton's Q, E, and R (AoE damage). \n However, if Renekton uses W on Camille, the animation plays but it does not apply. [[CLIP:https://www.youtube.com/shorts/s-CYtXpSW_g]] \n Renekton can use W on another target instead."
      ],
    },
    renekton: {
      ko: ["W의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Renekton's W [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
