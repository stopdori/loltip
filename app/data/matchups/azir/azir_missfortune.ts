// app/data/matchups/azir/azir_missfortune.ts
import type { MatchupSummary } from "../_types";

export const azir_missfortune: MatchupSummary = {
  champs: ["azir", "missfortune"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 미스포츈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Miss Fortune's R [[SKILL_CHANNEL]]."],
    },
    missfortune: {
      ko: [],
      en: [],
    },
  },
};
