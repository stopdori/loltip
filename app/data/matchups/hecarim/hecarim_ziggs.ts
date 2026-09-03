// app/data/matchups/hecarim/hecarim_ziggs.ts
import type { MatchupSummary } from "../_types";

export const hecarim_ziggs: MatchupSummary = {
  champs: ["hecarim", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 직스 W의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 직스 W의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Ziggs's W [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Ziggs's W [[KNOCKBACK]]."],
    },
    ziggs: {
      ko: [],
      en: [],
    },
  },
};
