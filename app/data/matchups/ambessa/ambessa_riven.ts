// app/data/matchups/ambessa/ambessa_riven.ts
import type { MatchupSummary } from "../_types";

export const ambessa_riven: MatchupSummary = {
  champs: ["ambessa", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 리븐 Q1, Q2, Q3, E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 리븐 Q3의 [[AIRBORNE]], W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Riven's Q1, Q2, Q3, and E [[DASH]].", "R [[UNSTOPPABLE]] can ignore Riven's Q3 [[AIRBORNE]] and W [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
