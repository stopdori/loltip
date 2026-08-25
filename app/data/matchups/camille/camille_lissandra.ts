// app/data/matchups/camille/camille_lissandra.ts
import type { MatchupSummary } from "../_types";

export const camille_lissandra: MatchupSummary = {
  champs: ["camille", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 리산드라 W의 [[ROOT]], R의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]], [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 리산드라 평타, Q, W, E, R(카밀이 아닌 대상 사용한 범위 피해)을 피할 수 있음. \n 단, 리산드라 R을 카밀에게 사용했을 때 취소될 수 있음. [[COOLDOWN]] 소모 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Lissandra's W [[ROOT]] and R [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] or [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Lissandra's auto-attacks, Q, W, E, and R (the AoE damage when used on a target other than Camille). \n However, it can be canceled if Lissandra uses R on Camille. No [[COOLDOWN]] is consumed."
      ],
    },
    lissandra: {
      ko: ["[[TIP]] 리산드라 R은 [[STUN]]인데, [[STUN]]은 일반적으로 [[DASH]]류를 끊을 수 없음. \n 하지만 리산드라 R은 특이하게도 [[DASH]]류를 끊을 수 있음. \n 따라서, W의 [[ROOT]], R의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음. [[CLIP:https://www.youtube.com/shorts/BaIgsc8Wa3w]]"],
      en: ["[[TIP]] Lissandra's R is a [[STUN]], and [[STUN]] normally cannot interrupt [[DASH]]-type skills. \n However, Lissandra's R is unusual in that it can interrupt [[DASH]]-type skills. \n Therefore, Lissandra's W [[ROOT]] and R [[STUN]] can interrupt Camille's E1 and E2 [[DASH]]. [[CLIP:https://www.youtube.com/shorts/BaIgsc8Wa3w]]"],
    },
  },
  common: {
    ko: [],
    en: [],
  },
};
