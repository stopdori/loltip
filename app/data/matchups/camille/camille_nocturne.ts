// app/data/matchups/camille/camille_nocturne.ts
import type { MatchupSummary } from "../_types";

export const camille_nocturne: MatchupSummary = {
  champs: ["camille", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 녹턴 E의 [[FEAR]]를 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[FEAR]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "R의 [[UNTARGETABLE]]로 녹턴 P 평타(광역 데미지 만), Q, R2를 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 녹턴 E의 [[TETHER]]을 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Nocturne's E [[FEAR]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[FEAR]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Nocturne's P auto-attack (AoE damage only), Q, and R2.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Nocturne's E [[TETHER]]."
      ],
    },
    nocturne: {
      ko: ["E의 [[FEAR]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Nocturne's E [[FEAR]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
