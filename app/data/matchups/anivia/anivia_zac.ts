// app/data/matchups/anivia/anivia_zac.ts
import type { MatchupSummary } from "../_types";

export const anivia_zac: MatchupSummary = {
  champs: ["anivia", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 자크 E의 [[DASH]]을 끊을 수 있음.", 
        "애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 자크 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Zac's E [[DASH]].", "Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Zac's E [[SKILL_CHANNEL]]."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
