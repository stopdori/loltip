// app/data/matchups/amumu/amumu_aurora.ts
import type { MatchupSummary } from "../_types";

export const amumu_aurora: MatchupSummary = {
  champs: ["amumu", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 오로라 W, E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 오로라 W, E를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Aurora's W and E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Aurora's W and E."],
    },
    aurora: {
      ko: [],
      en: [],
    },
  },
};
