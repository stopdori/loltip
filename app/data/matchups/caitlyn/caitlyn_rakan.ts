// app/data/matchups/caitlyn/caitlyn_rakan.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_rakan: MatchupSummary = {
  champs: ["caitlyn", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W ([[TRAP]]) [[ROOT]] can interrupt Rakan's W and E [[DASH]]. [[EXIST]]"],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 케이틀린 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]",
        "R의 [[CHARM]]으로 케이틀린 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[AIRBORNE]] can interrupt Caitlyn's E [[DASH]]. [[EXIST]]", "R [[CHARM]] cannot interrupt Caitlyn's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
