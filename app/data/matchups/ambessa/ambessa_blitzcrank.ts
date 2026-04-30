// app/data/matchups/ambessa/ambessa_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const ambessa_blitzcrank: MatchupSummary = {
  champs: ["ambessa", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[UNSTOPPABLE]]로 블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]를 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[SILENCE]]은 남아있음."],
      en: ["Ambessa's R [[UNSTOPPABLE]] can ignore Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]]. \n However, the [[SILENCE]] still applies after [[UNSTOPPABLE]] ends."],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 암베사 P의 [[DASH]]을 끊을 수 있음.",
        "블리츠크랭크 R의 [[SILENCE]]으로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Ambessa's P [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[SILENCE]] effect still applies."],
    },
  },
};
