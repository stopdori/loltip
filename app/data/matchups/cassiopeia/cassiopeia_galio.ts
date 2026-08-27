// app/data/matchups/cassiopeia/cassiopeia_galio.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_galio: MatchupSummary = {
  champs: ["cassiopeia", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 갈리오 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[STUN]]로 갈리오 W의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "R의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Galio's R [[SKILL_CHANNEL]].",
        "R [[STUN]] can interrupt Galio's W [[SKILL_CHARGED]].",
        "R [[STUN]] cannot interrupt Galio's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    galio: {
      ko: ["E, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
