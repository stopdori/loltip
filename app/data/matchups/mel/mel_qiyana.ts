// app/data/matchups/mel/mel_qiyana.ts
import type { MatchupSummary } from "../_types";

export const mel_qiyana: MatchupSummary = {
  champs: ["mel", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 키아나 Q(숲, 땅, 물), R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 키아나 평타, Q(일반), R([[ZONE]] [[DETONATE]])을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 키아나 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Qiyana's Q (Grass, Terrain, Water) and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Qiyana's basic attacks, Q (normal), or R ([[ZONE]] [[DETONATE]]). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Qiyana's W and E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
