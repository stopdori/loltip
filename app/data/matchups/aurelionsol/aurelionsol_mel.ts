// app/data/matchups/aurelionsol/aurelionsol_mel.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_mel: MatchupSummary = {
  champs: ["aurelionsol", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 아우렐리온 솔 평타 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 아우렐리온 솔 Q, E, R, [[EMPOWERED]] R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 아우렐리온 솔 W의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[ROOT]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Aurelion Sol's basic attack [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Aurelion Sol's Q, E, R, or [[EMPOWERED]] R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Aurelion Sol's W [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Aurelion Sol's Q [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
