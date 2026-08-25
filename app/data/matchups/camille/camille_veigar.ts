// app/data/matchups/camille/camille_veigar.ts
import type { MatchupSummary } from "../_types";

export const camille_veigar: MatchupSummary = {
  champs: ["camille", "veigar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 베이가 E의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 베이가 평타, Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Veigar's E [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Veigar's auto-attacks, Q, W, E, and R."
      ],
    },
    veigar: {
      ko: ["[[TIP]] 베이가 E는 [[STUN]]인데, [[STUN]]은 일반적으로 [[DASH]]류를 끊을 수 없음. \n 하지만 베이가 E는 특이하게도 [[DASH]]류를 끊을 수 있음. \n 따라서, E의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["[[TIP]] Veigar's E is a [[STUN]], and [[STUN]] normally cannot interrupt [[DASH]]-type skills. \n However, Veigar's E is unusual in that it can interrupt [[DASH]]-type skills. \n Therefore, Veigar's E [[STUN]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
