// app/data/matchups/camille/camille_yunara.ts
import type { MatchupSummary } from "../_types";

export const camille_yunara: MatchupSummary = {
  champs: ["camille", "yunara"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 유나라 RE의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 유나라 평타, Q, W를 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Yunara's RE [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Yunara's auto-attacks, Q, and W."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
