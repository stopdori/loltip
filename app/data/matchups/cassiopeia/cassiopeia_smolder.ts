// app/data/matchups/cassiopeia/cassiopeia_smolder.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_smolder: MatchupSummary = {
  champs: ["cassiopeia", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 스몰더 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Smolder's E (wall movement) [[SKILL_CHANNEL]] [[DASH]]."],
    },
    smolder: {
      ko: ["E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."
      ],
      en: ["E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."
      ],
    },
  },
};
