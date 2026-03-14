// app/data/matchups/amumu/amumu_kennen.ts
import type { MatchupSummary } from "../_types";

export const amumu_kennen: MatchupSummary = {
  champs: ["amumu", "kennen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 케넨 E, R(채널링)을 끊을 수 없음.", "아무무 Q로 케넨 P의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지가 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Kennen's E or R (channeling).", "Amumu's Q is affected by Kennen's passive [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    kennen: {
      ko: [],
      en: [],
    },
  },
};
