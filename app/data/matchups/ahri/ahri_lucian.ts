// app/data/matchups/ahri/ahri_lucian.ts
import type { MatchupSummary } from "../_types";

export const ahri_lucian: MatchupSummary = {
  champs: ["ahri", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 루시안 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[CHARM]]으로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"
      ],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Lucian's E [[DASH]]. [[EXIST]]",
        "E [[CHARM]] can interrupt Lucian's R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
