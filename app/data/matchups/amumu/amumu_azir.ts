// app/data/matchups/amumu/amumu_azir.ts
import type { MatchupSummary } from "../_types";

export const amumu_azir: MatchupSummary = {
  champs: ["amumu", "azir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 아지르 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.","아무무 R의 [[STUN]]로 아지르 E를 끊을 수 있음.", "아무무 Q로 아지르 R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Azir's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Azir's E.", "Amumu's Q is affected by Azir's R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    azir: {
      ko: [],
      en: [],
    },
  },
};
