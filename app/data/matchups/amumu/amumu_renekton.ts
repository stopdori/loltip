// app/data/matchups/amumu/amumu_renekton.ts
import type { MatchupSummary } from "../_types";

export const amumu_renekton: MatchupSummary = {
  champs: ["amumu", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 레넥톤 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 레넥톤 E를 끊을 수 있음.", "아무무 Q로 레넥톤 W의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 W의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Renekton's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Renekton's E.", "Amumu's Q is affected by Renekton's W [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and W's [[STUN]] remains active."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
