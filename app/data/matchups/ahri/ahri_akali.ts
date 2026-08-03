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
      ko: ["E의 [[CHARM]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Akali's E1, E2, R1, and R2 [[DASH]]."],
    },
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 아리 R의 [[DASH]]을 따라갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Ahri's R [[DASH]]."],
    },
  },
};
