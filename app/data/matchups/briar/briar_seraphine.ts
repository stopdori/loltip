// app/data/matchups/briar/briar_seraphine.ts
import type { MatchupSummary } from "../_types";

export const briar_seraphine: MatchupSummary = {
  champs: ["briar", "seraphine"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 세라핀 E의 [[ROOT]], [[STUN]] / R의 [[CHARM]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 세라핀 E의 [[ROOT]], [[STUN]] / R의 [[CHARM]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Seraphine's E [[ROOT]], [[STUN]] / R [[CHARM]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Seraphine's E [[ROOT]], [[STUN]] / R [[CHARM]]."],
    },
    seraphine: {
      ko: [],
      en: [],
    },
  },
};
