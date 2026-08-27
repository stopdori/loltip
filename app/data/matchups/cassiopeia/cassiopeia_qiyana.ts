// app/data/matchups/cassiopeia/cassiopeia_qiyana.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_qiyana: MatchupSummary = {
  champs: ["cassiopeia", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 키아나 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Qiyana's W and E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    qiyana: {
      ko: ["W, E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["W and E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
