// app/data/matchups/camille/camille_qiyana.ts
import type { MatchupSummary } from "../_types";

export const camille_qiyana: MatchupSummary = {
  champs: ["camille", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 키아나 물Q의 [[ROOT]] / R의 [[KNOCKBACK]], [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]], [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 키아나 W, E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 키아나 Q(일반, 숲, 물, 땅), E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Qiyana's Water Q [[ROOT]] / R [[KNOCKBACK]], [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] or [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Qiyana's W and E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Qiyana's Q (Normal, Grass, Water, Rock), E, and R."
      ],
    },
    qiyana: {
      ko: ["물Q의 [[ROOT]] / R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "R의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."
      ],
      en: ["Qiyana's Water Q [[ROOT]] / R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Qiyana's R [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."
      ],
    },
  },
};
