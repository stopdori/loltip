// app/data/matchups/malphite/malphite_sett.ts
import type { MatchupSummary } from "../_types";

export const malphite_sett: MatchupSummary = {
  champs: ["malphite", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 세트 E의 [[GRAB]], [[STUN]] / R의 [[SUPPRESS]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Sett's E [[GRAB]] and [[STUN]] / R [[SUPPRESS]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
