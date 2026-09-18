// app/data/matchups/ahri/ahri_zeri.ts
import type { MatchupSummary } from "../_types";

export const ahri_zeri: MatchupSummary = {
  champs: ["ahri", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 제리 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E([[CHARM]])의 [[KNOCKDOWN]]으로 제리 E(벽이동)의 [[DASH]]을 끊을 수 있음. [[EXIST]] \n 단, 즉시 벽에서 가장 가까운 땅으로 이동."],
      en: ["E [[CHARM]] can interrupt Zeri's E [[DASH]]. [[EXIST]]",
        "E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Zeri's E (wall traversal) [[DASH]]. [[EXIST]] \n However, she is immediately ejected to the nearest ground next to the wall."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
