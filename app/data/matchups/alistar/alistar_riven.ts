// app/data/matchups/alistar/alistar_riven.ts
import type { MatchupSummary } from "../_types";

export const alistar_riven: MatchupSummary = {
  champs: ["alistar", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 리븐 Q, E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 리븐 Q, E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 리븐 Q3의 [[AIRBORNE]], W의 [[STUN]]를 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt 리븐 Q and E", "Alistar's E [[STUN]] cannot interrupt 리븐 Q and E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse 리븐 Q3 [[AIRBORNE]], W [[STUN]]"],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
