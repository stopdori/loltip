// app/data/matchups/kayle/kayle_mel.ts
import type { MatchupSummary } from "../_types";

export const kayle_mel: MatchupSummary = {
  champs: ["kayle", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kayle: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 케일 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 케일 평타(일반, 6레벨, 11레벨, 16레벨), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Kayle's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Kayle's basic attacks (normal, level 6, level 11, level 16), E, or R. [[NOT_EXIST]]"],
    },
  },
};
