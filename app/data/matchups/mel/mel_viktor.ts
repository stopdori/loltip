// app/data/matchups/mel/mel_viktor.ts
import type { MatchupSummary } from "../_types";

export const mel_viktor: MatchupSummary = {
  champs: ["mel", "viktor"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 빅토르 평타(일반), Q, E(일반, E [[EVOLVED]] 추가 효과)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q가 [[REFLECT]]되어도, Q [[EVOLVED]]의 [[MS_UP]] 효과가 발동하고, Q [[EMPOWERED]] 평타도 사용할 수 있음. \n 단, W [[EVOLVED]]의 [[SLOW]] 효과도 [[REFLECT]]에 적용.", 
        "W의 [[REFLECT]]로 빅토르 평타(Q로 인한 [[EMPOWERED]]), W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Viktor's basic attacks (normal), Q, and E (normal, E [[EVOLVED]] bonus effect) [[PROJECTILE]]. [[EXIST]] \n However, even if Q is [[REFLECT]]ed, the Q [[EVOLVED]] [[MS_UP]] still triggers, and the Q [[EMPOWERED]] basic attack can still be used. \n However, the W [[EVOLVED]] [[SLOW]] effect also applies to the [[REFLECT]].", 
        "W [[REFLECT]] cannot [[REFLECT]] Viktor's basic attacks ([[EMPOWERED]] by Q), W, or R. [[NOT_EXIST]]"],
    },
    viktor: {
      ko: [],
      en: [],
    },
  },
};
