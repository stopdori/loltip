// app/data/matchups/azir/azir_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const azir_blitzcrank: MatchupSummary = {
  champs: ["azir", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: [],
      en: [],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 아지르 E의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Azir's E [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Azir's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
