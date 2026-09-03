// app/data/matchups/hecarim/hecarim_renekton.ts
import type { MatchupSummary } from "../_types";

export const hecarim_renekton: MatchupSummary = {
  champs: ["hecarim", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 레넥톤 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 레넥톤 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Renekton's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Renekton's W [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
