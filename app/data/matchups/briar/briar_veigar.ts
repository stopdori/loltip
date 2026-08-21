// app/data/matchups/briar/briar_veigar.ts
import type { MatchupSummary } from "../_types";

export const briar_veigar: MatchupSummary = {
  champs: ["briar", "veigar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 베이가 E의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 베이가 E의 [[STUN]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Veigar's E [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Veigar's E [[STUN]]."],
    },
    veigar: {
      ko: [],
      en: [],
    },
  },
};
