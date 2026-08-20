// app/data/matchups/briar/briar_karma.ts
import type { MatchupSummary } from "../_types";

export const briar_karma: MatchupSummary = {
  champs: ["briar", "karma"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 카르마 W의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 카르마 R의 [[ROOT]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Karma's W [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Karma's R [[ROOT]]."],
    },
    karma: {
      ko: [],
      en: [],
    },
  },
};
