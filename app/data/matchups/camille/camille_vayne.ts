// app/data/matchups/camille/camille_vayne.ts
import type { MatchupSummary } from "../_types";

export const camille_vayne: MatchupSummary = {
  champs: ["camille", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 베인 E의 [[KNOCKBACK]], [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
       "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 베인 Q의 [[DASH]]을 끊을 수 있음.", 
       "R의 [[UNTARGETABLE]]로 평타, Q(평타), W(평타), E, R(평타)을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Vayne's E [[KNOCKBACK]], [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Vayne's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Vayne's auto-attacks, Q (auto-attack), W (auto-attack), E, and R (auto-attack)."
      ],
    },
    vayne: {
      ko: ["E의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Vayne's E [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
