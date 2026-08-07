// app/data/matchups/amumu/amumu_seraphine.ts
import type { MatchupSummary } from "../_types";

export const amumu_seraphine: MatchupSummary = {
  champs: ["amumu", "seraphine"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 세라핀 R의 [[SKILL_CHANNEL]]을 끊을 수 없음.", 
        "Q의 [[CC_BUFFER]]로 세라핀 E의 [[ROOT]], [[STUN]] / R의 [[CHARM]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]], [[STUN]], [[CHARM]]은 남아있음."],
      en: ["Q and R [[STUN]] cannot interrupt Seraphine's R [[SKILL_CHANNEL]].", "Q [[CC_BUFFER]] can ignore Seraphine's E [[ROOT]] [[STUN]] and R [[CHARM]] and continue [[DASH]]. \n However, the [[ROOT]], [[STUN]], and [[CHARM]] still apply."],
    },
    seraphine: {
      ko: [],
      en: [],
    },
  },
};
