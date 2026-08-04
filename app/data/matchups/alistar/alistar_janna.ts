// app/data/matchups/alistar/alistar_janna.ts
import type { MatchupSummary } from "../_types";

export const alistar_janna: MatchupSummary = {
  champs: ["alistar", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 잔나 Q의 [[AIRBORNE]], W의 [[SLOW]], R의 [[KNOCKBACK]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Janna's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Janna's Q [[AIRBORNE]], W [[SLOW]], and R [[KNOCKBACK]]."],
    },
    janna: {
      ko: [],
      en: [],
    },
  },
};
