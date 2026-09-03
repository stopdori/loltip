// app/data/matchups/hecarim/hecarim_kalista.ts
import type { MatchupSummary } from "../_types";

export const hecarim_kalista: MatchupSummary = {
  champs: ["hecarim", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 칼리스타 P의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 칼리스타 R2의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Kalista's P [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Kalista's R2 [[AIRBORNE]]."],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
