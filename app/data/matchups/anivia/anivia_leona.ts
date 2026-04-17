// app/data/matchups/anivia/anivia_leona.ts
import type { MatchupSummary } from "../_types";

export const anivia_leona: MatchupSummary = {
  champs: ["anivia", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 레오나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 레오나 E(돌진 단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Leona's E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Leona's E (dash phase) [[DASH]]."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
