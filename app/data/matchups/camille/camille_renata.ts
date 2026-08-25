// app/data/matchups/camille/camille_renata.ts
import type { MatchupSummary } from "../_types";

export const camille_renata: MatchupSummary = {
  champs: ["camille", "renata"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 레나타 글라스크 Q의 [[ROOT]], [[AIRBORNE]], [[STUN]] / R의 [[BERSERK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[BERSERK]]이 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "R의 [[UNTARGETABLE]]로 레나타 글라스크 평타, Q, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Renata Glasc's Q [[ROOT]], [[AIRBORNE]], [[STUN]] / R [[BERSERK]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[BERSERK]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Renata Glasc's auto-attacks, Q, E, and R."
      ],
    },
    renata: {
      ko: ["Q의 [[ROOT]], [[AIRBORNE]] / R의 [[BERSERK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "Q의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Renata Glasc's Q [[ROOT]], [[AIRBORNE]] / R [[BERSERK]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Renata Glasc's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
