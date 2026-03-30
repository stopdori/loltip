// app/data/matchups/anivia/anivia_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const anivia_caitlyn: MatchupSummary = {
  champs: ["anivia", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 케틀 E(투망)의 [[DASH]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 케틀 E(투망)의 [[DASH]을 끊을 수 있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 케틀 R(시전 집중)을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Caitlyn's E (net) movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Caitlyn's E (net) movement.", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] can interrupt Caitlyn's R (channeling)."],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
