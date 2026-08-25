// app/data/matchups/camille/camille_neeko.ts
import type { MatchupSummary } from "../_types";

export const camille_neeko: MatchupSummary = {
  champs: ["camille", "neeko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 니코 E의 [[ROOT]] / R의 [[AIRBORNE]], [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]], [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 니코 평타, Q, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Neeko's E [[ROOT]] / R [[AIRBORNE]], [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] or [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Neeko's auto-attacks, Q, and R."
      ],
    },
    neeko: {
      ko: ["E의 [[ROOT]], R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "R의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."
      ],
      en: ["Neeko's E [[ROOT]] and R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Neeko's R [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."
      ],
    },
  },
};
