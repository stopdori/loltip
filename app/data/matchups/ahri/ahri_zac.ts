// app/data/matchups/ahri/ahri_zac.ts
import type { MatchupSummary } from "../_types";

export const ahri_zac: MatchupSummary = {
  champs: ["ahri", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 자크 E의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "E([[CHARM]])의 [[KNOCKDOWN]]으로 자크 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E [[CHARM]] can interrupt Zac's E [[SKILL_CHANNEL]]. [[EXIST]]",
        "E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Zac's E [[DASH]]. [[EXIST]]"],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
