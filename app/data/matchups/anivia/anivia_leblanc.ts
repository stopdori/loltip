// app/data/matchups/anivia/anivia_leblanc.ts
import type { MatchupSummary } from "../_types";

export const anivia_leblanc: MatchupSummary = {
  champs: ["anivia", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 르블랑 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 르블랑 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt LeBlanc's W [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt LeBlanc's W [[DASH]]."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
