// app/data/matchups/akali/akali_mel.ts
import type { MatchupSummary } from "../_types";

export const akali_mel: MatchupSummary = {
  champs: ["akali", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 아칼리 Q, E1의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 아칼리 E2, R1, R2를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Akali's Q and E1 [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Akali's E2, R1, or R2. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Akali's E1, E2, R1, and R2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
