// app/data/matchups/mel/mel_nocturne.ts
import type { MatchupSummary } from "../_types";

export const mel_nocturne: MatchupSummary = {
  champs: ["mel", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 녹턴 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q [[REFLECT]]로 생성된 [[ZONE]]의 [[BUFF]] 효과인 [[AD_UP]], [[MS_UP]] 효과도 멜 에게 적용.", 
        "W의 [[REFLECT]]로 녹턴 평타(일반, [[EMPOWERED]]), E, R2를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Nocturne's Q [[PROJECTILE]]. [[EXIST]] \n However, the [[ZONE]] created by the [[REFLECT]]ed Q also grants its [[BUFF]] effects, [[AD_UP]] and [[MS_UP]], to Mel.", 
        "W [[REFLECT]] cannot [[REFLECT]] Nocturne's basic attacks (normal, [[EMPOWERED]]), E, or R2. [[NOT_EXIST]]"],
    },
    nocturne: {
      ko: [],
      en: [],
    },
  },
};
