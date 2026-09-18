// app/data/matchups/ahri/ahri_pyke.ts
import type { MatchupSummary } from "../_types";

export const ahri_pyke: MatchupSummary = {
  champs: ["ahri", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "E([[CHARM]])의 [[KNOCKDOWN]]으로 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E [[CHARM]] can interrupt Pyke's Q [[SKILL_CHARGED]]. [[EXIST]]",
        "E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Pyke's E [[DASH]]. [[EXIST]]"],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
