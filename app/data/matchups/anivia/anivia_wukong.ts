// app/data/matchups/anivia/anivia_wukong.ts
import type { MatchupSummary } from "../_types";

export const anivia_wukong: MatchupSummary = {
  champs: ["anivia", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 오공 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 오공 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Wukong's W or E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Wukong's W or E [[DASH]]."],
    },
    wukong: {
      ko: [],
      en: [],
    },
  },
};
