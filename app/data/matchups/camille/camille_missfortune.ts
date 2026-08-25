// app/data/matchups/camille/camille_missfortune.ts
import type { MatchupSummary } from "../_types";

export const camille_missfortune: MatchupSummary = {
  champs: ["camille", "missfortune"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 미스포츈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 미스포츈 평타, Q, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Miss Fortune's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Miss Fortune's auto-attacks, Q, E, and R."],
    },
    missfortune: {
      ko: [],
      en: [],
    },
  },
};
