// app/data/matchups/briar/briar_lux.ts
import type { MatchupSummary } from "../_types";

export const briar_lux: MatchupSummary = {
  champs: ["briar", "lux"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 럭스 Q의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 럭스 Q의 [[ROOT]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Lux's Q [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Lux's Q [[ROOT]]."],
    },
    lux: {
      ko: [],
      en: [],
    },
  },
};
