// app/data/matchups/akali/akali_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const akali_blitzcrank: MatchupSummary = {
  champs: ["akali", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [],
      en: [],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음.",
        "블리츠크랭크 R의 [[SILENCE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[SILENCE]] effect still applies."],
    },
  },
};
