// app/data/matchups/camille/camille_nami.ts
import type { MatchupSummary } from "../_types";

export const camille_nami: MatchupSummary = {
  champs: ["camille", "nami"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 나미 Q의 [[SUSPENDING]], R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 나미 평타, Q, W, R을 피할 수 있음. \n 단, W는 [[CHAIN]]도 발동하지 않음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Nami's Q [[SUSPENDING]] and R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Nami's auto-attacks, Q, W, and R. \n However, for W, the [[CHAIN]] also does not trigger."
      ],
    },
    nami: {
      ko: ["Q의 [[SUSPENDING]], R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Nami's Q [[SUSPENDING]] and R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
