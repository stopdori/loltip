// app/data/matchups/anivia/anivia_corki.ts
import type { MatchupSummary } from "../_types";

export const anivia_corki: MatchupSummary = {
  champs: ["anivia", "corki"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 코르키 W(발키리)의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 코르키 W(발키리)의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Corki's W (Valkyrie) movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Corki's W (Valkyrie) movement."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
