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
      ko: ["W의 [[REFLECT]]로 문도 박사 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 문도 박사 평타, W, E(평타, [[ON_KILL]] [[KNOCKBACK]] 피해)를 [[REFLECT]]할 수 없음. [[NOT_EXIST]] \n E의 [[KNOCKBACK]] 피해는 영상으로 [[CLIP:https://www.youtube.com/shorts/-4R3iSL3Hxc?feature=share]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Dr. Mundo's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Dr. Mundo's basic attacks, W, or E (basic attack, [[ON_KILL]] [[KNOCKBACK]] damage). [[NOT_EXIST]] \n See the clip for E's [[KNOCKBACK]] damage. [[CLIP:https://www.youtube.com/shorts/-4R3iSL3Hxc?feature=share]]"],
    },
  },
};
