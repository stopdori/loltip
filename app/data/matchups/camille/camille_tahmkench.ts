// app/data/matchups/camille/camille_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const camille_tahmkench: MatchupSummary = {
  champs: ["camille", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 탐켄치 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로도 탐켄치 R의 [[SUPPRESS]]을 무시할 수 없음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 탐켄치 Q, W를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Tahm Kench's Q [[STUN]] and W [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore Tahm Kench's R [[SUPPRESS]] either.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Tahm Kench's Q and W."
      ],
    },
    tahmkench: {
      ko: ["Q의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "W의 [[AIRBORNE]] / QR, R의 [[SUPPRESS]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Tahm Kench's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Tahm Kench's W [[AIRBORNE]] / QR and R [[SUPPRESS]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
