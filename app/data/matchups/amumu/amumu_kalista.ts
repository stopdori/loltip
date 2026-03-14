// app/data/matchups/amumu/amumu_kalista.ts
import type { MatchupSummary } from "../_types";

export const amumu_kalista: MatchupSummary = {
  champs: ["amumu", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 칼리스타 P를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 칼리스타 P, R(박치기 하고 나오는)를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Kalista's passive movement, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Kalista's passive movement and R (the outgoing dash)."],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
