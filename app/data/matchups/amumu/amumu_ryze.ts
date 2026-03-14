// app/data/matchups/amumu/amumu_ryze.ts
import type { MatchupSummary } from "../_types";

export const amumu_ryze: MatchupSummary = {
  champs: ["amumu", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 라이즈 R(시전 집중)을 끊을 수 있음.", "아무무 Q로 라이즈 EW의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 W의 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Ryze's R (channeling).", "Amumu's Q is affected by Ryze's EW [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and W's [[ROOT]] remains active."],
    },
    ryze: {
      ko: [],
      en: [],
    },
  },
};
