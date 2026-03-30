// app/data/matchups/anivia/anivia_renekton.ts
import type { MatchupSummary } from "../_types";

export const anivia_renekton: MatchupSummary = {
  champs: ["anivia", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 레넥톤 E1, E2의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 레넥톤 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Renekton's E1 or E2 [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Renekton's E1 or E2 [[DASH]]."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
