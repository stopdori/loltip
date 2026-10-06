// app/data/matchups/kogmaw/kogmaw_mel.ts
import type { MatchupSummary } from "../_types";

export const kogmaw_mel: MatchupSummary = {
  champs: ["kogmaw", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kogmaw: {
      ko: ["멜 W가 코그모 Q E 반사가능"],
      en: ["Mel’s W reflects Kogmaw’s Q E"],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 코그모 평타, Q, W, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 코그모 R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Kog'Maw's basic attacks, Q, W, and E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Kog'Maw's R. [[NOT_EXIST]]"],
    },
  },
};
