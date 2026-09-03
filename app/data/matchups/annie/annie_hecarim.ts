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
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]], [[FEAR]] 할 수 있음.",
        "R의 [[UNSTOPPABLE]]로 애니 P의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."
      ],
      en: ["E [[KNOCKBACK]] and R [[FEAR]] can knock back and [[FEAR]] Annie's R [[SUMMON]]ed Tibbers.",
        "R [[UNSTOPPABLE]] can ignore Annie's P [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."
      ],
    },
  },
};
