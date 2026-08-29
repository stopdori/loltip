// app/data/matchups/draven/draven_vladimir.ts
import type { MatchupSummary } from "../_types";

export const draven_vladimir: MatchupSummary = {
  champs: ["draven", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사."],
      en: ["E [[KNOCKBACK]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
