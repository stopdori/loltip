// app/data/matchups/amumu/amumu_sylas.ts
import type { MatchupSummary } from "../_types";

export const amumu_sylas: MatchupSummary = {
  champs: ["amumu", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 사일러스 W, E1, E2의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 사일러스 E2의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Sylas's W, E1, and E2 [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Sylas's W, E1, and E2 [[DASH]].", "R [[STUN]] can interrupt Sylas's W, E1, and E2 [[DASH]].", "Q [[CC_BUFFER]] can ignore Sylas's E2 [[AIRBORNE]] and continue [[DASH]]."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
