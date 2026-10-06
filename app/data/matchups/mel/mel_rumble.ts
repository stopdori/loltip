// app/data/matchups/mel/mel_rumble.ts
import type { MatchupSummary } from "../_types";

export const mel_rumble: MatchupSummary = {
  champs: ["mel", "rumble"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 럼블 E(일반, [[EMPOWERED]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 럼블 평타(일반, 과열), Q(일반, [[EMPOWERED]]), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Rumble's E (normal, [[EMPOWERED]]) [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Rumble's basic attacks (normal, overheated), Q (normal, [[EMPOWERED]]), or R. [[NOT_EXIST]]"],
    },
    rumble: {
      ko: [],
      en: [],
    },
  },
};
