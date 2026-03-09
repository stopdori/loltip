// app/data/matchups/akshan/akshan_alistar.ts
import type { MatchupSummary } from "../_types";

export const akshan_alistar: MatchupSummary = {
  champs: ["akshan", "alistar"],
  summary: {
    ko: ["알리스타 Q/W는 아크샨 E 이동을 끊음"],
    en: ["Alistar's Q/W can interrupt Akshan's E movement"],
  },
  highlightsByChamp: {
    akshan: {
      ko: [],
      en: [],
    },
    alistar: {
      ko: ["알리스타 Q, W, E로 아크샨 E를 끊을 수 있음"],
      en: ["Alistar's Q, W, and E can interrupt Akshan's E"],
    },
  },
};
