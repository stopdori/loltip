// app/data/matchups/alistar/alistar_darius.ts
import type { MatchupSummary } from "../_types";

export const alistar_darius: MatchupSummary = {
  champs: ["alistar", "darius"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 다리우스 W의 [[SLOW]], E의 [[SLOW]] [[GRAB]]을 해제할 수 있음."],
      en: ["R [[CC_CLEANSE]] can cleanse Darius's W [[SLOW]] and E [[SLOW]] [[GRAB]]."],
    },
    darius: {
      ko: ["E의 [[GRAB]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[GRAB]] can interrupt Alistar's W [[DASH]]."],
    },
  },
};
