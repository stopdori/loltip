// app/data/matchups/kalista/kalista_mel.ts
import type { MatchupSummary } from "../_types";

export const kalista_mel: MatchupSummary = {
  champs: ["kalista", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kalista: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 칼리스타 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 칼리스타 W, E, R2을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 칼리스타 P의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Kalista's basic attacks and Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Kalista's W, E, or R2. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Kalista's P [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
