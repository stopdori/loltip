// app/data/matchups/akali/akali_ambessa.ts
import type { MatchupSummary } from "../_types";

export const akali_ambessa: MatchupSummary = {
  champs: ["akali", "ambessa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 암베사 P의 [[DASH]], R의 [[BLINK]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Ambessa's P [[DASH]] and R [[BLINK]]."],
    },
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]]."],
    },
  },
};
