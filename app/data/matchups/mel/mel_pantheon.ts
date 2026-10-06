// app/data/matchups/mel/mel_pantheon.ts
import type { MatchupSummary } from "../_types";

export const mel_pantheon: MatchupSummary = {
  champs: ["mel", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 판테온 Q([[SKILL_CHARGED]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 판테온 평타, Q(짧은), E, R(창, 낙하 데미지)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 판테온 R의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
      "E의 [[ROOT]]으로 판테온 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Pantheon's Q ([[SKILL_CHARGED]]) [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Pantheon's basic attacks, Q (short), E, or R (spear, landing damage). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Pantheon's R [[SKILL_CHANNEL_MOVEMENT]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "E [[ROOT]] cannot interrupt Pantheon's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
