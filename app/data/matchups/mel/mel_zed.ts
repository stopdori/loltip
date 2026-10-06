// app/data/matchups/mel/mel_zed.ts
import type { MatchupSummary } from "../_types";

export const mel_zed: MatchupSummary = {
  champs: ["mel", "zed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 제드 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 모든 Q는 제드 본체에게 발사.", 
        "W의 [[REFLECT]]로 제드 평타, W(그림자 [[DASH]]), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Zed's Q [[PROJECTILE]]. [[EXIST]] \n However, all [[REFLECT]]ed Qs are fired at Zed's real body.", 
        "W [[REFLECT]] cannot [[REFLECT]] Zed's basic attacks, W (shadow [[DASH]]), E, or R. [[NOT_EXIST]]"],
    },
    zed: {
      ko: [],
      en: [],
    },
  },
};
