// app/data/matchups/amumu/amumu_thresh.ts
import type { MatchupSummary } from "../_types";

export const amumu_thresh: MatchupSummary = {
  champs: ["amumu", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 쓰레쉬 Q2, W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 쓰레쉬 W, Q2를 끊을 수 있음.", "아무무 Q로 쓰레쉬 Q의 [[GRAB]], E의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, Q, E데미지는 유효하고 Q의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Thresh's Q2 or W, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Thresh's W and Q2.", "Amumu's Q is affected by Thresh's Q [[GRAB]] and E [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, Q and E damage is applied and Q's [[STUN]] remains active."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
