// app/data/matchups/anivia/anivia_khazix.ts
import type { MatchupSummary } from "../_types";

export const anivia_khazix: MatchupSummary = {
  champs: ["anivia", "khazix"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 카직스 E의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 카직스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Kha'Zix's E [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Kha'Zix's E [[DASH]]."],
    },
    khazix: {
      ko: [],
      en: [],
    },
  },
};
