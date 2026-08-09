// app/data/matchups/anivia/anivia_rengar.ts
import type { MatchupSummary } from "../_types";

export const anivia_rengar: MatchupSummary = {
  champs: ["anivia", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 렝가 P, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 렝가 P, R의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Rengar's P or R [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Rengar's P or R [[DASH]]."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
