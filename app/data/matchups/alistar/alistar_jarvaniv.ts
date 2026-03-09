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
      ko: ["알리스타 Q, W로 자르반 EQ를 끊을 수 있음", "알리스타 E의 [[STUN]]로 자르반 EQ를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 자르반 EQ의 [[AIRBORNE]], W의 [[SLOW]]를 해제할 수 있음", "알리스타 W로 자르반 R(벽)을 넘을 수 있음"],
      en: ["Alistar's Q and W can interrupt Jarvan IV's EQ", "Alistar's E [[STUN]] cannot interrupt Jarvan IV's EQ. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Jarvan IV's EQ [[AIRBORNE]], W [[SLOW]]", "Alistar's W can jump over Jarvan IV's R (wall)"],
    },
    jarvaniv: {
      ko: [],
      en: [],
    },
  },
};
