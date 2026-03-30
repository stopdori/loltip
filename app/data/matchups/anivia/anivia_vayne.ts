// app/data/matchups/anivia/anivia_vayne.ts
import type { MatchupSummary } from "../_types";

export const anivia_vayne: MatchupSummary = {
  champs: ["anivia", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 베인 Q(구르기)의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 베인 Q(구르기)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Vayne's Q (Tumble) [[DASH]]. However, the [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Vayne's Q (Tumble) [[DASH]]."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
