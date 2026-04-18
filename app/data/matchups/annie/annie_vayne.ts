// app/data/matchups/annie/annie_vayne.ts
import type { MatchupSummary } from "../_types";

export const annie_vayne: MatchupSummary = {
  champs: ["annie", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 베인 Q(구르기)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Vayne's Q(Tumble) [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
