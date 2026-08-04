// app/data/matchups/ambessa/ambessa_viego.ts
import type { MatchupSummary } from "../_types";

export const ambessa_viego: MatchupSummary = {
  champs: ["ambessa", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 비에고 W의 [[DASH]] [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 비에고 W의 [[STUN]], R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Viego's W [[DASH]] [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Viego's W [[STUN]] and R [[AIRBORNE]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
