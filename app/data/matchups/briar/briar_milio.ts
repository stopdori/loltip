// app/data/matchups/briar/briar_milio.ts
import type { MatchupSummary } from "../_types";

export const briar_milio: MatchupSummary = {
  champs: ["briar", "milio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 밀리오 Q의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 밀리오 Q의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Milio's Q [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Milio's Q [[KNOCKBACK]]."],
    },
    milio: {
      ko: [],
      en: [],
    },
  },
};
