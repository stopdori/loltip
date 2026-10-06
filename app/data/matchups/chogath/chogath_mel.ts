// app/data/matchups/chogath/chogath_mel.ts
import type { MatchupSummary } from "../_types";

export const chogath_mel: MatchupSummary = {
  champs: ["chogath", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 초가스 E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 초가스 평타, Q, W, E([[PROJECTILE]]를 제외한 평타), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Cho'Gath's E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Cho'Gath's basic attacks, Q, W, E (basic attacks excluding the [[PROJECTILE]]), or R. [[NOT_EXIST]]"],
    },
  },
};
