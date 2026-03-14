// app/data/matchups/amumu/amumu_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const amumu_fiddlesticks: MatchupSummary = {
  champs: ["amumu", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 피들스틱 W, R(시전 집중)을 끊을 수 있음.", "아무무 Q로 피들스틱 Q의 [[FEAR]]를 무시할 수 있음.\n단, [[FEAR]]는 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Fiddlesticks's W and R (channeling).", "Amumu's Q can ignore Fiddlesticks's Q [[FEAR]] during the dash phase.\nHowever, [[FEAR]] remains active."],
    },
    fiddlesticks: {
      ko: [],
      en: [],
    },
  },
};
