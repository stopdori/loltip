// app/data/matchups/camille/camille_zilean.ts
import type { MatchupSummary } from "../_types";

export const camille_zilean: MatchupSummary = {
  champs: ["camille", "zilean"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 질리언 Q의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 질리언 평타, Q를 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 질리언 Q가 카밀에게 부착되면 데미지를 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Zilean's Q [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Zilean's auto-attacks and Q.",
        "Camille's R [[UNTARGETABLE]] cannot dodge the damage once Zilean's Q is attached to Camille."
      ],
    },
    zilean: {
      ko: ["Q의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Zilean's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
