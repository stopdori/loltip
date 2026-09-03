// app/data/matchups/fiora/fiora_hecarim.ts
import type { MatchupSummary } from "../_types";

export const fiora_hecarim: MatchupSummary = {
  champs: ["fiora", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiora: {
      ko: [""],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 피오라 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 피오라 W(응수)의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Fiora's Q [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Fiora's W (Riposte) [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
