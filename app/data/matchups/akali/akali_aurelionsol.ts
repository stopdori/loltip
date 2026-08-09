// app/data/matchups/akali/akali_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const akali_aurelionsol: MatchupSummary = {
  champs: ["akali", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 아우렐리온 솔 W(비행)의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Aurelion Sol's W (flight) [[DASH]]."],
    },
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "[[EMPOWERED]] R(천상강림)의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Akali's E1, E2, R1, R2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "[[EMPOWERED]] R (Falling Star) [[AIRBORNE]] can interrupt Akali's E1, E2, R1, R2 [[DASH]]."],
    },
  },
};
