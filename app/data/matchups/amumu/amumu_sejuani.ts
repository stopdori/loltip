// app/data/matchups/amumu/amumu_sejuani.ts
import type { MatchupSummary } from "../_types";

export const amumu_sejuani: MatchupSummary = {
  champs: ["amumu", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 세주아니 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 세주아니 Q를 끊을 수 있음.", "아무무 Q로 세주아니 Q의 [[AIRBORNE]], E의 [[STUN]], R의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E, R의[[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Sejuani's Q, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Sejuani's Q.", "Amumu's Q is affected by Sejuani's Q [[AIRBORNE]], E [[STUN]], and R [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and E and R [[STUN]] remain active."],
    },
    sejuani: {
      ko: [],
      en: [],
    },
  },
};
