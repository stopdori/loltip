// app/data/matchups/ahri/ahri_smolder.ts
import type { MatchupSummary } from "../_types";

export const ahri_smolder: MatchupSummary = {
  champs: ["ahri", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]] \n 단, 즉시 벽에서 가장 가까운 땅으로 이동."],
      en: ["E [[CHARM]] can interrupt Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]] \n However, Smolder is immediately moved to the nearest ground outside the wall."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
