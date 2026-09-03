// app/data/matchups/hecarim/hecarim_riven.ts
import type { MatchupSummary } from "../_types";

export const hecarim_riven: MatchupSummary = {
  champs: ["hecarim", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 리븐 Q3의 [[AIRBORNE]], W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Riven's Q and E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Riven's Q3 [[AIRBORNE]] and W [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
