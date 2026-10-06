// app/data/matchups/mel/mel_samira.ts
import type { MatchupSummary } from "../_types";

export const mel_samira: MatchupSummary = {
  champs: ["mel", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 사미라 원거리 평타, Q, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, R은 멜 뒤로 숨으면 다른대상도 맞지 않음.", 
        "W의 [[REFLECT]]로 사미라 W, E을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 사미라 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Samira's ranged basic attacks, Q, and R [[PROJECTILE]]. [[EXIST]] \n However, if allies hide behind Mel during R, other targets are not hit either.", 
        "W [[REFLECT]] cannot [[REFLECT]] Samira's W or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Samira's E [[DASH]] and R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
