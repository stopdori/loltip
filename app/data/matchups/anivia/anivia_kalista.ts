// app/data/matchups/anivia/anivia_kalista.ts
import type { MatchupSummary } from "../_types";

export const anivia_kalista: MatchupSummary = {
  champs: ["anivia", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 칼리스타 P, R(박치기 하고 나오는)의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 칼리스타 P, R(박치기 하고 나오는)의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Kalista's P or R (exit dash) [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Kalista's P and R (exit dash) movement."],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
