// app/data/matchups/malphite/malphite_singed.ts
import type { MatchupSummary } from "../_types";

export const malphite_singed: MatchupSummary = {
  champs: ["malphite", "singed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R은 [[DASH]] 판정으로 신지드 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.", 
        "R의 [[UNSTOPPABLE]]로 신지드 E의 [[GRAB]]을 무시할 수 있음."],
      en: ["R [[DASH]] cannot be used while affected by Singed's W [[GROUNDED]].",
        "R [[UNSTOPPABLE]] can ignore Singed's E [[GRAB]]."],
    },
    singed: {
      ko: [],
      en: [],
    },
  },
};
