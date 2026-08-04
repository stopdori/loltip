// app/data/matchups/alistar/alistar_xerath.ts
import type { MatchupSummary } from "../_types";

export const alistar_xerath: MatchupSummary = {
  champs: ["alistar", "xerath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 제라스 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 제라스 W의 [[SLOW]], E의 [[STUN]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Xerath's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Xerath's W [[SLOW]] and E [[STUN]]."],
    },
    xerath: {
      ko: [],
      en: [],
    },
  },
};
