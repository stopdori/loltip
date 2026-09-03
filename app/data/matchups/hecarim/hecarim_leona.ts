// app/data/matchups/hecarim/hecarim_leona.ts
import type { MatchupSummary } from "../_types";

export const hecarim_leona: MatchupSummary = {
  champs: ["hecarim", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 레오나 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 레오나 Q, R의 [[STUN]], E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]], [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Leona's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Leona's Q and R [[STUN]] and E [[ROOT]]. \n However, [[STUN]] and [[ROOT]] remain after [[UNSTOPPABLE]] ends."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
