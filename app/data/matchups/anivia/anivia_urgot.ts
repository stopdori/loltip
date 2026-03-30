// app/data/matchups/anivia/anivia_urgot.ts
import type { MatchupSummary } from "../_types";

export const anivia_urgot: MatchupSummary = {
  champs: ["anivia", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 우르곳 E의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 우르곳 E(돌진 단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Urgot's E [[DASH]]. However, the [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Urgot's E (dash phase) [[DASH]]."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
