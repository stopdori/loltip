// app/data/matchups/alistar/alistar_velkoz.ts
import type { MatchupSummary } from "../_types";

export const alistar_velkoz: MatchupSummary = {
  champs: ["alistar", "velkoz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 벨코즈 Q의 [[SLOW]], E의 [[AIRBORNE]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Vel'Koz's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Vel'Koz's Q [[SLOW]] and E [[AIRBORNE]]."],
    },
    velkoz: {
      ko: [],
      en: [],
    },
  },
};
