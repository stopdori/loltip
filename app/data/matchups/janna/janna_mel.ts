// app/data/matchups/janna/janna_mel.ts
import type { MatchupSummary } from "../_types";

export const janna_mel: MatchupSummary = {
  champs: ["janna", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    janna: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 잔나 평타, Q, W의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 잔나 Q의 효과는 [[SKILL_CHARGED]] 시간에 비례.", 
        "W의 [[REFLECT]]로 잔나 R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Janna's basic attacks, Q, and W [[PROJECTILE]]. [[EXIST]] \n However, Janna's Q effect scales with its [[SKILL_CHARGED]] time.", 
        "W [[REFLECT]] cannot [[REFLECT]] Janna's R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Janna's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
