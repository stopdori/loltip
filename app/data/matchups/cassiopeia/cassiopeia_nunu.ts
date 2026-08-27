// app/data/matchups/cassiopeia/cassiopeia_nunu.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_nunu: MatchupSummary = {
  champs: ["cassiopeia", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 누누와 월럼프 W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.",
        "R의 [[STUN]]로 누누와 월럼프 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Nunu & Willump's W [[SKILL_CHANNEL]] [[DASH]].",
        "R [[STUN]] can interrupt Nunu & Willump's R [[SKILL_CHANNEL]]."],
    },
    nunu: {
      ko: ["W는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.",
        "[[TIP]] 카시오페아를 상대할 때는 뒤를 돌고 R을 사용해서 카시오페아 R의 [[STUN]] 발동을 피해야 유리함."
      ],
      en: ["W [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].",
        "[[TIP]] Against Cassiopeia, it's advantageous to turn away before casting R, to avoid triggering Cassiopeia's R [[STUN]]."
      ],
    },
  },
};
