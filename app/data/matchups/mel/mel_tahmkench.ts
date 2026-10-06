// app/data/matchups/mel/mel_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const mel_tahmkench: MatchupSummary = {
  champs: ["mel", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 탐켄치 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 탐켄치 평타, W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Tahm Kench's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Tahm Kench's basic attacks, W, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Tahm Kench's W [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    tahmkench: {
      ko: ["QR의 [[SUPPRESS]]을 멜 W의 [[REFLECT]] 효과를 받고 있을 때 사용하면, \n Q의 [[PROJECTILE]]가 [[REFLECT]]되어 R이 발동하지 않음."],
      en: ["If QR [[SUPPRESS]] is used while Mel's W [[REFLECT]] is active, \n the Q [[PROJECTILE]] is [[REFLECT]]ed and R does not activate."],
    },
  },
};
