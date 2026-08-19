// app/data/matchups/annie/annie_hecarim.ts
import type { MatchupSummary } from "../_types";

export const annie_hecarim: MatchupSummary = {
  champs: ["annie", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["P [[STUN]] cannot interrupt Hecarim's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]]로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Hecarim's E [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
