// app/data/matchups/akali/akali_amumu.ts
import type { MatchupSummary } from "../_types";

export const akali_amumu: MatchupSummary = {
  champs: ["akali", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2로 아무무 Q를 따라 갈 수 있음"],
      en: ["Akali's E2 can follow Amumu's Q"],
    },
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 아칼리 E1, E2, R1, R2를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 아칼리 E1, E2, R1, R2를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Akali's E1, E2, R1, and R2."],
    },
  },
};
