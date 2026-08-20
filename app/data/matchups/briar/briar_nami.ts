// app/data/matchups/briar/briar_nami.ts
import type { MatchupSummary } from "../_types";

export const briar_nami: MatchupSummary = {
  champs: ["briar", "nami"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 나미 Q의 [[SUSPENDING]], R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 나미 Q의 [[SUSPENDING]], R의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Nami's Q [[SUSPENDING]] or R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Nami's Q [[SUSPENDING]] and R [[AIRBORNE]]."],
    },
    nami: {
      ko: [],
      en: [],
    },
  },
};
