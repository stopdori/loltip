// app/data/matchups/hecarim/hecarim_sejuani.ts
import type { MatchupSummary } from "../_types";

export const hecarim_sejuani: MatchupSummary = {
  champs: ["hecarim", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 세주아니 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 세주아니 Q의 [[KNOCKBACK]] / E, R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Sejuani's Q [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Sejuani's Q [[KNOCKBACK]] / E and R [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    sejuani: {
      ko: [],
      en: [],
    },
  },
};
