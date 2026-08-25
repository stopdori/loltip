// app/data/matchups/camille/camille_swain.ts
import type { MatchupSummary } from "../_types";

export const camille_swain: MatchupSummary = {
  champs: ["camille", "swain"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 스웨인 E의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 스웨인 평타, Q, W, E1, R(지속 피해), R2를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Swain's E [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Swain's auto-attacks, Q, W, E1, R (damage-over-time), and R2."
      ],
    },
    swain: {
      ko: ["E의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Swain's E [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["독특한 판정 \n 카밀 E1( 투척 단계 )의 [[CC_BUFFER]]의 판정으로 스웨인 E의 [[ROOT]]를 무시하고 [[DASH]]할 수 있음. \n 이때, 카밀에게 [[ROOT]]은 남아있지만 스웨인 E2의 [[GRAB]] 대상에 포함되지 않음. [[CLIP:https://youtube.com/shorts/ZtZXHDw9hqA?feature=share]]"],
    en: ["Unusual interaction \n Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Swain's E [[ROOT]] and [[DASH]]. \n In this case, the [[ROOT]] still remains on Camille, but she is excluded from being a target of Swain's E2 [[GRAB]]. [[CLIP:https://youtube.com/shorts/ZtZXHDw9hqA?feature=share]]"],
  },
};
