// app/data/matchups/kled/kled_mel.ts
import type { MatchupSummary } from "../_types";

export const kled_mel: MatchupSummary = {
  champs: ["kled", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kled: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 클레드 승마폼 Q / 낙마폼 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 클레드 승마폼 평타, R / 낙마폼 평타을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Kled's Mounted Form Q / Dismounted Form Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Kled's Mounted Form basic attacks, R / Dismounted Form basic attacks. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Kled's Mounted Form E / Dismounted Form Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
