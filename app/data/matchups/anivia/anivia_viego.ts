// app/data/matchups/anivia/anivia_viego.ts
import type { MatchupSummary } from "../_types";

export const anivia_viego: MatchupSummary = {
  champs: ["anivia", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]]로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 비에고 W의 [[SKILL_CHARGED]] [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Viego's W [[DASH]]. \n However, [[STUN]] still applies.", "Q [[STUN]] can interrupt Viego's W [[SKILL_CHARGED]].", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Viego's W [[SKILL_CHARGED]] [[DASH]]."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
