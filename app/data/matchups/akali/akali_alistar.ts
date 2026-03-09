// app/data/matchups/akali/akali_alistar.ts
import type { MatchupSummary } from "../_types";

export const akali_alistar: MatchupSummary = {
  champs: ["akali", "alistar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2로 알리스타 W를 따라 갈 수 있음"],
      en: ["Akali's E2 can follow Alistar's W"],
    },
    alistar: {
      ko: ["알리스타 Q, W로 아칼리 E1, E2, R1, R2를 끊을 수 있음", "알리스타 E의 [[STUN]]로 아칼리 E1, E2, R1, R2를 끊을 수 없음. 단, [[STUN]]은 남아있음"],
      en: ["Alistar's Q and W can interrupt Akali's E1, E2, R1, and R2", "Alistar's E [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2. However, the [[STUN]] still applies."],
    },
  },
};
