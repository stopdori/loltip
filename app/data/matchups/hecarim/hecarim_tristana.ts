// app/data/matchups/hecarim/hecarim_tristana.ts
import type { MatchupSummary } from "../_types";

export const hecarim_tristana: MatchupSummary = {
  champs: ["hecarim", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 트리스타나 W의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 트리스타나 R의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Tristana's W [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Tristana's R [[KNOCKBACK]]."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
