// app/data/matchups/anivia/anivia_evelynn.ts
import type { MatchupSummary } from "../_types";

export const anivia_evelynn: MatchupSummary = {
  champs: ["anivia", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 이블린 E의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 이블린 E의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Evelynn's E movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Evelynn's E movement."],
    },
    evelynn: {
      ko: [],
      en: [],
    },
  },
};
