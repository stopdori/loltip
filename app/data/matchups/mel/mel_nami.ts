// app/data/matchups/mel/mel_nami.ts
import type { MatchupSummary } from "../_types";

export const mel_nami: MatchupSummary = {
  champs: ["mel", "nami"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 나미 평타, Q, W, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, W는 [[REFLECT]]되기 전의 [[CHAIN]]된 상태와 무관하게 2회 [[CHAIN]] 가능.", 
        "W의 [[REFLECT]]로 나미 E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Nami's basic attacks, Q, W, and R [[PROJECTILE]]. [[EXIST]] \n However, W can [[CHAIN]] twice, regardless of how many times it had [[CHAIN]]ed before being [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Nami's E. [[NOT_EXIST]]"],
    },
    nami: {
      ko: [],
      en: [],
    },
  },
};
