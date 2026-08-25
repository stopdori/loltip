// app/data/matchups/brand/brand_camille.ts
import type { MatchupSummary } from "../_types";

export const brand_camille: MatchupSummary = {
  champs: ["brand", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["Q의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 브랜드 Q의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "R의 [[UNTARGETABLE]]로 브랜드 평타, Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Brand's Q [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Brand's auto-attacks, Q, W, E, and R."
      ],
    },
  },
};
