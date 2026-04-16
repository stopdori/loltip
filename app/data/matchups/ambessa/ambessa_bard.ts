// app/data/matchups/ambessa/ambessa_bard.ts
import type { MatchupSummary } from "../_types";

export const ambessa_bard: MatchupSummary = {
  champs: ["ambessa", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 바드 E(터널)의 [[DASH]]을 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 바드 Q의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 바드 R(존야)를 무시할 수 있음!!!"],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Bard's E (tunnel) [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Bard's Q [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends.", "Ambessa's R [[UNSTOPPABLE]] can ignore Bard's R (Zhonya effect)!!!"],
    },
    bard: {
      ko: [],
      en: [],
    },
  },
};
