// app/data/matchups/mel/mel_naafiri.ts
import type { MatchupSummary } from "../_types";

export const mel_naafiri: MatchupSummary = {
  champs: ["mel", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 나피리 Q1, Q2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 나피리 평타(나피리, 무리), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 나피리 R의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
      "E의 [[ROOT]]으로 나피리 E, R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Naafiri's Q1 and Q2 [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Naafiri's basic attacks (Naafiri, packmates), E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Naafiri's R [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Naafiri's E and R [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
