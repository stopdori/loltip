// app/data/matchups/briar/briar_syndra.ts
import type { MatchupSummary } from "../_types";

export const briar_syndra: MatchupSummary = {
  champs: ["briar", "syndra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 신드라 E의 [[KNOCKBACK]], [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 신드라 E의 [[KNOCKBACK]], [[STUN]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Syndra's E [[KNOCKBACK]], [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Syndra's E [[KNOCKBACK]], [[STUN]]."],
    },
    syndra: {
      ko: [],
      en: [],
    },
  },
};
