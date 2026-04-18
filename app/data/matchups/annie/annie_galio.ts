// app/data/matchups/annie/annie_galio.ts
import type { MatchupSummary } from "../_types";

export const annie_galio: MatchupSummary = {
  champs: ["annie", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 P의 [[STUN]]로 갈리오 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Galio's E [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's P [[STUN]] can interrupt Galio's W and R [[SKILL_CHANNEL]]."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
