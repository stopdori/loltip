// app/data/matchups/camille/camille_karthus.ts
import type { MatchupSummary } from "../_types";

export const camille_karthus: MatchupSummary = {
  champs: ["camille", "karthus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 카서스 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 카서스 평타, Q, W, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Karthus's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Karthus's basic attacks, Q, W, E, and R."],
    },
    karthus: {
      ko: [],
      en: [],
    },
  },
};
