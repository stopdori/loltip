// app/data/matchups/akali/akali_amumu.ts
import type { MatchupSummary } from "../_types";

export const akali_amumu: MatchupSummary = {
  champs: ["akali", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 아무무 Q의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Amumu's Q [[DASH]]."],
    },
    amumu: {
      ko: ["Q의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 따라갈 수 있음.", 
        "R의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow.", "R [[STUN]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]]."],
    },
  },
};
