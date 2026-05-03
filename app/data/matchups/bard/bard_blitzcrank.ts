// app/data/matchups/bard/bard_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const bard_blitzcrank: MatchupSummary = {
  champs: ["bard", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 있음.",
        "블리츠크랭크 R의 [[SILENCE]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Bard's E (wall-travel) [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Bard's E (wall-travel) [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
