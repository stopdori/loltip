// app/data/matchups/alistar/alistar_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const alistar_jarvaniv: MatchupSummary = {
  champs: ["alistar", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 자르반 EQ의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 자르반 EQ의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 자르반 EQ의 [[AIRBORNE]], W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Q and W can interrupt Jarvan IV's EQ", "E [[STUN]] cannot interrupt Jarvan IV's EQ. However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Jarvan IV's EQ [[AIRBORNE]], W [[SLOW]]", "W can jump over Jarvan IV's R (wall)"],
    },
    jarvaniv: {
      ko: [],
      en: [],
    },
  },
};
