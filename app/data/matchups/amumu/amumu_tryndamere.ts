// app/data/matchups/amumu/amumu_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const amumu_tryndamere: MatchupSummary = {
  champs: ["amumu", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 트린다미어 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 트린다미어 E를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Tryndamere's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Tryndamere's E."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
