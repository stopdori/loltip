// app/data/matchups/amumu/amumu_kindred.ts
import type { MatchupSummary } from "../_types";

export const amumu_kindred: MatchupSummary = {
  champs: ["amumu", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 킨드레드 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 킨드레드 Q를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Kindred's Q, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Kindred's Q."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
