// app/data/matchups/anivia/anivia_fizz.ts
import type { MatchupSummary } from "../_types";

export const anivia_fizz: MatchupSummary = {
  champs: ["anivia", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 피즈 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 피즈 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Fizz's Q [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Fizz's Q [[DASH]]."],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
