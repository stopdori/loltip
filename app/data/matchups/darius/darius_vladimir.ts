// app/data/matchups/darius/darius_vladimir.ts
import type { MatchupSummary } from "../_types";

export const darius_vladimir: MatchupSummary = {
  champs: ["darius", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    darius: {
      ko: ["E의 [[GRAB]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사."],
      en: ["E [[GRAB]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
