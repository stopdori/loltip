// app/data/matchups/anivia/anivia_kaisa.ts
import type { MatchupSummary } from "../_types";

export const anivia_kaisa: MatchupSummary = {
  champs: ["anivia", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 카이사 R의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 카이사 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Kai'Sa's R [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Kai'Sa's R [[DASH]]."],
    },
    kaisa: {
      ko: [],
      en: [],
    },
  },
};
