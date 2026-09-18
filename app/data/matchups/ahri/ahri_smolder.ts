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
      ko: ["E의 [[CHARM]]으로 스몰더 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. \n 단, 즉시 벽에서 가장 가까운 땅으로 이동."],
      en: ["E [[CHARM]] can interrupt Smolder's E (wall traversal) [[SKILL_CHANNEL]] [[DASH]]. \n However, he is immediately ejected to the nearest ground next to the wall."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
