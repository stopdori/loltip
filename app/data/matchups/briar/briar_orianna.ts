// app/data/matchups/briar/briar_orianna.ts
import type { MatchupSummary } from "../_types";

export const briar_orianna: MatchupSummary = {
  champs: ["briar", "orianna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 오리아나 R의 [[GRAB]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 오리아나 R의 [[GRAB]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Orianna's R [[GRAB]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Orianna's R [[GRAB]]."],
    },
    orianna: {
      ko: [],
      en: [],
    },
  },
};
