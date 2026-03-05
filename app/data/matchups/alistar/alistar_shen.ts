// app/data/matchups/alistar/alistar_shen.ts
import type { MatchupSummary } from "../_types";

export const alistar_shen: MatchupSummary = {
  champs: ["alistar", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 쉔 E, R(시전집중)을 끊을 수 있음\n알리스타 E로 쉔 R(시전집중)을 끊을 수 있음", "알리스타 E의 [[STUN]]로 쉔 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 쉔 E의 [[TAUNT]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Shen's E and R(channeling)\\nAlistar's E can interrupt Shen's R(channeling)", "Alistar's E [[STUN]] cannot interrupt Shen's E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Shen's E [[TAUNT]]"],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
