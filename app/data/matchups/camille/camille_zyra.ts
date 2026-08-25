// app/data/matchups/camille/camille_zyra.ts
import type { MatchupSummary } from "../_types";

export const camille_zyra: MatchupSummary = {
  champs: ["camille", "zyra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 자이라 E의 [[ROOT]], R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 자이라 평타, Q, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Zyra's E [[ROOT]] and R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Zyra's auto-attacks, Q, E, and R."
      ],
    },
    zyra: {
      ko: ["E의 [[ROOT]], R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Zyra's E [[ROOT]] and R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
