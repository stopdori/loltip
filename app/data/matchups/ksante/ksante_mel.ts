// app/data/matchups/ksante/ksante_mel.ts
import type { MatchupSummary } from "../_types";

export const ksante_mel: MatchupSummary = {
  champs: ["ksante", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ksante: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 크산테 Q3의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 크산테 (일반, 총공세) 평타, W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 크산테 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] K'Sante's Q3 [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] K'Sante's (normal, All Out) basic attacks, W, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt K'Sante's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
