// app/data/matchups/camille/camille_seraphine.ts
import type { MatchupSummary } from "../_types";

export const camille_seraphine: MatchupSummary = {
  champs: ["camille", "seraphine"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 세라핀 E의 [[ROOT]], [[STUN]] / R의 [[CHARM]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]], [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음. \n 단, [[CHARM]]이 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "R의 [[UNTARGETABLE]]로 세라핀 평타, Q, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Seraphine's E [[ROOT]], [[STUN]] / R [[CHARM]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] or [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled. \n However, if the [[CHARM]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Seraphine's auto-attacks, Q, E, and R."
      ],
    },
    seraphine: {
      ko: ["세라핀 E의 [[ROOT]], R의 [[CHARM]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Seraphine's E [[ROOT]] and R [[CHARM]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
