// app/data/matchups/annie/annie_naafiri.ts
import type { MatchupSummary } from "../_types";

export const annie_naafiri: MatchupSummary = {
  champs: ["annie", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Naafiri's E and R [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Naafiri's R [[SKILL_CHANNEL]]."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
