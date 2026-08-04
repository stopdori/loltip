// app/data/matchups/alistar/alistar_khazix.ts
import type { MatchupSummary } from "../_types";

export const alistar_khazix: MatchupSummary = {
  champs: ["alistar", "khazix"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 카직스 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 카직스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 카직스 W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Q and W can interrupt Kha'Zix's E", "E [[STUN]] cannot interrupt Kha'Zix's E. However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Kha'Zix's W [[SLOW]]"],
    },
    khazix: {
      ko: [],
      en: [],
    },
  },
};
