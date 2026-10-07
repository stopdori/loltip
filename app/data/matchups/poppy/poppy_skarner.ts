// app/data/matchups/poppy/poppy_skarner.ts
import type { MatchupSummary } from "../_types";

export const poppy_skarner: MatchupSummary = {
  champs: ["poppy", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    poppy: {
      ko: ["W의 [[ANTI_DASH]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 막을 수 없음. [[NOT_EXIST]]", 
        "E의 [[KNOCKBACK]], [[STUN]] / R(짧은,긴)의 [[AIRBORNE]], [[KNOCKBACK]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],

      en: ["W [[ANTI_DASH]] cannot block Skarner's E [[IGNORE_TERRAIN]]. [[NOT_EXIST]]", 
        "E [[KNOCKBACK]], [[STUN]] / R (short, long) [[AIRBORNE]], [[KNOCKBACK]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
