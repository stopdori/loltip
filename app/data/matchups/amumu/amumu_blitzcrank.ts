// app/data/matchups/amumu/amumu_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const amumu_blitzcrank: MatchupSummary = {
  champs: ["amumu", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[CC_BUFFER]]로 블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SILENCE]]는 남아있음."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]] and continue [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음.",
        "블리츠크랭크 R의 [[SILENCE]]으로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Amumu's Q [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[SILENCE]] effect still applies."],
    },
  },
};
