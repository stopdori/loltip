// app/data/matchups/akshan/akshan_annie.ts
import type { MatchupSummary } from "../_types";

export const akshan_annie: MatchupSummary = {
  champs: ["akshan", "annie"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: [],
      en: [],
    },
    annie: {
      ko: ["P의 [[STUN]]로 아크샨 E, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R로 [[SUMMON]]된 티버로 아크샨 R의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] can interrupt Akshan's E and R [[SKILL_CHANNEL]].", "R [[SUMMON]]ed Tibbers can block Akshan's R [[SINGLE]] [[PROJECTILE]]."],
    },
  },
};
