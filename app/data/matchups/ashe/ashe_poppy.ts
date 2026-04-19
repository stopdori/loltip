// app/data/matchups/ashe/ashe_poppy.ts
import type { MatchupSummary } from "../_types";

export const ashe_poppy: MatchupSummary = {
  champs: ["ashe", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애쉬 R의 [[STUN]]로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[STUN]] still applies.", "Ashe's R [[STUN]] can interrupt Poppy's R [[SKILL_CHARGED]]."],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
