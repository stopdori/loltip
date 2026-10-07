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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[CC_CLEANSE]]로 스카너 Q, W의 [[SLOW]] / E의 [[SUPPRESS]] [[STUN]] / R의 [[SUPPRESS]]을 해제할 수 있음. [[EXIST]]"],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[CC_CLEANSE]] can remove Skarner's Q, W [[SLOW]] / E [[SUPPRESS]] [[STUN]] / R [[SUPPRESS]]. [[EXIST]]"],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
