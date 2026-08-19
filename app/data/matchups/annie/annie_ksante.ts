// app/data/matchups/annie/annie_ksante.ts
import type { MatchupSummary } from "../_types";

export const annie_ksante: MatchupSummary = {
  champs: ["annie", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 크산테 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["P [[STUN]] cannot interrupt K'Sante's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ksante: {
      ko: ["W의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["K'Sante's W [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
