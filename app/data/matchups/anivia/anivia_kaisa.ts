// app/data/matchups/anivia/anivia_kaisa.ts
import type { MatchupSummary } from "../_types";

export const anivia_kaisa: MatchupSummary = {
  champs: ["anivia", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 카이사 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 카이사 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kai'Sa's R [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Kai'Sa's R [[DASH]]."],
    },
    kaisa: {
      ko: [],
      en: [],
    },
  },
};
