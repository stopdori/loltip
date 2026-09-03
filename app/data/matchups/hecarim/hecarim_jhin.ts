// app/data/matchups/hecarim/hecarim_jhin.ts
import type { MatchupSummary } from "../_types";

export const hecarim_jhin: MatchupSummary = {
  champs: ["hecarim", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 진 W의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Jhin's R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Jhin's W [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    jhin: {
      ko: [],
      en: [],
    },
  },
};
