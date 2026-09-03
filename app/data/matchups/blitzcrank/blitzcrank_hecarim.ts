// app/data/matchups/blitzcrank/blitzcrank_hecarim.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_hecarim: MatchupSummary = {
  champs: ["blitzcrank", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Hecarim's E [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Hecarim's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    hecarim: {
      ko: ["R의 [[UNSTOPPABLE]]로 블리츠 크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[SILENCE]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Blitzcrank's Q [[GRAB]], E [[AIRBORNE]] and R [[SILENCE]]. \n However, [[SILENCE]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
