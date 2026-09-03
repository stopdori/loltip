// app/data/matchups/anivia/anivia_hecarim.ts
import type { MatchupSummary } from "../_types";

export const anivia_hecarim: MatchupSummary = {
  champs: ["anivia", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."
      ],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Anivia's R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."
      ],
    },
  },
};
