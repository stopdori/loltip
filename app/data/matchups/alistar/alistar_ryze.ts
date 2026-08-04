// app/data/matchups/alistar/alistar_ryze.ts
import type { MatchupSummary } from "../_types";

export const alistar_ryze: MatchupSummary = {
  champs: ["alistar", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 라이즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 라이즈 W의 [[SLOW]], EW의 [[ROOT]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Ryze's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Ryze's W [[SLOW]] and EW [[ROOT]]."],
    },
    ryze: {
      ko: [],
      en: [],
    },
  },
};
