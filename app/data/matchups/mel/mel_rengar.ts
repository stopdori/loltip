// app/data/matchups/mel/mel_rengar.ts
import type { MatchupSummary } from "../_types";

export const mel_rengar: MatchupSummary = {
  champs: ["mel", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 렝가 E(일반, [[EMPOWERED]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 렝가 평타, Q, W를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 렝가 P, R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Rengar's E (normal, [[EMPOWERED]]) [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Rengar's basic attacks, Q, or W. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Rengar's P and R [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
