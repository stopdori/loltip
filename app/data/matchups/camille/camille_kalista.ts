// app/data/matchups/camille/camille_kalista.ts
import type { MatchupSummary } from "../_types";

export const camille_kalista: MatchupSummary = {
  champs: ["camille", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 칼리스타 P의 [[DASH]]을 끊을 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 칼리스타 R2의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 칼리스타 평타, Q, E, R2를 피할 수 있음. \n 단, 칼리스타 E는 카밀과 다른 대상에게 창을 쌓아놓고 카밀이 [[UNTARGETABLE]] 상태 일때 E를 사용하면, \n 스택은 남아있지만 E를 맞지않음. [[CLIP:https://www.youtube.com/shorts/trX6vz4Oljs]]"
      ],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Kalista's P [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Kalista's R2 [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Kalista's basic attacks, Q, E, and R2. \n However, if Kalista has spear stacks on both Camille and another target and uses E while Camille is [[UNTARGETABLE]], \n the stacks remain but Camille is not hit by E. [[CLIP:https://www.youtube.com/shorts/trX6vz4Oljs]]"
      ],
    },
    kalista: {
      ko: ["R2의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Kalista's R2 [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
