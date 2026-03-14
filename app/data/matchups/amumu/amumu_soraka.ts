// app/data/matchups/amumu/amumu_soraka.ts
import type { MatchupSummary } from "../_types";

export const amumu_soraka: MatchupSummary = {
  champs: ["amumu", "soraka"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 소라카 E의 [[SILENCE]], [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 W의 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q is affected by Soraka's E [[SILENCE]] and [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and W's [[ROOT]] remains active."],
    },
    soraka: {
      ko: [],
      en: [],
    },
  },
};
