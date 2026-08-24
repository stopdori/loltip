// app/data/matchups/camille/camille_corki.ts
import type { MatchupSummary } from "../_types";

export const camille_corki: MatchupSummary = {
  champs: ["camille", "corki"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 코르키 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 코르키 평타, Q, W, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Corki's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Corki's basic attacks, Q, W, E, and R."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
