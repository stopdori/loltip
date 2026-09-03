// app/data/matchups/hecarim/hecarim_pantheon.ts
import type { MatchupSummary } from "../_types";

export const hecarim_pantheon: MatchupSummary = {
  champs: ["hecarim", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 판테온 W의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 판테온 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Pantheon's W [[DASH]] and R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Pantheon's W [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
