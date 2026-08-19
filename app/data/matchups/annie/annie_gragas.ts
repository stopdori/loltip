// app/data/matchups/annie/annie_gragas.ts
import type { MatchupSummary } from "../_types";

export const annie_gragas: MatchupSummary = {
  champs: ["annie", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 그라가스 E(배치기)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["P [[STUN]] cannot interrupt Gragas's E(Body Slam) [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    gragas: {
      ko: ["E, R의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Gragas's E and R [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
