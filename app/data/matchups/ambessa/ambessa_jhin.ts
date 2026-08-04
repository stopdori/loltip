// app/data/matchups/ambessa/ambessa_jhin.ts
import type { MatchupSummary } from "../_types";

export const ambessa_jhin: MatchupSummary = {
  champs: ["ambessa", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", "R의 [[UNSTOPPABLE]]로 진 W의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Jhin's R [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Jhin's W [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    jhin: {
      ko: [],
      en: [],
    },
  },
};
