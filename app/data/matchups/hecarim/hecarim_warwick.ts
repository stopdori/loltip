// app/data/matchups/hecarim/hecarim_warwick.ts
import type { MatchupSummary } from "../_types";

export const hecarim_warwick: MatchupSummary = {
  champs: ["hecarim", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 워윅 E의 [[FEAR]], R의 [[SUPPRESS]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[FEAR]]는 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Warwick's R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Warwick's E [[FEAR]] and R [[SUPPRESS]]. \n However, [[FEAR]] remains after [[UNSTOPPABLE]] ends."],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
