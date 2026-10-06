// app/data/matchups/mel/mel_sejuani.ts
import type { MatchupSummary } from "../_types";

export const mel_sejuani: MatchupSummary = {
  champs: ["mel", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 세주아니 E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, R은 [[REFLECT]]되기 전에 이동한 [[DISTANCE_SCALE]]와 무관하게 멜에게서 새로 생성되는 판정.", 
        "W의 [[REFLECT]]로 세주아니 평타, Q, W1, W2를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 세주아니 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Sejuani's E and R [[PROJECTILE]]. [[EXIST]] \n However, R is recalculated from Mel, regardless of the [[DISTANCE_SCALE]] traveled before being [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Sejuani's basic attacks, Q, W1, or W2. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Sejuani's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    sejuani: {
      ko: [],
      en: [],
    },
  },
};
