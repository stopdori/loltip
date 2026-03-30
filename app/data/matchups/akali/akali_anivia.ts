// app/data/matchups/akali/akali_anivia.ts
import type { MatchupSummary } from "../_types";

export const akali_anivia: MatchupSummary = {
  champs: ["akali", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [],
      en: [],
    },
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Akali's E1, E2, R1, R2 movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Akali's E1, E2, R1, R2 movement."],
    },
  },
};
