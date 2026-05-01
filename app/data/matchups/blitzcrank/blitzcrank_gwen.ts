// app/data/matchups/blitzcrank/blitzcrank_gwen.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_gwen: MatchupSummary = {
  champs: ["blitzcrank", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 그웬 E의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 그웬 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: [""],
    },
    gwen: {
      ko: ["그웬 W로 블리츠크랭크 Q, R을 범위 밖에서 맞지 않음"],
      en: ["Gwen's W prevents Blitzcrank's Q and R from hitting when outside the zone"],
    },
  },
};
