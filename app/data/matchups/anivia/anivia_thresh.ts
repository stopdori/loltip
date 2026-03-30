// app/data/matchups/anivia/anivia_thresh.ts
import type { MatchupSummary } from "../_types";

export const anivia_thresh: MatchupSummary = {
  champs: ["anivia", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 쓰레쉬 Q2, W(랜턴)의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 쓰레쉬 Q2, W(랜턴)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Thresh's Q2 or W (lantern) [[DASH]]. However, the [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Thresh's Q2 and W (lantern) [[DASH]]."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
