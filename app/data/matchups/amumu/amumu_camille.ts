// app/data/matchups/amumu/amumu_camille.ts
import type { MatchupSummary } from "../_types";

export const amumu_camille: MatchupSummary = {
  champs: ["amumu", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: [
        "Q의 [[CC_BUFFER]]로 카밀 E의 [[STUN]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음.",
        "Q의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 카밀 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Camille's E [[STUN]] and R [[KNOCKBACK]] and continue the [[DASH]]. \n However, the [[STUN]] still applies.",
        "Amumu's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Camille's E [[DASH]].",
        "Amumu's R [[STUN]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 아무무 Q, R의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 아무무 Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Amumu's Q and R [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Amumu's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Amumu's Q, W, E, and R."
      ],
    },
  },
};
