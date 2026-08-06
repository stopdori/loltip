// app/data/matchups/anivia/anivia_galio.ts
import type { MatchupSummary } from "../_types";

export const anivia_galio: MatchupSummary = {
  champs: ["anivia", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 갈리오 E의 [[DASH]]을 끊을 수 있음.", 
        "애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 갈리오 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Galio's E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Galio's E [[DASH]].", "Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Galio's W and R [[SKILL_CHANNEL]]."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
