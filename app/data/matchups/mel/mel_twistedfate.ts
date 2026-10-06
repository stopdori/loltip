// app/data/matchups/mel/mel_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const mel_twistedfate: MatchupSummary = {
  champs: ["mel", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 트위스티드 페이트 평타(일반, E [[EMPOWERED]]), Q, W의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 W는 카드 종류에 따른 효과가 그대로 적용.", 
        "E의 [[ROOT]]으로 트위스티드 페이트 R의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]"
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Twisted Fate's basic attacks (normal, E [[EMPOWERED]]), Q, and W [[PROJECTILE]]. [[EXIST]] \n However, a [[REFLECT]]ed W keeps the effect of its card type.", 
        "E [[ROOT]] can interrupt Twisted Fate's R [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]"],
    },
    twistedfate: {
      ko: [],
      en: [],
    },
  },
};
