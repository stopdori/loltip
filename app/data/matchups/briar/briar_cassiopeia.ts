// app/data/matchups/briar/briar_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const briar_cassiopeia: MatchupSummary = {
  champs: ["briar", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 카시오페아 R의 [[STUN]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 카시오페아 R의 [[STUN]]을 무시할 수 있음."
      ],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Cassiopeia's R [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Cassiopeia's R [[STUN]]."
      ],
    },
    cassiopeia: {
      ko: [],
      en: [],
    },
  },
};
