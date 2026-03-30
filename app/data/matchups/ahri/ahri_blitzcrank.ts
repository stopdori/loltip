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
      ko: ["아리 E의 [[CHARM]]으로 블리츠크랭크 R의 [[CAST_COMMIT]]을 막을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot stop Blitzcrank's R [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    blitzcrank: {
      ko: ["블리츠크랭크(블랭, 블츠, 블크) Q, E의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음", "블랭 R의 [[SILENCE]]으로 아리 R을 끊을 수 없음.\n단, [[SILENCE]]은 남아있음"],
      en: ["Blitzcrank's Q and E can interrupt Ahri's R\nBlitzcrank's R [[SILENCE]] cannot interrupt Ahri's R. However, the [[SILENCE]] still applies."],
    },
  },
};
