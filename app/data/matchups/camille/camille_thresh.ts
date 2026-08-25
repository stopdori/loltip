// app/data/matchups/camille/camille_thresh.ts
import type { MatchupSummary } from "../_types";

export const camille_thresh: MatchupSummary = {
  champs: ["camille", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 쓰레쉬 E의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로도 쓰레쉬 Q의 [[SUPPRESS]]을 무시할 수 없음. \n 단, 쓰레쉬가 Q2를 빠르게 사용하면 가능할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 쓰레쉬 Q, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Thresh's E [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore Thresh's Q [[SUPPRESS]] either. \n However, it may be possible if Thresh uses Q2 quickly.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Thresh's Q2 and W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Thresh's Q, E, and R."
      ],
    },
    thresh: {
      ko: ["[[TIP]] 쓰레쉬 Q는 [[STUN]]인데, [[STUN]]은 일반적으로 [[DASH]]류를 끊을 수 없음. \n 하지만 쓰레쉬 Q는 특이하게도 [[DASH]]류를 끊을 수 있음. \n 따라서, Q의 [[STUN]], E의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["[[TIP]] Thresh's Q is a [[STUN]], and [[STUN]] normally cannot interrupt [[DASH]]-type skills. \n However, Thresh's Q is unusual in that it can interrupt [[DASH]]-type skills. \n Therefore, Thresh's Q [[STUN]] and E [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
