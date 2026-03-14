// app/data/matchups/amumu/amumu_nautilus.ts
import type { MatchupSummary } from "../_types";

export const amumu_nautilus: MatchupSummary = {
  champs: ["amumu", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 노틸러스 Q(그랩 단계)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 노틸러스 Q(그렙 단계)를 끊을 수 있음.", "아무무 Q로 노틸러스 P의 [[ROOT]], Q의 [[GRAB]] [[STUN]], R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 P의 [[ROOT]] Q의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Nautilus's Q (grapple phase), but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Nautilus's Q (grapple phase).", "Amumu's Q is affected by Nautilus's passive [[ROOT]], Q [[GRAB]] [[STUN]], and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied and passive [[ROOT]] and Q's [[STUN]] remain active."],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
