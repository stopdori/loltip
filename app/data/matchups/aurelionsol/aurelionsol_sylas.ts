// app/data/matchups/aurelionsol/aurelionsol_sylas.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_sylas: MatchupSummary = {
  champs: ["aurelionsol", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Sylas's W, E1, and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Sylas's W, E1, and E2 [[DASH]]."],
    },
    sylas: {
      ko: ["사일러스 R로 아우렐리온 솔의 강화 R(천상강림)을 강탈하면, 일반 R을 강탈함. \n 즉, 천상강림을 강탈할 수 없음."],
      en: ["If Sylas steals Aurelion Sol's [[EMPOWERED]] R (Falling Star), he steals the base R instead. \n In other words, Falling Star cannot be stolen."],
    },
  },
};
