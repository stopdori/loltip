// app/data/matchups/annie/annie_samira.ts
import type { MatchupSummary } from "../_types";

export const annie_samira: MatchupSummary = {
  champs: ["annie", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Samira's E [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Samira's R [[SKILL_CHANNEL]]."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
