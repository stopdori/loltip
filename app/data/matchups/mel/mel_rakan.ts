// app/data/matchups/mel/mel_rakan.ts
import type { MatchupSummary } from "../_types";

export const mel_rakan: MatchupSummary = {
  champs: ["mel", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 라칸 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 라칸 평타, W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Rakan's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Rakan's basic attacks, W, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Rakan's W and E [[DASH]]. [[EXIST]]"],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
