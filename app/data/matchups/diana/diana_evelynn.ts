// app/data/matchups/diana/diana_evelynn.ts
import type { MatchupSummary } from "../_types";

export const diana_evelynn: MatchupSummary = {
  champs: ["diana", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: ["R의 [[GRAB]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]]."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 다이애나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Diana's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
