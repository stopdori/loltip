// app/data/matchups/camille/camille_karma.ts
import type { MatchupSummary } from "../_types";

export const camille_karma: MatchupSummary = {
  champs: ["camille", "karma"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 카르마 W, RW의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 카르마 평타, Q, RQ를 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 카르마 W, RW의 [[TETHER]]을 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Karma's W and RW [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Karma's basic attacks, Q, and RQ.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Karma's W and RW [[TETHER]]."
      ],
    },
    karma: {
      ko: ["W, RW의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Karma's W and RW [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
