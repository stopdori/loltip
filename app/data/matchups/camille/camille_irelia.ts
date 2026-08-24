// app/data/matchups/camille/camille_irelia.ts
import type { MatchupSummary } from "../_types";

export const camille_irelia: MatchupSummary = {
  champs: ["camille", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 이렐리아 E의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 있음. \n 단, 이렐리아 E, R의 [[MARK]]가 소모되지 않아 Q의 [[CDR]]효과도 없음.", 
        "R의 [[UNTARGETABLE]]로 이렐리아 W, E, R을 피할 수 있음.", 
        "[[TIP]]R의 [[UNTARGETABLE]]로 이렐리아 Q를 피할 수 없음. \n 이렐리아 E, R의 불안정 상태 [[MARK]]이 있다면 [[MARK_CONSUME]]하여 Q [[CDR_RESET]] 가능. [[CLIP:https://www.youtube.com/shorts/wy_RXe-oifQ]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Irelia's E [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Irelia's Q [[DASH]]. \n However, since Irelia's E and R [[MARK]] is not consumed, Q's [[CDR]] effect does not apply.",
        "Camille's R [[UNTARGETABLE]] can dodge Irelia's W, E, and R.",
        "[[TIP]]Camille's R [[UNTARGETABLE]] cannot dodge Irelia's Q. \n If Irelia's E or R Defiant [[MARK]] is active, [[MARK_CONSUME]]ing it grants Q a [[CDR_RESET]]. [[CLIP:https://www.youtube.com/shorts/wy_RXe-oifQ]]"
      ],
    },
    irelia: {
      ko: ["E의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Irelia's E [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
  common: {
    ko: ["[[TIP]]카밀 E와 이렐리아 Q가 충돌하면 \n 카밀 E는 유효하고, 이렐리아 Q는 끊길 수 있음. [[CLIP:https://www.youtube.com/shorts/IOJqpnBzYU4]]"],
    en: ["[[TIP]]When Camille's E and Irelia's Q collide, \n Camille's E remains valid while Irelia's Q may be interrupted. [[CLIP:https://www.youtube.com/shorts/IOJqpnBzYU4]]"],
  },
};
