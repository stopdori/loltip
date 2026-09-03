// app/data/matchups/hecarim/hecarim_jayce.ts
import type { MatchupSummary } from "../_types";

export const hecarim_jayce: MatchupSummary = {
  champs: ["hecarim", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 제이스 해머폼 E의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Jayce's Hammer Form Q [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Jayce's Hammer Form E [[KNOCKBACK]]."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
