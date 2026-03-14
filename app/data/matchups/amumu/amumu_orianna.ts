// app/data/matchups/amumu/amumu_orianna.ts
import type { MatchupSummary } from "../_types";

export const amumu_orianna: MatchupSummary = {
  champs: ["amumu", "orianna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 오리아나 R(시전 집중)을 끊을 수 없음.", "아무무 Q로 오리아나 R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Orianna's R (channeling).", "Amumu's Q is affected by Orianna's R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    orianna: {
      ko: [],
      en: [],
    },
  },
};
