// app/data/matchups/akali/akali_bard.ts
import type { MatchupSummary } from "../_types";

export const akali_bard: MatchupSummary = {
  champs: ["akali", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 바드 E(터널)의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Bard's E (tunnel) [[DASH]]."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 아칼리 E1, E2 ,R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 아칼리 E1, E2, R1, R2 [[DASH]]을 끊을 수 있음."],
      en: [],
    },
  },
};
