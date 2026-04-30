// app/data/matchups/aatrox/aatrox_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const aatrox_blitzcrank: MatchupSummary = {
  champs: ["aatrox", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.",
        "블리츠크랭크 R의 [[SILENCE]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Aatrox's E [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Aatrox's E [[DASH]]. \n However, the [[SILENCE]] effect still applies."],
    },
  },
};
