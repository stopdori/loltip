// app/data/matchups/blitzcrank/blitzcrank_malphite.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_malphite: MatchupSummary = {
  champs: ["blitzcrank", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: [],
      en: [],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 블리츠 크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[SILENCE]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Blitzcrank's Q [[GRAB]], E [[AIRBORNE]] and R [[SILENCE]]. \n However, [[SILENCE]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
