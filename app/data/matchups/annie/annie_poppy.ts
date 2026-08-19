// app/data/matchups/annie/annie_poppy.ts
import type { MatchupSummary } from "../_types";

export const annie_poppy: MatchupSummary = {
  champs: ["annie", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Poppy's R [[SKILL_CHARGED]]."],
    },
    poppy: {
      ko: ["E의 [[KNOCKBACK]], R의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]], [[AIRBORNE]] 할 수 있음."],
      en: ["Poppy's E [[KNOCKBACK]] and R [[AIRBORNE]] can knock back Annie's R [[SUMMON]]ed Tibbers or send it airborne."],
    },
  },
};
