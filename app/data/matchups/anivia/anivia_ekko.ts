// app/data/matchups/anivia/anivia_ekko.ts
import type { MatchupSummary } from "../_types";

export const anivia_ekko: MatchupSummary = {
  champs: ["anivia", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 에코 E(구르기)의 [[DASH]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 에코 E(구르기)의 [[DASH]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Ekko's E (roll) [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Ekko's E (roll) [[DASH]]."],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
