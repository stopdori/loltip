// app/data/matchups/briar/briar_darius.ts
import type { MatchupSummary } from "../_types";

export const briar_darius: MatchupSummary = {
  champs: ["briar", "darius"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 다리우스 E의 [[GRAB]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 다리우스 E의 [[GRAB]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Darius's E [[GRAB]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Darius's E [[GRAB]]."],
    },
    darius: {
      ko: [],
      en: [],
    },
  },
};
