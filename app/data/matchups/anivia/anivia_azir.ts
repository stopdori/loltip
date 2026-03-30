// app/data/matchups/anivia/anivia_azir.ts
import type { MatchupSummary } from "../_types";

export const anivia_azir: MatchupSummary = {
  champs: ["anivia", "azir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 아지르 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Azir's E movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Azir's E movement."],
    },
    azir: {
      ko: [],
      en: [],
    },
  },
};
