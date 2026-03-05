// app/data/matchups/alistar/alistar_leesin.ts
import type { MatchupSummary } from "../_types";

export const alistar_leesin: MatchupSummary = {
  champs: ["alistar", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 리신 Q2, W를 끊을 수 있음", "알리스타 E의 [[STUN]]로 리신 Q2, W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 리신 E의 [[SLOW]], R의 [[AIRBORNE]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Lee Sin's Q2 and W", "Alistar's E [[STUN]] cannot interrupt Lee Sin's Q2 and W. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Lee Sin's E [[SLOW]], R [[AIRBORNE]]"],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
