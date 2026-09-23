// app/data/matchups/diana/diana_rakan.ts
import type { MatchupSummary } from "../_types";

export const diana_rakan: MatchupSummary = {
  champs: ["diana", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: ["R의 [[GRAB]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Rakan's W and E [[DASH]]."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 다이애나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: [],
    },
  },
};
