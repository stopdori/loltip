// app/data/matchups/ambessa/ambessa_ryze.ts
import type { MatchupSummary } from "../_types";

export const ambessa_ryze: MatchupSummary = {
  champs: ["ambessa", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 라이즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 라이즈 EW의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Ryze's R [[SKILL_CHANNEL]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Ryze's EW [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    ryze: {
      ko: [],
      en: [],
    },
  },
};
