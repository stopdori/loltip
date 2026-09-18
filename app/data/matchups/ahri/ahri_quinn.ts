// app/data/matchups/ahri/ahri_quinn.ts
import type { MatchupSummary } from "../_types";

export const ahri_quinn: MatchupSummary = {
  champs: ["ahri", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 퀸 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[CHARM]]으로 퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Quinn's E [[DASH]]. [[EXIST]]",
        "E [[CHARM]] can interrupt Quinn's R [[SKILL_CHANNEL]] and cancel her R [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
