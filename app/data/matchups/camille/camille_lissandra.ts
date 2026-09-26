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
        "R의 [[UNTARGETABLE]]로 리산드라 평타, Q, W, E, R(카밀이 아닌 대상에게 사용한 범위 피해)을 피할 수 있음. \n 단, 리산드라 R을 카밀에게 사용했을 때 리산드라 R은 취소될 수 있음. [[COOLDOWN]] 소모 없음."
      ],
      en: ["E1 (Throw phase) [[CC_BUFFER]] can ignore Lissandra's W [[ROOT]] and R [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] or [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "R [[UNTARGETABLE]] can dodge Lissandra's auto-attacks, Q, W, E, and R (the AoE damage when used on a target other than Camille). \n However, it can be canceled if Lissandra uses R on Camille. No [[COOLDOWN]] is consumed."
      ],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음. [[EXIST]] [[CLIP:https://www.youtube.com/shorts/BaIgsc8Wa3w]]", 
      "카밀 E2의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]], [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Camille's E1 and E2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.",
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Camille's E1 and E2 [[DASH]]. [[EXIST]] [[CLIP:https://www.youtube.com/shorts/BaIgsc8Wa3w]]",
        "When hit by Camille's E2 [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]], [[KNOCKBACK]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
  common: {
    ko: ["카밀 R을 리산드라에게 사용했을 때 \n 생성된 카밀 R [[ZONE]] 밖으로 리산드라가 E1의 [[PROJECTILE]]를 발사하고 E2의 [[BLINK]]을 사용하면 \n E1의 [[PROJECTILE]]에서 가장 가까운 [[ZONE]] 안족의 테두리로 [[BLINK]]. [[CLIP:https://www.youtube.com/shorts/JBrihEuecrI?feature=share]]"],
    en: ["When Camille uses R on Lissandra, \n if Lissandra fires E1 [[PROJECTILE]] outside the created Camille R [[ZONE]] and then uses E2 [[BLINK]], \n she [[BLINK]]s to the edge inside the [[ZONE]] closest to the E1 [[PROJECTILE]]. [[CLIP:https://www.youtube.com/shorts/JBrihEuecrI?feature=share]]"],
  },
};
