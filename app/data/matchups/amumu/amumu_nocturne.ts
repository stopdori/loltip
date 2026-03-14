// app/data/matchups/amumu/amumu_nocturne.ts
import type { MatchupSummary } from "../_types";

export const amumu_nocturne: MatchupSummary = {
  champs: ["amumu", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 녹턴 R2를 끊을 수 없음.", "아무무 Q로 녹턴 E의 [[FEAR]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[FEAR]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Nocturne's R2.", "Amumu's Q is affected by Nocturne's E [[FEAR]], but can still move if the dash phase activates.\nHowever, damage is applied and [[FEAR]] remains active."],
    },
    nocturne: {
      ko: [],
      en: [],
    },
  },
};
