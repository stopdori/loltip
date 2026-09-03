// app/data/matchups/hecarim/hecarim_morgana.ts
import type { MatchupSummary } from "../_types";

export const hecarim_morgana: MatchupSummary = {
  champs: ["hecarim", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["R의 [[UNSTOPPABLE]]로 모르가나 Q의 [[ROOT]], R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]], [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Morgana's Q [[ROOT]] and R [[STUN]]. \n However, [[ROOT]] and [[STUN]] remain after [[UNSTOPPABLE]] ends."],
    },
    morgana: {
      ko: [],
      en: [],
    },
  },
};
