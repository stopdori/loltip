// app/data/matchups/akali/akali_diana.ts
import type { MatchupSummary } from "../_types";

export const akali_diana: MatchupSummary = {
  champs: ["akali", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 다이애나 E의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Diana's E [[DASH]]."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]]."],
    },
  },
};
