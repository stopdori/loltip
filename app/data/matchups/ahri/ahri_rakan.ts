// app/data/matchups/ahri/ahri_rakan.ts
import type { MatchupSummary } from "../_types";

export const ahri_rakan: MatchupSummary = {
  champs: ["ahri", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음. [[EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Rakan's W and E [[DASH]]. [[EXIST]] \n However, the [[CHARM]] still applies."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 아리 R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["R [[CHARM]] cannot interrupt Ahri's R [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
