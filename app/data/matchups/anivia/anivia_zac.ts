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
      ko: ["Q의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 자크 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 자크 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Zac's E [[DASH]].", "Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Zac's E [[SKILL_CHANNEL]]."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
