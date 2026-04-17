// app/data/matchups/anivia/anivia_vex.ts
import type { MatchupSummary } from "../_types";

export const anivia_vex: MatchupSummary = {
  champs: ["anivia", "vex"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    vex: {
      ko: ["애니비아 Q의 [[STUN]]로 벡스 R2의 [[UNSTOPPABLE]] [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 벡스 R2의 [[UNSTOPPABLE]] [[DASH]]을 끊을 수 없음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Vex's R [[UNSTOPPABLE]] [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] cannot interrupt Vex's R [[UNSTOPPABLE]] [[DASH]]."],
    },
  },
};
