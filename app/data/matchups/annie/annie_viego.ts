// app/data/matchups/annie/annie_viego.ts
import type { MatchupSummary } from "../_types";

export const annie_viego: MatchupSummary = {
  champs: ["annie", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 비에고 W의 [[DASH]] ,R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Viego's W [[DASH]] or R [[BLINK]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Viego's W [[SKILL_CHARGED]]."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
