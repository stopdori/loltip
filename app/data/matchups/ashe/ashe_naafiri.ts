// app/data/matchups/ashe/ashe_naafiri.ts
import type { MatchupSummary } from "../_types";

export const ashe_naafiri: MatchupSummary = {
  champs: ["ashe", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[STUN]]로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Naafiri's E or R [[DASH]]. \n However, the [[STUN]] still applies.", "R [[STUN]] can interrupt Naafiri's R [[SKILL_CHANNEL]]."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
