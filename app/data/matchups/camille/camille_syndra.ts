// app/data/matchups/camille/camille_syndra.ts
import type { MatchupSummary } from "../_types";

export const camille_syndra: MatchupSummary = {
  champs: ["camille", "syndra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 신드라 E의 [[KNOCKBACK]] / QE, WE의 [[KNOCKBACK]] [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 신드라 평타, Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Syndra's E [[KNOCKBACK]] / QE, WE [[KNOCKBACK]] [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Syndra's auto-attacks, Q, W, E, and R."
      ],
    },
    syndra: {
      ko: ["E의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Syndra's E [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
