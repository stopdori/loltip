// app/data/matchups/alistar/alistar_kalista.ts
import type { MatchupSummary } from "../_types";

export const alistar_kalista: MatchupSummary = {
  champs: ["alistar", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 칼리스타 P를 끊을 수 있음", "알리스타 E의 [[STUN]]로 칼리스타 P를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 칼리스타 E의 [[SLOW]], R의 [[AIRBORNE]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Kalista's P", "Alistar's E [[STUN]] cannot interrupt Kalista's P. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Kalista's E [[SLOW]], R [[AIRBORNE]]"],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
