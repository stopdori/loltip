// app/data/matchups/camille/camille_yuumi.ts
import type { MatchupSummary } from "../_types";

export const camille_yuumi: MatchupSummary = {
  champs: ["camille", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 유미(탈착) R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 유미 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 유미 평타, Q, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Yuumi's (detached) R [[SKILL_CHANNEL]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Yuumi's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Yuumi's auto-attacks, Q, and R."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
