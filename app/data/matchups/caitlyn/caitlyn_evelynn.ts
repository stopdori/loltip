// app/data/matchups/caitlyn/caitlyn_evelynn.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_evelynn: MatchupSummary = {
  champs: ["caitlyn", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Evelynn's [[EMPOWERED]] E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 케이틀린 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Caitlyn's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
