// app/data/matchups/akali/akali_lissandra.ts
import type { MatchupSummary } from "../_types";

export const akali_lissandra: MatchupSummary = {
  champs: ["akali", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 리산드라 E2의 [[BLINK]]을 따라갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Lissandra's E2 [[BLINK]]."],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
