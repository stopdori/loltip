// app/data/matchups/alistar/alistar_blitzcrank.ts
import type { MatchupSummary } from "../_types";

export const alistar_blitzcrank: MatchupSummary = {
  champs: ["alistar", "blitzcrank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 R의 [[CC_CLEANSE]]로 블리츠 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 해제할 수 있음."],
      en: ["Alistar's R [[CC_CLEANSE]] can cleanse Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]]."],
    },
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음.",
        "블리츠크랭크 R의 [[SILENCE]]으로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Blitzcrank's Q [[GRAB]] and E [[AIRBORNE]] can interrupt Alistar's W [[DASH]].",
        "Blitzcrank's R [[SILENCE]] cannot interrupt Alistar's W [[DASH]]. \n However, the [[SILENCE]] effect still applies."],
    },
  },
};
