// app/data/matchups/ambessa/ambessa_varus.ts
import type { MatchupSummary } from "../_types";

export const ambessa_varus: MatchupSummary = {
  champs: ["ambessa", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 바루스 Q의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 바루스 R의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Varus's Q [[SKILL_CHANNEL]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Varus's R [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
