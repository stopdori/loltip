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
      ko: ["아무무 Q로 블랭 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 블랭 Q, E, R의 데미지는 유효하고 R의 [[SILENCE]]도 남아있음."],
      en: ["Amumu's Q is affected by Blitzcrank's Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]], but can still move if the dash phase activates.\nHowever, damage from Blitzcrank's Q, E, and R is applied and [[SILENCE]] from R remains active."],
    },
    blitzcrank: {
      ko: [],
      en: [],
    },
  },
};
