// app/data/matchups/camille/camille_lucian.ts
import type { MatchupSummary } from "../_types";

export const camille_lucian: MatchupSummary = {
  champs: ["camille", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 루시안 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 루시안 평타, Q, W, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Lucian's R [[SKILL_CHANNEL]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Lucian's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Lucian's auto-attacks, Q, W, and R."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
