// app/data/matchups/anivia/anivia_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const anivia_tryndamere: MatchupSummary = {
  champs: ["anivia", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 트린 E의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 트린 E의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Tryndamere's E dash. However, the [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Tryndamere's E dash."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
