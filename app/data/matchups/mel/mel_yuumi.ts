// app/data/matchups/mel/mel_yuumi.ts
import type { MatchupSummary } from "../_types";

export const mel_yuumi: MatchupSummary = {
  champs: ["mel", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 유미 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 유미 R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 유미 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
    "E의 [[ROOT]]으로 유미 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Yuumi's basic attacks and Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Yuumi's R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Yuumi's W [[DASH]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Yuumi's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
