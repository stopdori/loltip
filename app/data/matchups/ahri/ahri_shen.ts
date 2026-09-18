// app/data/matchups/ahri/ahri_shen.ts
import type { MatchupSummary } from "../_types";

export const ahri_shen: MatchupSummary = {
  champs: ["ahri", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 쉔 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[CHARM]]으로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Shen's E [[DASH]]. [[EXIST]]",
        "E [[CHARM]] can interrupt Shen's R [[SKILL_CHANNEL]]."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
