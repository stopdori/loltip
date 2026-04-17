// app/data/matchups/anivia/anivia_zaahen.ts
import type { MatchupSummary } from "../_types";

export const anivia_zaahen: MatchupSummary = {
  champs: ["anivia", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 자헨 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 자헨 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Zaahen's E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Zaahen's E [[DASH]]."],
    },
    zaahen: {
      ko: [],
      en: [],
    },
  },
};
