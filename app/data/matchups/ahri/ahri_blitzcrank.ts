// app/data/matchups/ahri/ahri_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const ahri_blitzcrank: MatchupSummary = {
  champs: ["ahri", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    blitzcrank: {
      ko: ["블리츠크랭크(블랭, 블츠, 블크) Q의 [[GRAB]], E의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", 
        "블랭 R의 [[SILENCE]]으로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Ahri's R [[DASH]].", "Blitzcrank's R [[SILENCE]] cannot interrupt Ahri's R [[DASH]]. However, the [[SILENCE]] still applies."],
    },
  },
};
