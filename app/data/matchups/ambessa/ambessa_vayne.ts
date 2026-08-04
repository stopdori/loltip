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
      ko: ["R의 [[SUPPRESS]]으로 베인 Q(구르기)의 [[DASH]]을 끊을 수 있음.", "R의 [[UNSTOPPABLE]]로 베인 E의 [[KNOCKBACK]], [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Vayne's Q (roll) [[DASH]].", "R [[UNSTOPPABLE]] can ignore Vayne's E [[KNOCKBACK]] and [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
