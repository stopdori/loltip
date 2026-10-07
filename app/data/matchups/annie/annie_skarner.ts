// app/data/matchups/annie/annie_skarner.ts
import type { MatchupSummary } from "../_types";

export const annie_skarner: MatchupSummary = {
  champs: ["annie", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["P [[STUN]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    skarner: {
      ko: ["E의 [[SUPPRESS]] [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음. [[EXIST]]"],
      en: ["E [[SUPPRESS]] [[KNOCKBACK]] can [[KNOCKBACK]] Tibbers [[SUMMON]]ed by Annie's R. [[EXIST]]"],
    },
  },
};
