// app/data/matchups/alistar/alistar_aurora.ts
import type { MatchupSummary } from "../_types";

export const alistar_aurora: MatchupSummary = {
  champs: ["alistar", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 오로라 W, E(조건부)를 끊을 수 있음", "알리스타 E의 [[STUN]]로 오로라 W, E를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "알리스타 R의 [[CC_CLEANSE]]로 오로라 E의 [[SLOW]]를 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Aurora's W and E (conditional)", "Alistar's E [[STUN]] cannot interrupt Aurora's W and E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Aurora's E [[SLOW]]"],
    },
    aurora: {
      ko: ["오로라 R의 범위 밖으로 알리스타 W를 맞아 오로라가 밀려나면 R효과 발동"],
      en: ["If Aurora is knocked outside their R's range by Alistar's W, the R effect triggers"],
    },
  },
};
