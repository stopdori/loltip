// app/data/matchups/alistar/alistar_skarner.ts
import type { MatchupSummary } from "../_types";

export const alistar_skarner: MatchupSummary = {
  champs: ["alistar", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 스카너 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 스카너 Q, W 의 [[SLOW]] / E의 [[SUPPRESS]] [[STUN]] / R의 [[SUPPRESS]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Skarner's E [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Skarner's Q and W [[SLOW]], E [[SUPPRESS]][[STUN]], and R [[SUPPRESS]]."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
