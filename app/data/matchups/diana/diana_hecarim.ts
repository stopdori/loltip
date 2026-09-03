// app/data/matchups/diana/diana_hecarim.ts
import type { MatchupSummary } from "../_types";

export const diana_hecarim: MatchupSummary = {
  champs: ["diana", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: ["R의 [[GRAB]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Hecarim's E [[DASH]]."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 다이애나 R의 [[GRAB]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Diana's E [[DASH]]."],
    },
  },
};
