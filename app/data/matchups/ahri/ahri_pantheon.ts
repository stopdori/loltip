// app/data/matchups/ahri/ahri_pantheon.ts
import type { MatchupSummary } from "../_types";

export const ahri_pantheon: MatchupSummary = {
  champs: ["ahri", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 판테온 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[CHARM]]으로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Pantheon's W [[DASH]]. [[EXIST]]",
        "E [[CHARM]] can interrupt Pantheon's R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
