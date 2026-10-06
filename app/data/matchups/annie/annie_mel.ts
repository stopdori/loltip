// app/data/matchups/annie/annie_mel.ts
import type { MatchupSummary } from "../_types";

export const annie_mel: MatchupSummary = {
  champs: ["annie", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 애니 평타, Q의 [[PROJECTILE]]를 반사할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 애니 W, E(쉴드 반사 데미지), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can reflect Annie's basic attacks and Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Annie's W, E (shield reflect damage), or R. [[NOT_EXIST]]"],
    },
  },
};
