// app/data/matchups/ahri/ahri_akali.ts
import type { MatchupSummary } from "../_types";

export const ahri_akali: MatchupSummary = {
  champs: ["ahri", "akali"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]]. [[EXIST]]"],
    },
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 아리 R의 [[DASH]]을 따라갈 수 있음. [[EXIST]]."],
      en: ["E2's [[HOMING]] [[DASH]] can follow Ahri's R [[DASH]]. [[EXIST]]."],
    },
  },
};
