// app/data/matchups/ambessa/ambessa_vayne.ts
import type { MatchupSummary } from "../_types";

export const ambessa_vayne: MatchupSummary = {
  champs: ["ambessa", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 베인 Q(구르기)를 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 베인 E의 [[KNOCKBACK]], [[STUN]](조건부)을 무시할 수 있음.\n단, [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Vayne's Q (roll).", "Ambessa's R [[UNSTOPPABLE]] can ignore Vayne's E [[KNOCKBACK]] and [[STUN]] (conditional).\nHowever, [[STUN]] still applies."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
