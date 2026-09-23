// app/data/matchups/evelynn/evelynn_rakan.ts
import type { MatchupSummary } from "../_types";

export const evelynn_rakan: MatchupSummary = {
  champs: ["evelynn", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 라칸 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Rakan's W and E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: [],
    },
  },
};
