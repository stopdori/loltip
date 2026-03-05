// app/data/matchups/alistar/alistar_sylas.ts
import type { MatchupSummary } from "../_types";

export const alistar_sylas: MatchupSummary = {
  champs: ["alistar", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 사일러스 W, E1, E2(돌진단계)를 끊을 수 있음", "알리스타 E의 [[STUN]]로 사일러스 W, E1, E2를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 사일러스 Q의 [[SLOW]], E2의 [[AIRBORNE]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Sylas's W, E1 and E2(dash phase)", "Alistar's E [[STUN]] cannot interrupt Sylas's W, E1 and E2. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Sylas's Q [[SLOW]], E2 [[AIRBORNE]]"],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
