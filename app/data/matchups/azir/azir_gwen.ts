// app/data/matchups/azir/azir_gwen.ts
import type { MatchupSummary } from "../_types";

export const azir_gwen: MatchupSummary = {
  champs: ["azir", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 그웬 E의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    gwen: {
      ko: ["그웬 W로 아지르 평타, Q, W, R를 범위 밖에서 맞지 않음\n관통한 W도 맞지 않음"],
      en: ["Gwen's W prevents Azir's 평타, Q, W and R from hitting when outside the zone\\nEven W that has pierced through does not hit"],
    },
  },
};
