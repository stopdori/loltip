// app/data/matchups/anivia/anivia_illaoi.ts
import type { MatchupSummary } from "../_types";

export const anivia_illaoi: MatchupSummary = {
  champs: ["anivia", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 일라오이 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 일라오이 W의 [[DASH]]을 끊을 수 있음. \n 단, 일라오이 W의 효과는 유효."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Illaoi's W [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Illaoi's W [[DASH]]. \n However, Illaoi's W effect still applies."],
    },
    illaoi: {
      ko: [],
      en: [],
    },
  },
};
