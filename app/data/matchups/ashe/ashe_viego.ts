// app/data/matchups/ashe/ashe_viego.ts
import type { MatchupSummary } from "../_types";

export const ashe_viego: MatchupSummary = {
  champs: ["ashe", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[STUN]]로 비에고 W의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Viego's W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[STUN]] can interrupt Viego's W [[SKILL_CHANNEL]]."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
