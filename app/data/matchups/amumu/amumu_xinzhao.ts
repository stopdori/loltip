// app/data/matchups/amumu/amumu_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const amumu_xinzhao: MatchupSummary = {
  champs: ["amumu", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 신짜오 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 신짜오 E를 끊을 수 있음.", "아무무 Q로 신짜오 Q3, R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Xin Zhao's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Xin Zhao's E.", "Amumu's Q is affected by Xin Zhao's Q3 and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    xinzhao: {
      ko: [],
      en: [],
    },
  },
};
