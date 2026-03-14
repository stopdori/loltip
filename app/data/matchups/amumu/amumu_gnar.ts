// app/data/matchups/amumu/amumu_gnar.ts
import type { MatchupSummary } from "../_types";

export const amumu_gnar: MatchupSummary = {
  champs: ["amumu", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 나르 미니폼 E/ 메가폼 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 나르 미니폼 E/ 메가폼 E를 끊을 수 있음.", "아무무 Q로 나르 메가폼 W의 [[STUN]], R의 [[KNOCKBACK]] [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 메가폼 W의 [[STUN]], R의 [[KNOCKBACK]] [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Gnar's Mini E / Mega E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Gnar's Mini E / Mega E.", "Amumu's Q is affected by Gnar's Mega W [[STUN]] and R [[KNOCKBACK]] [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and Mega W's [[STUN]] and R's [[KNOCKBACK]] [[STUN]] remain active."],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
