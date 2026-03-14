// app/data/matchups/amumu/amumu_pantheon.ts
import type { MatchupSummary } from "../_types";

export const amumu_pantheon: MatchupSummary = {
  champs: ["amumu", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 판테온 W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 판테온 W를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 판테온 R(시전 집중)을 끊을 수 있음.", "아무무 Q로 판테온 W의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Pantheon's W, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Pantheon's W.", "Amumu's Q and R [[STUN]] can interrupt Pantheon's R (channeling).", "Amumu's Q is affected by Pantheon's W [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
