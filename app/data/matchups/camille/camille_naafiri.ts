// app/data/matchups/camille/camille_naafiri.ts
import type { MatchupSummary } from "../_types";

export const camille_naafiri: MatchupSummary = {
  champs: ["camille", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 나피리 E, R의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 나피리 Q, E, R을 피할 수 있음. R만 영상.[[CLIP:https://www.youtube.com/shorts/uU1D7qfEN2A]]"],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Naafiri's R [[SKILL_CHANNEL]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Naafiri's E and R [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Naafiri's Q, E, and R. Clip shows R only.[[CLIP:https://www.youtube.com/shorts/uU1D7qfEN2A]]"
      ],
    },
    naafiri: {
      ko: ["R의 [[SKILL_CHANNEL]]은 카밀 R의 [[UNTARGETABLE]] 상태가 되어도 시전 유지. \n [[DASH]]까지 발동."],
      en: ["Naafiri's R [[SKILL_CHANNEL]] keeps casting even while Camille's R [[UNTARGETABLE]] is active. \n It even triggers the [[DASH]]."],
    },
  },
};
