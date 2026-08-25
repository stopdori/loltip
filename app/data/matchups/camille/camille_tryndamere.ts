// app/data/matchups/camille/camille_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const camille_tryndamere: MatchupSummary = {
  champs: ["camille", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 트린다미어 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 트린다미어 W, E를 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Tryndamere's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Tryndamere's W and E."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
