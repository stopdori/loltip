// app/data/matchups/anivia/anivia_heimerdinger.ts
import type { MatchupSummary } from "../_types";

export const anivia_heimerdinger: MatchupSummary = {
  champs: ["anivia", "heimerdinger"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 하이머딩거 RW(채널링)를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 하이머딩거 Q(붕대)의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Heimerdinger's RW (channeling). However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Heimerdinger's Q movement."],
    },
    heimerdinger: {
      ko: [],
      en: [],
    },
  },
};
