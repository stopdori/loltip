// app/data/matchups/anivia/anivia_leblanc.ts
import type { MatchupSummary } from "../_types";

export const anivia_leblanc: MatchupSummary = {
  champs: ["anivia", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 르블랑 W, R(W)의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 르블랑 W, R(W)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt LeBlanc's W or R(W) [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt LeBlanc's W or R(W) [[DASH]]."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
