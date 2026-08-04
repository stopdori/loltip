// app/data/matchups/alistar/alistar_karthus.ts
import type { MatchupSummary } from "../_types";

export const alistar_karthus: MatchupSummary = {
  champs: ["alistar", "karthus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 카서스 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 카서스 W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Karthus's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Karthus's W [[SLOW]]."],
    },
    karthus: {
      ko: [],
      en: [],
    },
  },
};
