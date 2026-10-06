// app/data/matchups/mel/mel_quinn.ts
import type { MatchupSummary } from "../_types";

export const mel_quinn: MatchupSummary = {
  champs: ["mel", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 퀸 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 퀸 P(약점 [[MARK]]), E, R(해제 [[AOE]] 피해)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]]", 
      "E의 [[ROOT]]으로 퀸 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Quinn's basic attacks and Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Quinn's P (Vulnerable [[MARK]]), E, or R (cancel [[AOE]] damage). [[NOT_EXIST]]", 
        "E [[ROOT]] can cancel Quinn's R [[SKILL_CHANNEL]] and R [[TRANSFORM]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Quinn's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
