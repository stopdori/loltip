// app/data/matchups/anivia/anivia_irelia.ts
import type { MatchupSummary } from "../_types";

export const anivia_irelia: MatchupSummary = {
  champs: ["anivia", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 이렐리아 Q의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 이렐리아 Q의 이동을 끊을 수 있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 이렐리아 W(시전 집중)을 끊을 수 없음.\n단, Q의 [[STUN]]은 남아있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Irelia's Q movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Irelia's Q movement.", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] cannot interrupt Irelia's W (channeling).\nHowever, Q [[STUN]] still applies."],
    },
    irelia: {
      ko: [],
      en: [],
    },
  },
};
