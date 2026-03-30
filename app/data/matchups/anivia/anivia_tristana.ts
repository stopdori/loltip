// app/data/matchups/anivia/anivia_tristana.ts
import type { MatchupSummary } from "../_types";

export const anivia_tristana: MatchupSummary = {
  champs: ["anivia", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 트리스타나 W의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 트리스타나 W(점프 단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Tristana's W [[DASH]]. However, the [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Tristana's W (jump phase) [[DASH]]."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
