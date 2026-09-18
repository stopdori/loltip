// app/data/matchups/ahri/ahri_viego.ts
import type { MatchupSummary } from "../_types";

export const ahri_viego: MatchupSummary = {
  champs: ["ahri", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "E([[CHARM]])의 [[KNOCKDOWN]]으로 비에고 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E [[CHARM]] can interrupt Viego's W [[SKILL_CHARGED]]. [[EXIST]]",
        "E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Viego's W [[DASH]]. [[EXIST]]"],
    },
    viego: {
      ko: ["비에고 R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 무시할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Viego's R [[UNSTOPPABLE]] can ignore Ahri's E [[CHARM]]. \n However, the [[CHARM]] still applies."],
    },
  },
};
