// app/data/matchups/camille/camille_warwick.ts
import type { MatchupSummary } from "../_types";

export const camille_warwick: MatchupSummary = {
  champs: ["camille", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 워윅 W의 [[FEAR]], R의 [[SUPPRESS]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[FEAR]], [[SUPPRESS]]이 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 워윅 Q, W, E, R을 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 워윅 Q를 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/1FiQepl13fk]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Warwick's W [[FEAR]] and R [[SUPPRESS]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[FEAR]] or [[SUPPRESS]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Warwick's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Warwick's Q, W, E, and R.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Warwick's Q. [[CLIP:https://www.youtube.com/shorts/1FiQepl13fk]]"
      ],
    },
    warwick: {
      ko: ["W의 [[FEAR]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Warwick's W [[FEAR]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["특이한 판정 \n 카밀이 E1의 투척 단계를 실행하고 워윅 R의 [[SUPPRESS]]에 걸린다면 \n [[CC_BUFFER]]가 발동하여 카밀 E1의 벽돌진 단계를 실행하여 [[DASH]]. \n 단, 워윅은 카밀이 이동하지 않은 것처럼 그 자리에서 허공에 공격 지속. \n 이때 카밀은 여전히 [[SUPPRESS]], 공격을 당함. \n 즉, 카밀은 이동하지만 워윅의 모든 공격은 유효하고 지속됨. [[CLIP:https://youtube.com/shorts/ZLefHYZ3AQU?feature=share]]",
      "카밀 R과 워윅 R을 서로에게 사용했을 때 \n 카밀 R을 선입력 해놓으면 판정을 이김."],
    en: ["Unusual interaction \n If Camille is hit by Warwick's R [[SUPPRESS]] while executing the E1 Throw phase, \n the [[CC_BUFFER]] triggers and Camille executes the E1 Wall-dash phase [[DASH]]. \n However, Warwick continues attacking in place, in the air, as if Camille never moved. \n Camille is still [[SUPPRESS]]ed and takes the attacks during this. \n In other words, Camille moves, but all of Warwick's attacks remain valid and continue. [[CLIP:https://youtube.com/shorts/ZLefHYZ3AQU?feature=share]]",
      "When Camille and Warwick use their R on each other, \n pre-inputting Camille's R first wins the interaction."],
  },
};
