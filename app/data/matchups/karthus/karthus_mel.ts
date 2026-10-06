// app/data/matchups/karthus/karthus_mel.ts
import type { MatchupSummary } from "../_types";

export const karthus_mel: MatchupSummary = {
  champs: ["karthus", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    karthus: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 카서스 평타의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 카서스 Q, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 카서스 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Karthus's basic attack [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Karthus's Q, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Karthus's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
