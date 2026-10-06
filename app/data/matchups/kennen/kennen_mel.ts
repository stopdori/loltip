// app/data/matchups/kennen/kennen_mel.ts
import type { MatchupSummary } from "../_types";

export const kennen_mel: MatchupSummary = {
  champs: ["kennen", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kennen: {
      ko: ["멜 W가 케넨 Q 반사 가능."],
      en: ["Mel’s W reflects Kennen’s Q"],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 케넨 평타(일반, [[EMPOWERED]]), Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 케넨 W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Kennen's basic attacks (normal, [[EMPOWERED]]) and Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Kennen's W, E, or R. [[NOT_EXIST]]"],
    },
  },
};
