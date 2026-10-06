// app/data/matchups/mel/mel_senna.ts
import type { MatchupSummary } from "../_types";

export const mel_senna: MatchupSummary = {
  champs: ["mel", "senna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 세나 W, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, W는 [[PROJECTILE]]만 [[REFLECT]] 가능. \n 단, R은 중심 피해 범위 부분만 [[REFLECT]] 가능.", 
        "W의 [[REFLECT]]로 세나 평타(일반, [[STACKING]] 획득 공격), W([[AOE]] 효과), R([[SHIELD]] 범위)를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Senna's W and R [[PROJECTILE]]. [[EXIST]] \n However, only W's [[PROJECTILE]] can be [[REFLECT]]ed. \n However, only R's central damage area can be [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Senna's basic attacks (normal, [[STACKING]] gain attack), W ([[AOE]] effect), or R ([[SHIELD]] area). [[NOT_EXIST]]"],
    },
    senna: {
      ko: [],
      en: [],
    },
  },
};
