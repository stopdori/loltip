// app/data/matchups/ambessa/ambessa_camille.ts
import type { MatchupSummary } from "../_types";

export const ambessa_camille: MatchupSummary = {
  champs: ["ambessa", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 카밀 E의 [[STUN]], R의 [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Ambessa's R [[UNSTOPPABLE]] can ignore Camille's E [[STUN]] and R [[KNOCKBACK]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    camille: {
      ko: ["[[TIP]]E1( 투척 단계 )의 [[CC_BUFFER]]로 암베사 R의 [[SUPPRESS]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 없음. [[CLIP:https://www.youtube.com/shorts/K8fduV58Dwo]] \n 여러번 실험 해봤지만 된적 없음. \n 되면 제보 부탁드림.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 암베사 P의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 암베사 Q1, Q2, W, E, R의 [[SUPPRESS]]을 피할 수 있음."
      ],
      en: ["[[TIP]]Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore Ambessa's R [[SUPPRESS]] to continue into the E1 (Wall-dash phase) [[DASH]]. [[CLIP:https://www.youtube.com/shorts/K8fduV58Dwo]] \n Tested many times, but it has never worked. \n Please report it if you manage to make it work.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Ambessa's P [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Ambessa's Q1, Q2, W, E, and R [[SUPPRESS]]."
      ],
    },
  },
  common: {
    ko: [],
    en: [],
  },
};
