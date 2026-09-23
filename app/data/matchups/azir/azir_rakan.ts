// app/data/matchups/azir/azir_rakan.ts
import type { MatchupSummary } from "../_types";

export const azir_rakan: MatchupSummary = {
  champs: ["azir", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Rakan's W and E [[DASH]]."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 아지르 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 아지르 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["R [[CHARM]] cannot interrupt Azir's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
