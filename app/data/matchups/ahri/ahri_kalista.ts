// app/data/matchups/ahri/ahri_kalista.ts
import type { MatchupSummary } from "../_types";

export const ahri_kalista: MatchupSummary = {
  champs: ["ahri", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 칼리스타 P의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Kalista's P [[DASH]]."],
    },
    kalista: {
      ko: ["칼리스타 R의 아군 그렙으로 아리 E의 [[CHARM]]에 걸린 계약자를 데려올 수 있음."],
      en: ["Kalista's R can pull her bound ally away even if they are affected by Ahri's E [[CHARM]]."],
    },
  },
};
