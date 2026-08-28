// app/data/matchups/darius/darius_gwen.ts
import type { MatchupSummary } from "../_types";

export const darius_gwen: MatchupSummary = {
  champs: ["darius", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    darius: {
      ko: ["E의 [[GRAB]]으로 그웬 E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[GRAB]] can interrupt Gwen's E [[DASH]]."],
    },
    gwen: {
      ko: ["그웬 W의 [[UNTARGETABLE]]로 다리우스 Q, E를 범위 밖에서 맞지 않음"],
      en: ["Gwen's W prevents Darius's Q and E from hitting when outside the zone"],
    },
  },
};
