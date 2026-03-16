// app/data/matchups/anivia/anivia_kindred.ts
import type { MatchupSummary } from "../_types";

export const anivia_kindred: MatchupSummary = {
  champs: ["anivia", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 킨드레드 Q의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 킨드레드 Q의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Kindred's Q movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Kindred's Q movement."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
