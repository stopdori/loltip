// app/data/matchups/anivia/anivia_sejuani.ts
import type { MatchupSummary } from "../_types";

export const anivia_sejuani: MatchupSummary = {
  champs: ["anivia", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 세주아니 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 세주아니 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Sejuani's Q [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Sejuani's Q [[DASH]]."],
    },
    sejuani: {
      ko: [],
      en: [],
    },
  },
};
