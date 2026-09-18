// app/data/matchups/ahri/ahri_skarner.ts
import type { MatchupSummary } from "../_types";

export const ahri_skarner: MatchupSummary = {
  champs: ["ahri", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 스카너 E의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "E([[CHARM]])의 [[KNOCKDOWN]]으로 스카너 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. \n 단, 즉시 벽에서 가장 가까운 땅으로 이동."],
      en: ["E [[CHARM]] can interrupt Skarner's E [[SKILL_CHANNEL]]. [[EXIST]]",
        "E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Skarner's E (wall traversal) [[SKILL_CHANNEL]] [[DASH]]. \n However, he is immediately ejected to the nearest ground next to the wall."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
