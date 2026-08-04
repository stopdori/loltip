// app/data/matchups/ambessa/ambessa_shen.ts
import type { MatchupSummary } from "../_types";

export const ambessa_shen: MatchupSummary = {
  champs: ["ambessa", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 쉔 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 쉔 E의 [[TAUNT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[TAUNT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Shen's E [[DASH]] and R [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Shen's E [[TAUNT]]. \n However, [[TAUNT]] remains after [[UNSTOPPABLE]] ends."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
