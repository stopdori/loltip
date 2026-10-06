// app/data/matchups/leona/leona_mel.ts
import type { MatchupSummary } from "../_types";

export const leona_mel: MatchupSummary = {
  champs: ["leona", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    leona: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 레오나 E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 레오나 P의 [[MARK]]도 함께 [[REFLECT]].", 
        "W의 [[REFLECT]]로 레오나 평타, Q, W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 레오나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Leona's E [[PROJECTILE]]. [[EXIST]] \n However, Leona's P [[MARK]] is [[REFLECT]]ed as well.", 
        "W [[REFLECT]] cannot [[REFLECT]] Leona's basic attacks, Q, W, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Leona's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
