// app/data/matchups/evelynn/evelynn_gwen.ts
import type { MatchupSummary } from "../_types";

export const evelynn_gwen: MatchupSummary = {
  champs: ["evelynn", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 그웬 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Gwen's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    gwen: {
      ko: ["그웬 W로 이블린 Q, R을 범위 밖에서 맞지 않음"],
      en: ["Gwen's W prevents Evelynn's Q and R from hitting when outside the zone"],
    },
  },
};
