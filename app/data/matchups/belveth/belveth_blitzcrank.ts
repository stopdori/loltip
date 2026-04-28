// app/data/matchups/belveth/belveth_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const belveth_blitzcrank: MatchupSummary = {
  champs: ["belveth", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]으로 끊기지 않음. \n 단, [[GRAB]], [[AIRBORNE]], [[SILENCE]]은 남아있음."],
      en: [""],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: [],
    },
  },
};
