// app/data/matchups/hecarim/hecarim_wukong.ts
import type { MatchupSummary } from "../_types";

export const hecarim_wukong: MatchupSummary = {
  champs: ["hecarim", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 오공 W, E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 오공 R의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Wukong's W and E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Wukong's R [[AIRBORNE]]."],
    },
    wukong: {
      ko: [],
      en: [],
    },
  },
};
