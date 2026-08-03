// app/data/matchups/akali/akali_leona.ts
import type { MatchupSummary } from "../_types";

export const akali_leona: MatchupSummary = {
  champs: ["akali", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 레오나 E의 [[DASH]]을 따라갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Leona's E [[DASH]]."],
    },
    leona: {
      ko: ["레오나 E로 아칼리 E, E2, R, R2를 따라갈 수 있음. E2를 제외하고 도착지점으로 이동"],
      en: ["Leona's E can follow Akali's E, E2, R and R2. Except for E2, Leona moves to the destination point."],
    },
  },
};
