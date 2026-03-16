// app/data/matchups/anivia/anivia_aurora.ts
import type { MatchupSummary } from "../_types";

export const anivia_aurora: MatchupSummary = {
  champs: ["anivia", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 오로라 W, E, R의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 오로라 W, E(후진 단계)의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Aurora's W, E, or R movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Aurora's W and E (retreat phase) movement."],
    },
    aurora: {
      ko: [],
      en: [],
    },
  },
};
