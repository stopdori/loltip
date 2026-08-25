// app/data/matchups/camille/camille_masteryi.ts
import type { MatchupSummary } from "../_types";

export const camille_masteryi: MatchupSummary = {
  champs: ["camille", "masteryi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 마스터 이 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 마스터 이 Q를 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Master Yi's W [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Master Yi's Q."],
    },
    masteryi: {
      ko: [],
      en: [],
    },
  },
};
