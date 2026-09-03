// app/data/matchups/draven/draven_hecarim.ts
import type { MatchupSummary } from "../_types";

export const draven_hecarim: MatchupSummary = {
  champs: ["draven", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] can interrupt Hecarim's E [[DASH]]."],
    },
    hecarim: {
      ko: ["R의 [[UNSTOPPABLE]]로 드레이븐 E의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Draven's E [[KNOCKBACK]]."],
    },
  },
};
