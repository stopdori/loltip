// app/data/matchups/galio/galio_mel.ts
import type { MatchupSummary } from "../_types";

export const galio_mel: MatchupSummary = {
  champs: ["galio", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    galio: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 갈리오 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 갈리오 평타(일반, [[EMPOWERED]]), W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 갈리오 R의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
      "E의 [[ROOT]]으로 갈리오 E의 [[DASH]], W의 [[SKILL_CHARGED]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Galio's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Galio's basic attacks (normal, [[EMPOWERED]]), W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Galio's R [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Galio's E [[DASH]] and W [[SKILL_CHARGED]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
