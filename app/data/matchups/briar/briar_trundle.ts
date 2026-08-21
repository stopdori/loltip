// app/data/matchups/briar/briar_trundle.ts
import type { MatchupSummary } from "../_types";

export const briar_trundle: MatchupSummary = {
  champs: ["briar", "trundle"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 트런들 E([[TERRAIN]])의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 트런들 E([[TERRAIN]])의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Trundle's E ([[TERRAIN]]) [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Trundle's E ([[TERRAIN]]) [[AIRBORNE]]."],
    },
    trundle: {
      ko: [],
      en: [],
    },
  },
};
