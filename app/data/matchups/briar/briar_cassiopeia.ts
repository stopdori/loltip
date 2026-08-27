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
      ko: ["Q, W, R1은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.", 
        "E의 [[CAST_COMMIT]]으로 카시오페아 R의 [[STUN]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 카시오페아 R의 [[STUN]]을 무시할 수 있음."
      ],
      en: ["Q, W, and R1 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Cassiopeia's R [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Cassiopeia's R [[STUN]]."
      ],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Briar's Q and W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
