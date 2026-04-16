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
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음", 
        "알리스타 R의 [[CC_CLEANSE]]로 사일러스 Q의 [[SLOW]], E2의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Sylas's W, E1, and E2 [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Sylas's W, E1, or E2 [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Sylas's Q [[SLOW]] and E2 [[AIRBORNE]]."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
