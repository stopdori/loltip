// app/data/matchups/ahri/ahri_vi.ts
import type { MatchupSummary } from "../_types";

export const ahri_vi: MatchupSummary = {
  champs: ["ahri", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "E([[CHARM]])의 [[KNOCKDOWN]]으로 바이 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]"
      ],
      en: ["E [[CHARM]] can interrupt Vi's Q [[SKILL_CHARGED]]. [[EXIST]]",
        "E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Vi's Q [[DASH]]. [[EXIST]]"],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
