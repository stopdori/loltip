// app/data/matchups/amumu/amumu_khazix.ts
import type { MatchupSummary } from "../_types";

export const amumu_khazix: MatchupSummary = {
  champs: ["amumu", "khazix"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 카직스 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 카직스 E를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Kha'Zix's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Kha'Zix's E."],
    },
    khazix: {
      ko: [],
      en: [],
    },
  },
};
