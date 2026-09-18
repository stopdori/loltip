// app/data/matchups/azir/azir_evelynn.ts
import type { MatchupSummary } from "../_types";

export const azir_evelynn: MatchupSummary = {
  champs: ["azir", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]]."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 아지르 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Azir's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
