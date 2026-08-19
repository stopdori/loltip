// app/data/matchups/annie/annie_sion.ts
import type { MatchupSummary } from "../_types";

export const annie_sion: MatchupSummary = {
  champs: ["annie", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 사이온 Q의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] can interrupt Sion's Q [[SKILL_CHANNEL]]."],
    },
    sion: {
      ko: ["Q, R의 [[AIRBORNE]], E의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]], [[KNOCKBACK]] 할 수 있음."],
      en: ["Sion's Q and R [[AIRBORNE]] and E [[KNOCKBACK]] can send Annie's R [[SUMMON]]ed Tibbers airborne or knock it back."],
    },
  },
};
