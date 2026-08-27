// app/data/matchups/cassiopeia/cassiopeia_naafiri.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_naafiri: MatchupSummary = {
  champs: ["cassiopeia", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[STUN]]로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Naafiri's R [[SKILL_CHANNEL]].",
        "R [[STUN]] cannot interrupt Naafiri's E and R [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    naafiri: {
      ko: ["E, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
