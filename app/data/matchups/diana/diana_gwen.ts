// app/data/matchups/diana/diana_gwen.ts
import type { MatchupSummary } from "../_types";

export const diana_gwen: MatchupSummary = {
  champs: ["diana", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: ["R의 [[GRAB]]으로 그웬 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Gwen's E [[DASH]]."],
    },
    gwen: {
      ko: ["그웬 W로 다이애나 Q, W, R을 범위 밖에서 맞지 않음"],
      en: ["Gwen's W prevents Diana's Q, W and R from hitting when outside the zone"],
    },
  },
};
