// app/data/matchups/anivia/anivia_rengar.ts
import type { MatchupSummary } from "../_types";

export const anivia_rengar: MatchupSummary = {
  champs: ["anivia", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 렝가 P의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 렝가 P의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Rengar's P (passive leap) [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Rengar's P (passive leap) [[DASH]]."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
