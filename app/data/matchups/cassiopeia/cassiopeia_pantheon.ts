// app/data/matchups/cassiopeia/cassiopeia_pantheon.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_pantheon: MatchupSummary = {
  champs: ["cassiopeia", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 판테온 R의 [[SKILL_CHANNEL]] [[BLINK]]을 끊을 수 있음.",
        "R의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Pantheon's R [[SKILL_CHANNEL]] [[BLINK]].",
        "R [[STUN]] cannot interrupt Pantheon's W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    pantheon: {
      ko: ["W는 [[DASH]], R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["W [[DASH]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
