// app/data/matchups/amumu/amumu_warwick.ts
import type { MatchupSummary } from "../_types";

export const amumu_warwick: MatchupSummary = {
  champs: ["amumu", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 워윅 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 Q, R의 [[STUN]]로 워윅 R([[SUPPRESS]])을 끊을 수 있음.", "아무무 Q로 워윅 E의 [[FEAR]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E의 [[FEAR]]도 남아있음.", "아무무 Q의 투척 단계에 워윅 R의 [[SUPPRESS]]에 걸리고 아무무 Q의 돌진 단계가 발동되면 이동이 가능하지만,\n[[SUPPRESS]]이 풀리지 않고 데미지도 계속 받음.", "아무무 Q의 돌진 단계에 워윅 R의 [[SUPPRESS]]에 걸리면 그 자리에 바로 멈춤."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Warwick's Q, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's Q and R [[STUN]] can interrupt Warwick's R ([[SUPPRESS]]).", "Amumu's Q is affected by Warwick's E [[FEAR]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[FEAR]] remains active.", "If Amumu is hit by Warwick's R [[SUPPRESS]] during Q's throw phase and the dash activates, Amumu can still move,\nbut [[SUPPRESS]] is not lifted and damage continues.", "If Amumu is hit by Warwick's R [[SUPPRESS]] during Q's dash phase, Amumu stops immediately."],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
