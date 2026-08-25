// app/data/matchups/camille/camille_viktor.ts
import type { MatchupSummary } from "../_types";

export const camille_viktor: MatchupSummary = {
  champs: ["camille", "viktor"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 빅토르 W의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 빅토르 평타, Q, W, E, R을 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 빅토르 평타([[EMPOWERED]] Q)를 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/4zrC4d40IVo]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Viktor's W [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Viktor's auto-attacks, Q, W, E, and R.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Viktor's auto-attack ([[EMPOWERED]] Q). [[CLIP:https://www.youtube.com/shorts/4zrC4d40IVo]]"
      ],
    },
    viktor: {
      ko: ["[[TIP]] 빅토르 W는 [[ST_CONDITIONAL]] [[STUN]]인데, [[STUN]]은 일반적으로 [[DASH]]류를 끊을 수 없음. \n 하지만 빅토르 W는 특이하게도 [[DASH]]류를 끊을 수 있음. \n 따라서, W의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음. [[CLIP:https://www.youtube.com/shorts/wyLXB61QXi4]]"],
      en: ["[[TIP]] Viktor's W is a [[ST_CONDITIONAL]] [[STUN]], and [[STUN]] normally cannot interrupt [[DASH]]-type skills. \n However, Viktor's W is unusual in that it can interrupt [[DASH]]-type skills. \n Therefore, Viktor's W [[STUN]] can interrupt Camille's E1 and E2 [[DASH]]. [[CLIP:https://www.youtube.com/shorts/wyLXB61QXi4]]"],
    },
  },
};
