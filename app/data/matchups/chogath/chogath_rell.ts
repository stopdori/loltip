// app/data/matchups/chogath/chogath_rell.ts
import type { MatchupSummary } from "../_types";

export const chogath_rell: MatchupSummary = {
  champs: ["chogath", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 렐 승마폼 W의 [[DASH]], 낙마폼 W의 [[EMPOWERED]] [[BA]] [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 렐 승마폼 W의 [[DASH]], 낙마폼 W의 [[EMPOWERED]] [[BA]] [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Rell's Mounted Form W [[DASH]], or the [[EMPOWERED]] [[BA]] [[DASH]] from Dismounted Form W.",
        "W [[SILENCE]] cannot interrupt Rell's Mounted Form W [[DASH]], or the [[EMPOWERED]] [[BA]] [[DASH]] from Dismounted Form W. \n However, the [[SILENCE]] still applies."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
