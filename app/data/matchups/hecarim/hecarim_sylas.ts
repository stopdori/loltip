// app/data/matchups/hecarim/hecarim_sylas.ts
import type { MatchupSummary } from "../_types";

export const hecarim_sylas: MatchupSummary = {
  champs: ["hecarim", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 사일러스 E2의 [[AIRBORNE]]을 무시할 수 있음. \n 단, 사일러스는 E2가 적중한 자리로 [[DASH]]."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Sylas's W, E1, and E2 [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Sylas's E2 [[AIRBORNE]]. \n However, Sylas [[DASH]]es to where E2 hit."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
