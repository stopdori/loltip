// app/data/matchups/alistar/alistar_sion.ts
import type { MatchupSummary } from "../_types";

export const alistar_sion: MatchupSummary = {
  champs: ["alistar", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 사이온 Q의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 사이온 E의 [[SLOW]] / Q, R의 [[SLOW]] [[AIRBORNE]] [[STUN]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Sion's Q [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Sion's E [[SLOW]], and Q and R [[SLOW]][[AIRBORNE]][[STUN]]."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
