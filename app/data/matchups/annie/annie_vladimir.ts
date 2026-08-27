// app/data/matchups/annie/annie_vladimir.ts
import type { MatchupSummary } from "../_types";

export const annie_vladimir: MatchupSummary = {
  champs: ["annie", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 블라디미르(블라디) E의 [[SKILL_CHARGED]]을 끊을 수 있음. \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사.", 
        "R로 [[SUMMON]]된 티버로 블라디 E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] can interrupt Vladimir's E [[SKILL_CHARGED]]. \n However, Vladimir's E is not cancelled — it fires up to the charged amount.", "R [[SUMMON]]ed Tibbers can block Vladimir's E [[SINGLE]] [[PROJECTILE]]."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
