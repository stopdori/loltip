// app/data/matchups/amumu/amumu_xerath.ts
import type { MatchupSummary } from "../_types";

export const amumu_xerath: MatchupSummary = {
  champs: ["amumu", "xerath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 제라스 Q(시전 집중), R(시전 집중)을 끊을 수 있음.", "아무무 Q로 제라스 E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Xerath's Q (channeling) and R (channeling).", "Amumu's Q is affected by Xerath's E [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    xerath: {
      ko: [],
      en: [],
    },
  },
};
