// app/data/matchups/amumu/amumu_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const amumu_twistedfate: MatchupSummary = {
  champs: ["amumu", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 트페 R(시전 집중)을 끊을 수 있음.", "아무무 Q로 트페 W(골카)의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Twisted Fate's R (channeling).", "Amumu's Q is affected by Twisted Fate's W (Gold Card) [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    twistedfate: {
      ko: [],
      en: [],
    },
  },
};
