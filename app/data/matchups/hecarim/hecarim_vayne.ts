// app/data/matchups/hecarim/hecarim_vayne.ts
import type { MatchupSummary } from "../_types";

export const hecarim_vayne: MatchupSummary = {
  champs: ["hecarim", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 베인 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 베인 E의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Vayne's Q [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Vayne's E [[KNOCKBACK]]."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
