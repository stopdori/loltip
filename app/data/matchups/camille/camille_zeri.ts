// app/data/matchups/camille/camille_zeri.ts
import type { MatchupSummary } from "../_types";

export const camille_zeri: MatchupSummary = {
  champs: ["camille", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 제리 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 제리 평타, Q, W, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Zeri's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Zeri's auto-attacks, Q, W, and R."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
