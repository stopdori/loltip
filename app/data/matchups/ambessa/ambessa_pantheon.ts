// app/data/matchups/ambessa/ambessa_pantheon.ts
import type { MatchupSummary } from "../_types";

export const ambessa_pantheon: MatchupSummary = {
  champs: ["ambessa", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 판테온 W의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 판테온 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Pantheon's W [[DASH]] and R [[SKILL_CHANNEL]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Pantheon's W [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
