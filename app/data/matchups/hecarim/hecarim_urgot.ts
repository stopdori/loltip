// app/data/matchups/hecarim/hecarim_urgot.ts
import type { MatchupSummary } from "../_types";

export const hecarim_urgot: MatchupSummary = {
  champs: ["hecarim", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 우르곳 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 우르곳 E의 [[GRAB]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Urgot's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Urgot's E [[GRAB]]."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
