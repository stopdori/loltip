// app/data/matchups/hecarim/hecarim_ryze.ts
import type { MatchupSummary } from "../_types";

export const hecarim_ryze: MatchupSummary = {
  champs: ["hecarim", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 라이즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 라이즈 EW의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Ryze's R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Ryze's EW [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    ryze: {
      ko: [],
      en: [],
    },
  },
};
