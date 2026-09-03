// app/data/matchups/hecarim/hecarim_shen.ts
import type { MatchupSummary } from "../_types";

export const hecarim_shen: MatchupSummary = {
  champs: ["hecarim", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 쉔 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 쉔 E의 [[TAUNT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[TAUNT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Shen's E [[DASH]] and R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Shen's E [[TAUNT]]. \n However, [[TAUNT]] remains after [[UNSTOPPABLE]] ends."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
