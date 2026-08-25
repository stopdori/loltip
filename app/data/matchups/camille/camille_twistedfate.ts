// app/data/matchups/camille/camille_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const camille_twistedfate: MatchupSummary = {
  champs: ["camille", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 트위스티드 페이트 W의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 트위스티드 페이트 R2의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 트위스티드 페이트 평타, Q, W, E(강화 평타)를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Twisted Fate's W [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Twisted Fate's R2 [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Twisted Fate's auto-attacks, Q, W, and E (empowered auto-attack)."
      ],
    },
    twistedfate: {
      ko: ["W의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Twisted Fate's W [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
