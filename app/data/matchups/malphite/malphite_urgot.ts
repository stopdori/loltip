// app/data/matchups/malphite/malphite_urgot.ts
import type { MatchupSummary } from "../_types";

export const malphite_urgot: MatchupSummary = {
  champs: ["malphite", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 우르곳 E의 [[GRAB]]을 무시할 수 있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Urgot's E [[GRAB]]."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["말파이트 R의 [[UNSTOPPABLE]]와 우르곳 R2의 [[SUPPRESS]], [[GRAB]]의 판정은. \n 말파이트 R의 [[UNSTOPPABLE]] 종료 후 우르곳 R2에 끌려감."],
    en: ["The interaction between Malphite's R [[UNSTOPPABLE]] and Urgot's R2 [[SUPPRESS]], [[GRAB]]: \n after Malphite's R [[UNSTOPPABLE]] ends, he gets pulled in by Urgot's R2."],
  },
};
