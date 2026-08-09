// app/data/matchups/anivia/anivia_renekton.ts
import type { MatchupSummary } from "../_types";

export const anivia_renekton: MatchupSummary = {
  champs: ["anivia", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 레넥톤 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 레넥톤 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Renekton's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Renekton's E [[DASH]]."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
