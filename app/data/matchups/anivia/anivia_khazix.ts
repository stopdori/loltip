// app/data/matchups/anivia/anivia_khazix.ts
import type { MatchupSummary } from "../_types";

export const anivia_khazix: MatchupSummary = {
  champs: ["anivia", "khazix"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 카직스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 카직스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kha'Zix's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Kha'Zix's E [[DASH]]."],
    },
    khazix: {
      ko: [],
      en: [],
    },
  },
};
