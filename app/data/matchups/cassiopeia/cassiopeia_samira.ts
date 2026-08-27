// app/data/matchups/cassiopeia/cassiopeia_samira.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_samira: MatchupSummary = {
  champs: ["cassiopeia", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] can interrupt Samira's R [[SKILL_CHANNEL]].",
        "R [[STUN]] cannot interrupt Samira's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    samira: {
      ko: ["E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.",
        "[[TIP]] 카시오페아를 상대할 때는 R을 사용하고 뒤를 돌아서 카시오페아 R의 [[STUN]] 발동을 피해야 유리함."
      ],
      en: ["E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].",
        "[[TIP]] Against Cassiopeia, it's advantageous to cast R and then turn away, to avoid triggering Cassiopeia's R [[STUN]]."
      ],
    },
  },
};
