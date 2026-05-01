// app/data/matchups/blitzcrank/blitzcrank_camille.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_camille: MatchupSummary = {
  champs: ["blitzcrank", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 카밀 E(그렙, 대기, 돌진단계)의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]이 카밀 E의 대기단계에 걸려 있다면 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    camille: {
      ko: ["카밀 E(투척단계)의 [[CC_BUFFER]]로 블리츠크랭크 R의 [[SILENCE]] 효과를 잠시 무시하고 다음 단계를 시전할 수 있음. \n 단, 카밀 E의 그렙단계가 종료된 후 대기단계에 [[SILENCE]]이 남아있다면 종료됨."],
      en: [],
    },
  },
};
