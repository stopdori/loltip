// app/data/matchups/ashe/ashe_vayne.ts
import type { MatchupSummary } from "../_types";

export const ashe_vayne: MatchupSummary = {
  champs: ["ashe", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 베인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Vayne's Q [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
