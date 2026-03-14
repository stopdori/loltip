// app/data/matchups/amumu/amumu_nami.ts
import type { MatchupSummary } from "../_types";

export const amumu_nami: MatchupSummary = {
  champs: ["amumu", "nami"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 나미 R(시전 집중)을 끊을 수 없음.", "아무무 Q로 나미 Q의 [[SUSPENDING]], R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 Q의 [[STUN]], R의 [[SLOW]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Nami's R (channeling).", "Amumu's Q is affected by Nami's Q [[SUSPENDING]] and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied and Q's [[STUN]] and R's [[SLOW]] remain active."],
    },
    nami: {
      ko: [],
      en: [],
    },
  },
};
