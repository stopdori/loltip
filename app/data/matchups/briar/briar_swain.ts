// app/data/matchups/briar/briar_swain.ts
import type { MatchupSummary } from "../_types";

export const briar_swain: MatchupSummary = {
  champs: ["briar", "swain"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 스웨인 E1의 [[ROOT]], E2의 [[GRAB]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 스웨인 E1의 [[ROOT]], E2의 [[GRAB]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Swain's E1 [[ROOT]], E2 [[GRAB]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Swain's E1 [[ROOT]], E2 [[GRAB]]."],
    },
    swain: {
      ko: [],
      en: [],
    },
  },
};
