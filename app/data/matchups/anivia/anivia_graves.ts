// app/data/matchups/anivia/anivia_graves.ts
import type { MatchupSummary } from "../_types";

export const anivia_graves: MatchupSummary = {
  champs: ["anivia", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 그브 E, R의 [[DASH]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 그브 E, R(후진 단계)의 [[DASH]을 끊을 수 있음.", "애니비아 W(벽)으로 그브 Q를 막을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Graves's E or R movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Graves's E and R (retreat phase) movement.", "Anivia's W (wall) can block Graves's Q."],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
