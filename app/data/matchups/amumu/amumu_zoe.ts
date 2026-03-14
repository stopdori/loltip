// app/data/matchups/amumu/amumu_zoe.ts
import type { MatchupSummary } from "../_types";

export const amumu_zoe: MatchupSummary = {
  champs: ["amumu", "zoe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 조이 R을 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.\n단, 아무무가 조이와 몸이 닿으면 이동을 멈춤.", "아무무 R의 [[STUN]]로 조이 R을 끊을 수 없음.", "아무무 Q로 조이 E의 [[SLEEP]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[SLEEP]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Zoe's R, but can follow her.\nHowever, [[STUN]] remains active.\nNote: Amumu stops moving if he makes body contact with Zoe.", "Amumu's R [[STUN]] cannot interrupt Zoe's R.", "Amumu's Q is affected by Zoe's E [[SLEEP]], but can still move if the dash phase activates.\nHowever, damage is applied and [[SLEEP]] remains active."],
    },
    zoe: {
      ko: [],
      en: [],
    },
  },
};
