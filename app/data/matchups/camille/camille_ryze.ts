// app/data/matchups/camille/camille_ryze.ts
import type { MatchupSummary } from "../_types";

export const camille_ryze: MatchupSummary = {
  champs: ["camille", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 라이즈 EW의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 라이즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 라이즈 평타, Q, Q(E [[CHAIN]]) E를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Ryze's EW [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Ryze's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Ryze's auto-attacks, Q, Q (E [[CHAIN]]), and E."
      ],
    },
    ryze: {
      ko: ["EW의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Ryze's EW [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
