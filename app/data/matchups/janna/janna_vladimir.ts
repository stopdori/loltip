// app/data/matchups/janna/janna_vladimir.ts
import type { MatchupSummary } from "../_types";

export const janna_vladimir: MatchupSummary = {
  champs: ["janna", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
