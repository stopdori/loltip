// app/data/matchups/mel/mel_nautilus.ts
import type { MatchupSummary } from "../_types";

export const mel_nautilus: MatchupSummary = {
  champs: ["mel", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 노틸러스 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 노틸러스 평타, W([[ON_HIT]]), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Nautilus's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Nautilus's basic attacks, W ([[ON_HIT]]), E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Nautilus's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
