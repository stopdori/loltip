// app/data/matchups/hecarim/hecarim_skarner.ts
import type { MatchupSummary } from "../_types";

export const hecarim_skarner: MatchupSummary = {
  champs: ["hecarim", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 스카너 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 스카너 E, R의 [[SUPPRESS]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Skarner's E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Skarner's E and R [[SUPPRESS]]."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
