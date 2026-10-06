// app/data/matchups/mel/mel_twitch.ts
import type { MatchupSummary } from "../_types";

export const mel_twitch: MatchupSummary = {
  champs: ["mel", "twitch"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 트위치 평타(일반, R [[EMPOWERED]]), W의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, W는 도착 지점까지는 [[PROJECTILE]] 판정. 도착한 [[ZONE]]은 [[REFLECT]] 불가능.", 
        "W의 [[REFLECT]]로 트위치 E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Twitch's basic attacks (normal, R [[EMPOWERED]]) and W [[PROJECTILE]]. [[EXIST]] \n However, W counts as a [[PROJECTILE]] until it reaches its destination. The [[ZONE]] at the destination cannot be [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Twitch's E. [[NOT_EXIST]]"],
    },
    twitch: {
      ko: [],
      en: [],
    },
  },
};
