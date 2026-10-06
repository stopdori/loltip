// app/data/matchups/ahri/ahri_mel.ts
import type { MatchupSummary } from "../_types";

export const ahri_mel: MatchupSummary = {
  champs: ["ahri", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 아리 평타, Q, W, E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "E의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Ahri's basic attacks, Q, W, E, and R [[PROJECTILE]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Ahri's R [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
