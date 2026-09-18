// app/data/matchups/evelynn/evelynn_vladimir.ts
import type { MatchupSummary } from "../_types";

export const evelynn_vladimir: MatchupSummary = {
  champs: ["evelynn", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]] \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사."],
      en: ["W [[CHARM]] can interrupt Vladimir's E [[SKILL_CHARGED]]. [[EXIST]] \n However, the [[SKILL_CHARGED]] charged up until the moment of impact is still released."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
