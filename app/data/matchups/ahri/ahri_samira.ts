// app/data/matchups/ahri/ahri_samira.ts
import type { MatchupSummary } from "../_types";

export const ahri_samira: MatchupSummary = {
  champs: ["ahri", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 사미라 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[CHARM]]으로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Samira's E [[DASH]]. [[EXIST]]",
        "E [[CHARM]] can interrupt Samira's R [[SKILL_CHANNEL]]."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
