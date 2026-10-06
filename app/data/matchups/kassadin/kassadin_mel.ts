// app/data/matchups/kassadin/kassadin_mel.ts
import type { MatchupSummary } from "../_types";

export const kassadin_mel: MatchupSummary = {
  champs: ["kassadin", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kassadin: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 카사딘 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 카사딘 평타, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Kassadin's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Kassadin's basic attacks, W, E, or R. [[NOT_EXIST]]"],
    },
  },
};
