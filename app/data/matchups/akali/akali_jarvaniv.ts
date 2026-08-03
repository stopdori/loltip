// app/data/matchups/akali/akali_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const akali_jarvaniv: MatchupSummary = {
  champs: ["akali", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 자르반 EQ, R의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Jarvan IV's EQ and R [[DASH]]."],
    },
    jarvaniv: {
      ko: ["자르반 EQ로 아칼리 E, E2, R, R2를 끊을 수 있음"],
      en: ["Jarvan IV's EQ can interrupt Akali's E, E2, R and R2"],
    },
  },
};
