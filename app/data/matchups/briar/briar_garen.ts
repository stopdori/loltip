// app/data/matchups/briar/briar_garen.ts
import type { MatchupSummary } from "../_types";

export const briar_garen: MatchupSummary = {
  champs: ["briar", "garen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 가렌 Q의 [[SILENCE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 가렌 Q의 [[SILENCE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Garen's Q [[SILENCE]].",
        "R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Garen's Q [[SILENCE]]."],
    },
    garen: {
      ko: [],
      en: [],
    },
  },
};
