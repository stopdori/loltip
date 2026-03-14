// app/data/matchups/amumu/amumu_elise.ts
import type { MatchupSummary } from "../_types";

export const amumu_elise: MatchupSummary = {
  champs: ["amumu", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 엘리스 거미폼 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 엘리스 거미폼 Q를 끊을 수 있음.", "아무무 Q로 엘리스 인간폼 E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Elise's Spider form Q, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Elise's Spider form Q.", "Amumu's Q is affected by Elise's Human form E [[STUN]], but can still move if the dash phase activates.\nHowever, [[STUN]] remains active."],
    },
    elise: {
      ko: [],
      en: [],
    },
  },
};
