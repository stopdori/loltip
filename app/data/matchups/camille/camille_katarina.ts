// app/data/matchups/camille/camille_katarina.ts
import type { MatchupSummary } from "../_types";

export const camille_katarina: MatchupSummary = {
  champs: ["camille", "katarina"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 카타리나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 카타리나 P, Q, E(조건부), R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Katarina's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Katarina's P, Q, E (conditional), and R."],
    },
    katarina: {
      ko: [],
      en: [],
    },
  },
};
