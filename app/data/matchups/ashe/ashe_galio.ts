// app/data/matchups/ashe/ashe_galio.ts
import type { MatchupSummary } from "../_types";

export const ashe_galio: MatchupSummary = {
  champs: ["ashe", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[STUN]]로 갈리오 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Galio's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[STUN]] can interrupt Galio's W and R [[SKILL_CHANNEL]]."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
