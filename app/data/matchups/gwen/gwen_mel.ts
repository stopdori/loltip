// app/data/matchups/gwen/gwen_mel.ts
import type { MatchupSummary } from "../_types";

export const gwen_mel: MatchupSummary = {
  champs: ["gwen", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gwen: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 그웬 R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 그웬 평타, Q를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 그웬 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Gwen's R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Gwen's basic attacks or Q. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Gwen's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
