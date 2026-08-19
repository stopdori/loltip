// app/data/matchups/annie/annie_illaoi.ts
import type { MatchupSummary } from "../_types";

export const annie_illaoi: MatchupSummary = {
  champs: ["annie", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 일라오이 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 일라오이 E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Illaoi's W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Illaoi's E [[SINGLE]] [[PROJECTILE]]."],
    },
    illaoi: {
      ko: [],
      en: [],
    },
  },
};
