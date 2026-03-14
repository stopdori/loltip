// app/data/matchups/amumu/amumu_gwen.ts
import type { MatchupSummary } from "../_types";

export const amumu_gwen: MatchupSummary = {
  champs: ["amumu", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 그웬 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 그웬 E를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Gwen's E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Gwen's E."],
    },
    gwen: {
      ko: ["그웬 W로 아무무 Q, R을 범위 밖에서 맞지 않음"],
      en: ["Gwen's W can avoid Amumu's Q and R from outside the range"],
    },
  },
};
