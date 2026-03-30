// app/data/matchups/anivia/anivia_riven.ts
import type { MatchupSummary } from "../_types";

export const anivia_riven: MatchupSummary = {
  champs: ["anivia", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 리븐 Q1, Q2, Q3, E의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 리븐 Q1, Q2, Q3, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Riven's Q1, Q2, Q3, or E [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Riven's Q1, Q2, Q3, or E [[DASH]]."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
