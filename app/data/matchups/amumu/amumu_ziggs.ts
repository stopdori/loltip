// app/data/matchups/amumu/amumu_ziggs.ts
import type { MatchupSummary } from "../_types";

export const amumu_ziggs: MatchupSummary = {
  champs: ["amumu", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 직스 W(점프)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 직스 W(점프)를 끊을 수 있음.", "아무무 Q로 직스 W의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Ziggs's W (jump), but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Ziggs's W (jump).", "Amumu's Q is affected by Ziggs's W [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    ziggs: {
      ko: [],
      en: [],
    },
  },
};
