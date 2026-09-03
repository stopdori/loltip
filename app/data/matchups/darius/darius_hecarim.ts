// app/data/matchups/darius/darius_hecarim.ts
import type { MatchupSummary } from "../_types";

export const darius_hecarim: MatchupSummary = {
  champs: ["darius", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    darius: {
      ko: ["E의 [[GRAB]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[GRAB]] can interrupt Hecarim's E [[DASH]]."],
    },
    hecarim: {
      ko: ["R의 [[UNSTOPPABLE]]로 다리우스 E의 [[GRAB]]을 무시할 수 있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Darius's E [[GRAB]]."],
    },
  },
};
