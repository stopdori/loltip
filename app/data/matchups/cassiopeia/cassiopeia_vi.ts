// app/data/matchups/cassiopeia/cassiopeia_vi.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_vi: MatchupSummary = {
  champs: ["cassiopeia", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 바이 Q의 [[SKILL_CHARGED]] [[DASH]]을 끊을 수 있음.",
        "R의 [[STUN]]로 바이 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."
      ],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Vi's Q [[SKILL_CHARGED]] [[DASH]].",
        "R [[STUN]] cannot interrupt Vi's Q [[DASH]]. \n However, the [[STUN]] still applies."
      ],
    },
    vi: {
      ko: ["Q, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["Q and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
