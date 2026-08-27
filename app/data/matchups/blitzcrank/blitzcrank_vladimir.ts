// app/data/matchups/blitzcrank/blitzcrank_vladimir.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_vladimir: MatchupSummary = {
  champs: ["blitzcrank", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사."],
      en: ["Q [[GRAB]], E [[AIRBORNE]], and R [[SILENCE]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
