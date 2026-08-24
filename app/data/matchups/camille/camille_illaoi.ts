// app/data/matchups/camille/camille_illaoi.ts
import type { MatchupSummary } from "../_types";

export const camille_illaoi: MatchupSummary = {
  champs: ["camille", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 일라오이 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 일라오이 Q, W(평타), E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Illaoi's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Illaoi's Q, W (basic attack), E, and R."],
    },
    illaoi: {
      ko: [],
      en: [],
    },
  },
};
