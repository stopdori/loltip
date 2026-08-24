// app/data/matchups/camille/camille_kennen.ts
import type { MatchupSummary } from "../_types";

export const camille_kennen: MatchupSummary = {
  champs: ["camille", "kennen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 케넨 P의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "R의 [[UNTARGETABLE]]로 케넨 평타, Q, W(대상 제외), E, R을 피할 수 있음. \n 단, 케넨 W는 카밀과 다른 대상에게 스택을 쌓아놓고 카밀이 [[UNTARGETABLE]] 상태 일때 W를 사용하면, \n 스택은 남아있지만 W를 맞지않음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Kennen's P [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Kennen's basic attacks, Q, W (excluding the primary target), E, and R. \n However, if Kennen has stacks on both Camille and another target and uses W while Camille is [[UNTARGETABLE]], \n the stacks remain but Camille is not hit by W."
      ],
    },
    kennen: {
      ko: ["P의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Kennen's P [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
