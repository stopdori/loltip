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
      ko: ["P의 [[STUN]]로 스카너 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] can interrupt Skarner's E [[SKILL_CHANNEL]]."],
    },
    skarner: {
      ko: ["E의 [[SUPPRESS]] [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Skarner's E [[SUPPRESS]] [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
