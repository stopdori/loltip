// app/data/matchups/camille/camille_heimerdinger.ts
import type { MatchupSummary } from "../_types";

export const camille_heimerdinger: MatchupSummary = {
  champs: ["camille", "heimerdinger"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 하이머딩거 E, RE의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "R의 [[UNTARGETABLE]]로 하이머딩거 평타 / Q, RQ([[PROJECTILE]]) / W, RW / E, RE를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Heimerdinger's E and RE [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Heimerdinger's basic attacks / Q and RQ ([[PROJECTILE]]) / W and RW / E and RE."
      ],
    },
    heimerdinger: {
      ko: ["E, RE의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Heimerdinger's E and RE [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
