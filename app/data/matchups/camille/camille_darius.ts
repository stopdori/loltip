// app/data/matchups/camille/camille_darius.ts
import type { MatchupSummary } from "../_types";

export const camille_darius: MatchupSummary = {
  champs: ["camille", "darius"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 다리우스 E의 [[GRAB]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "R의 [[UNTARGETABLE]]로 다리우스 Q, E를 피할 수 있음. \n 단, 다리우스 R은 취소될 수 있음. [[COOLDOWN]] 소모 없음."],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Darius's E [[GRAB]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Darius's Q and E. \n However, Darius's R can be cancelled, with no [[COOLDOWN]] consumed."],
    },
    darius: {
      ko: ["E의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Darius's E [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
