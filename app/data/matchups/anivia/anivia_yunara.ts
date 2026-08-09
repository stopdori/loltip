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
      ko: ["Q의 [[STUN]]로 유나라 RE의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 유나라 RE의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Yunara's RE [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Yunara's RE [[DASH]]."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
