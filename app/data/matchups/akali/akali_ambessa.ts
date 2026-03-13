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
      ko: ["아칼리 E2로 암베사 P, R을 따라 갈 수 있음"],
      en: ["Akali's E2 can follow Ambessa's P and R"],
    },
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 아칼리 E1, E2, R1, R2를 끊을 수 있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Akali's E1, E2, R1, and R2."],
    },
  },
};
