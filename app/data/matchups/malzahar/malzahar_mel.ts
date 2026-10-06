// app/data/matchups/malzahar/malzahar_mel.ts
import type { MatchupSummary } from "../_types";

export const malzahar_mel: MatchupSummary = {
  champs: ["malzahar", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malzahar: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 말자하 평타의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 말자하 Q, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Malzahar's basic attack [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Malzahar's Q, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Malzahar's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
