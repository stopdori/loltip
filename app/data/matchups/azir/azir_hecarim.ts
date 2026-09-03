// app/data/matchups/azir/azir_hecarim.ts
import type { MatchupSummary } from "../_types";

export const azir_hecarim: MatchupSummary = {
  champs: ["azir", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Hecarim's E [[DASH]]."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 아지르 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 아지르 R의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Azir's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Azir's R [[KNOCKBACK]]."],
    },
  },
};
