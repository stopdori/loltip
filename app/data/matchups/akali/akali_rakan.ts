// app/data/matchups/akali/akali_rakan.ts
import type { MatchupSummary } from "../_types";

export const akali_rakan: MatchupSummary = {
  champs: ["akali", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 라칸 W, E의 [[DASH]]을 따라갈 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Rakan's W and E [[DASH]]. \n However, the [[CHARM]] still applies."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음. [[EXIST]] \n 단, 아칼리 E2, R1, R2는 충돌하면 데미지는 유효.", 
        "R의 [[CHARM]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음. \n 단, 아칼리 E2, R1, R2는 충돌하면 데미지는 유효."],
      en: ["R [[CHARM]] cannot interrupt Akali's E1, E2, R1, and R2 [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
