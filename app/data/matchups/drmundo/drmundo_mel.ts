// app/data/matchups/drmundo/drmundo_mel.ts
import type { MatchupSummary } from "../_types";

export const drmundo_mel: MatchupSummary = {
  champs: ["drmundo", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 멜 E의 [[ROOT]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Mel's E [[ROOT]] once.\nAt this time, P also [[DROP]]s a canister."],
    },
    mel: {
      ko: ["멜 W의 [[REFLECT]]로 문도 박사 Q의 [[PROJECTILE]]를 반사할 수 있음."],
      en: ["W [[REFLECT]] can reflect Dr. Mundo's Q [[PROJECTILE]]."],
    },
  },
};
