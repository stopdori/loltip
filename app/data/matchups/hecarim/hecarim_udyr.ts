// app/data/matchups/hecarim/hecarim_udyr.ts
import type { MatchupSummary } from "../_types";

export const hecarim_udyr: MatchupSummary = {
  champs: ["hecarim", "udyr"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 우디르 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 우디르 E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Udyr's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Udyr's E [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    udyr: {
      ko: [],
      en: [],
    },
  },
};
