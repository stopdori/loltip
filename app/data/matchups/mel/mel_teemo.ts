// app/data/matchups/mel/mel_teemo.ts
import type { MatchupSummary } from "../_types";

export const mel_teemo: MatchupSummary = {
  champs: ["mel", "teemo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 티모 평타(일반, E), Q, R(버섯)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, R은 도착 지점까지는 [[PROJECTILE]] 판정. 설치된 [[TRAP]]은 [[REFLECT]] 불가능."],
      en: ["W [[REFLECT]] can [[REFLECT]] Teemo's basic attacks (normal, E), Q, and R (mushroom) [[PROJECTILE]]. [[EXIST]] \n However, R counts as a [[PROJECTILE]] until it reaches its destination. A placed [[TRAP]] cannot be [[REFLECT]]ed."],
    },
    teemo: {
      ko: [],
      en: [],
    },
  },
};
