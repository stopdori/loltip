// app/data/matchups/amumu/amumu_rell.ts
import type { MatchupSummary } from "../_types";

export const amumu_rell: MatchupSummary = {
  champs: ["amumu", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 렐 승마폼 W(붕괴)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 렐 승마폼 W(붕괴)를 끊을 수 있음.", "아무무 Q로 렐 Q의 [[STUN]], W의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 Q의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Rell's mounted W (Crash Down), but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Rell's mounted W (Crash Down).", "Amumu's Q is affected by Rell's Q [[STUN]] and W [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied and Q's [[STUN]] remains active."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
