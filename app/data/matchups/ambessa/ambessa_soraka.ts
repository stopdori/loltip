// app/data/matchups/ambessa/ambessa_soraka.ts
import type { MatchupSummary } from "../_types";

export const ambessa_soraka: MatchupSummary = {
  champs: ["ambessa", "soraka"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[UNSTOPPABLE]]로 소라카 E의 [[SILENCE]], [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 암베사가 소카라 E의 [[ZONE]]을 벗어나지 않았다면 [[SILENCE]], [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[UNSTOPPABLE]] can ignore Soraka's E [[SILENCE]] and [[ROOT]]. \n However, after [[UNSTOPPABLE]] ends, if Ambessa has not left Soraka's E [[ZONE]], [[SILENCE]] and [[ROOT]] still apply."],
    },
    soraka: {
      ko: [],
      en: [],
    },
  },
};
