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
      ko: ["애니비아 Q의 [[STUN]]로 바드 E(터널)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Bard's E (tunnel) [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Bard's E (wall traverse) [[DASH]]."],
    },
    bard: {
      ko: [],
      en: [],
    },
  },
};
