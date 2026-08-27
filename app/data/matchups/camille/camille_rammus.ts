// app/data/matchups/camille/camille_rammus.ts
import type { MatchupSummary } from "../_types";

export const camille_rammus: MatchupSummary = {
  champs: ["camille", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 람머스 Q의 [[KNOCKBACK]], E의 [[TAUNT]], QR의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[TAUNT]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]], [[KNOCKBACK]]으로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "R의 [[UNTARGETABLE]]로 람머스 Q, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Rammus's Q [[KNOCKBACK]], E [[TAUNT]], and QR [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[TAUNT]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]], [[KNOCKBACK]] can interrupt Rammus's Q [[TRANSFORM]].",
        "Camille's R [[UNTARGETABLE]] can dodge Rammus's Q and R."
      ],
    },
    rammus: {
      ko: ["Q의 [[KNOCKBACK]], E의 [[TAUNT]], QR의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Rammus's Q [[KNOCKBACK]], E [[TAUNT]], and QR [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
