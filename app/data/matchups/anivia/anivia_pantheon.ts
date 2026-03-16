// app/data/matchups/anivia/anivia_pantheon.ts
import type { MatchupSummary } from "../_types";

export const anivia_pantheon: MatchupSummary = {
  champs: ["anivia", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 판테온 W의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 판테온 W의 이동을 끊을 수 있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 판테온 R(시전 집중)을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Pantheon's W movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Pantheon's W movement.", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] can interrupt Pantheon's R (channeling)."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
