// app/data/matchups/chogath/chogath_smolder.ts
import type { MatchupSummary } from "../_types";

export const chogath_smolder: MatchupSummary = {
  champs: ["chogath", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "W의 [[SILENCE]]으로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 없음. [[NOT_EXIST]] \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "W [[SILENCE]] cannot interrupt Smolder's E [[IGNORE_TERRAIN]]. [[NOT_EXIST]] \n However, the [[SILENCE]] still applies."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
