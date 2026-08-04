// app/data/matchups/alistar/alistar_warwick.ts
import type { MatchupSummary } from "../_types";

export const alistar_warwick: MatchupSummary = {
  champs: ["alistar", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 워윅 E의 [[FEAR]], R의 [[SUPPRESS]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Warwick's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Warwick's E [[FEAR]] and R [[SUPPRESS]]."],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
