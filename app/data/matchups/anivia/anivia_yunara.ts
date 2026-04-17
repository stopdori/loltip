// app/data/matchups/anivia/anivia_yunara.ts
import type { MatchupSummary } from "../_types";

export const anivia_yunara: MatchupSummary = {
  champs: ["anivia", "yunara"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 유나라 RE의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 유나라 RE의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Yunara's RE [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Yunara's RE [[DASH]]."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
