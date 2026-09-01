// app/data/matchups/malphite/malphite_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const malphite_mordekaiser: MatchupSummary = {
  champs: ["malphite", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 모데카이저 E의 [[GRAB]], R의 [[BANISH]]을 무시할 수 있음. \n 단, 무시에 성공하면 모데카이저 R의 [[COOLDOWN]]은 소모."],
      en: ["R [[UNSTOPPABLE]] can ignore Mordekaiser's E [[GRAB]] and R [[BANISH]]. \n However, if it is ignored, Mordekaiser's R [[COOLDOWN]] is still consumed."],
    },
    mordekaiser: {
      ko: [],
      en: [],
    },
  },
};
