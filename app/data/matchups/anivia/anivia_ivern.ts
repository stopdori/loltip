// app/data/matchups/anivia/anivia_ivern.ts
import type { MatchupSummary } from "../_types";

export const anivia_ivern: MatchupSummary = {
  champs: ["anivia", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 아이번 Q의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 아이번 Q의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Ivern's Q movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Ivern's Q movement."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
