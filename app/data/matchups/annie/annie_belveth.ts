// app/data/matchups/annie/annie_belveth.ts
import type { MatchupSummary } from "../_types";

export const annie_belveth: MatchupSummary = {
  champs: ["annie", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 벨베스 Q, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "애니 P의 [[STUN]]로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Bel'Veth's Q and R [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's P [[STUN]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]]."],
    },
    belveth: {
      ko: [],
      en: [],
    },
  },
};
