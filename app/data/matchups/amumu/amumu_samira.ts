// app/data/matchups/amumu/amumu_samira.ts
import type { MatchupSummary } from "../_types";

export const amumu_samira: MatchupSummary = {
  champs: ["amumu", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 사미라 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 사미라 E를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 사미라 R(채널링)을 끊을 수 있음.", "아무무 Q로 사미라 P(평타)의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Samira's E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Samira's E.", "Amumu's Q and R [[STUN]] can interrupt Samira's R (channeling).", "Amumu's Q is affected by Samira's passive (basic attack) [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
