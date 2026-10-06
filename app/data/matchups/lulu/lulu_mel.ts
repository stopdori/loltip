// app/data/matchups/lulu/lulu_mel.ts
import type { MatchupSummary } from "../_types";

export const lulu_mel: MatchupSummary = {
  champs: ["lulu", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lulu: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 룰루 평타(룰루, 픽스), Q, W([[POLYMORPH]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, W([[POLYMORPH]])는 룰루가 동물로 변신.", 
        "W의 [[REFLECT]]로 룰루 E, R([[AIRBORNE]])을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Lulu's basic attacks (Lulu, Pix), Q, and W ([[POLYMORPH]]) [[PROJECTILE]]. [[EXIST]] \n However, W ([[POLYMORPH]]) turns Lulu herself into a critter.", 
        "W [[REFLECT]] cannot [[REFLECT]] Lulu's E or R ([[AIRBORNE]]). [[NOT_EXIST]]"],
    },
  },
};
