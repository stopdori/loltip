// app/data/matchups/amumu/amumu_wukong.ts
import type { MatchupSummary } from "../_types";

export const amumu_wukong: MatchupSummary = {
  champs: ["amumu", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 오공 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 오공 W, E를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 오공 R(채널링)을 멈출 수 없음.", "아무무 Q로 오공 R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Wukong's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Wukong's W and E.", "Amumu's Q and R [[STUN]] cannot stop Wukong's R (channeling).", "Amumu's Q is affected by Wukong's R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    wukong: {
      ko: [],
      en: [],
    },
  },
};
