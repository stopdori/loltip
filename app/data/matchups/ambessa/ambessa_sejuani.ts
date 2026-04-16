// app/data/matchups/ambessa/ambessa_sejuani.ts
import type { MatchupSummary } from "../_types";

export const ambessa_sejuani: MatchupSummary = {
  champs: ["ambessa", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 세주아니 Q의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 세주아니 Q의 [[AIRBORNE]], E의 [[STUN]], R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Sejuani's Q [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Sejuani's Q [[AIRBORNE]], E [[STUN]], and R [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    sejuani: {
      ko: [],
      en: [],
    },
  },
};
