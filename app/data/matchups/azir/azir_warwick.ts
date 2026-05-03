// app/data/matchups/azir/azir_warwick.ts
import type { MatchupSummary } from "../_types";

export const azir_warwick: MatchupSummary = {
  champs: ["azir", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Warwick's R [[SKILL_CHANNEL]]."],
    },
    warwick: {
      ko: ["워윅 Q, R의 [[UNSTOPPABLE]] [[DASH]]으로 아지르 R의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["Warwick's Q and R [[UNSTOPPABLE]] [[DASH]] can ignore Azir's R [[KNOCKBACK]]."],
    },
  },
};
