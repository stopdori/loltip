// app/data/matchups/malphite/malphite_mel.ts
import type { MatchupSummary } from "../_types";

export const malphite_mel: MatchupSummary = {
  champs: ["malphite", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 멜 E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Mel's E [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    mel: {
      ko: ["멜 W의 [[REFLECT]]로 말파이트 Q의 [[PROJECTILE]]를 반사할 수 있음."],
      en: ["W [[REFLECT]] can reflect Malphite's Q [[PROJECTILE]]."],
    },
  },
};
