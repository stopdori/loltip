// app/data/matchups/camille/camille_chogath.ts
import type { MatchupSummary } from "../_types";

export const camille_chogath: MatchupSummary = {
  champs: ["camille", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 초가스 Q의 [[AIRBORNE]], W의 [[SILENCE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "R의 [[UNTARGETABLE]]로 초가스 Q, W, E를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Cho'Gath's Q [[AIRBORNE]] and W [[SILENCE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Cho'Gath's Q, W, and E."
      ],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "W의 [[SILENCE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Cho'Gath's Q [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Cho'Gath's W [[SILENCE]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
