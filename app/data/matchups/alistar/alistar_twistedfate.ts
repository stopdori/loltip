// app/data/matchups/alistar/alistar_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const alistar_twistedfate: MatchupSummary = {
  champs: ["alistar", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 트페 R2의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 트페 W(레드)의 [[SLOW]], W(골드)의 [[STUN]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Twisted Fate's R2 [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Twisted Fate's W (Red) [[SLOW]] and W (Gold) [[STUN]]."],
    },
    twistedfate: {
      ko: [],
      en: [],
    },
  },
};
