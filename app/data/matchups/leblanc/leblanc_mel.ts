// app/data/matchups/leblanc/leblanc_mel.ts
import type { MatchupSummary } from "../_types";

export const leblanc_mel: MatchupSummary = {
  champs: ["leblanc", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    leblanc: {
      ko: ["멜 W가 르블랑 Q 반사 가능."],
      en: ["Mel’s W reflects Leblanc’s Q"],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 르블랑 평타, Q, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 르블랑 W를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 르블랑 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] LeBlanc's basic attacks, Q, and E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] LeBlanc's W. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt LeBlanc's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
