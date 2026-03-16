// app/data/matchups/anivia/anivia_bard.ts
import type { MatchupSummary } from "../_types";

export const anivia_bard: MatchupSummary = {
  champs: ["anivia", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 바드 E(터널)의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 바드 Q(붕대)의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Bard's E (tunnel) movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Bard's Q movement."],
    },
    bard: {
      ko: [],
      en: [],
    },
  },
};
