// app/data/matchups/graves/graves_mel.ts
import type { MatchupSummary } from "../_types";

export const graves_mel: MatchupSummary = {
  champs: ["graves", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    graves: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 그레이브즈 평타, Q, W, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "E의 [[ROOT]]으로 그레이브즈 E, R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Graves's basic attacks, Q, W, and R [[PROJECTILE]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Graves's E and R [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
