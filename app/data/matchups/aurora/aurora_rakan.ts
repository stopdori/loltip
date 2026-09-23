// app/data/matchups/aurora/aurora_rakan.ts
import type { MatchupSummary } from "../_types";

export const aurora_rakan: MatchupSummary = {
  champs: ["aurora", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Rakan's W [[AIRBORNE]] and R [[CHARM]] and continue [[DASH]]. \n However, the [[CHARM]] still applies."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 오로라 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["R [[CHARM]] cannot interrupt Aurora's W and E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
