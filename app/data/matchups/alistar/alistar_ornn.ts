// app/data/matchups/alistar/alistar_ornn.ts
import type { MatchupSummary } from "../_types";

export const alistar_ornn: MatchupSummary = {
  champs: ["alistar", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 오른 E, R2를 끊을 수 있음", "알리스타 E의 [[STUN]]로 오른 E, R2를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 오른 Q R의 [[SLOW]], E R2의 [[AIRBORNE]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Ornn's E, R2", "Alistar's E [[STUN]] cannot interrupt Ornn's E, R2. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Ornn's Q R [[SLOW]], E R2 [[AIRBORNE]]"],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
