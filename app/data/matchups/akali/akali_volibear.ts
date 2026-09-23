// app/data/matchups/akali/akali_volibear.ts
import type { MatchupSummary } from "../_types";

export const akali_volibear: MatchupSummary = {
  champs: ["akali", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]] 볼리베어 R의 [[DASH]]을 따라갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Volibear's R [[DASH]]."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
