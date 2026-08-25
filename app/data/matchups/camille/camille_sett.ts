// app/data/matchups/camille/camille_sett.ts
import type { MatchupSummary } from "../_types";

export const camille_sett: MatchupSummary = {
  champs: ["camille", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 세트 E의 [[GRAB]], [[STUN]] / R의 [[SUPPRESS]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음. \n 단, 세트 R의 [[SUPPRESS]]은 정말 특별한 경우에 가능. ( 공통 부분에 자세하게 서술 )", 
        "R의 [[UNTARGETABLE]]로 세트 W, E, R(범위 피해)을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Sett's E [[GRAB]], [[STUN]] / R [[SUPPRESS]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled. \n However, ignoring Sett's R [[SUPPRESS]] is possible only in a very specific case. (Detailed in the Common section.)",
        "Camille's R [[UNTARGETABLE]] can dodge Sett's W, E, and R (AoE damage)."
      ],
    },
    sett: {
      ko: ["E의 [[GRAB]], R의 [[SUPPRESS]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."
      ],
      en: ["Sett's E [[GRAB]] and R [[SUPPRESS]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["[[TIP]]특이한 판정 \n E1( 투척 단계 )의 [[CC_BUFFER]]로 세트 R의 [[SUPPRESS]]을 2가지 조건을 만족하는 경우에 무시하고 [[DASH]]할 수 있음. \n \n 1. 카밀 E의 갈고리를 최대한 멀리 발사해야 함. \n 2. 세트 R의 [[DASH]] 거리가 최대한 짧아야 함. \n 두 조건이 만족해야 [[CC_BUFFER]] 발동 가능성이 높음. [[CLIP:https://www.youtube.com/shorts/jrrfZIU9T-A]]",
      "카밀 R과 세트 R은 먼저 누른쪽이 판정을 이김."
    ],
    en: ["[[TIP]]Unusual interaction \n Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Sett's R [[SUPPRESS]] and [[DASH]] when both of the following conditions are met. \n \n 1. Camille's E grapple hook must be thrown as far as possible. \n 2. Sett's R [[DASH]] distance must be as short as possible. \n Both conditions must be met for the [[CC_BUFFER]] to have a high chance of triggering. [[CLIP:https://www.youtube.com/shorts/jrrfZIU9T-A]]",
      "Between Camille's R and Sett's R, whichever is used first wins the interaction."
    ],
  },
};
