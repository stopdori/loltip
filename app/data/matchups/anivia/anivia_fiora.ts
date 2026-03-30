// app/data/matchups/anivia/anivia_fiora.ts
import type { MatchupSummary } from "../_types";

export const anivia_fiora: MatchupSummary = {
  champs: ["anivia", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 피오라 Q의 [[DASH]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 피오라 Q의 [[DASH]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Fiora's Q movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Fiora's Q movement."],
    },
    fiora: {
      ko: [],
      en: [],
    },
  },
};
