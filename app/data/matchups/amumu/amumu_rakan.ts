// app/data/matchups/amumu/amumu_rakan.ts
import type { MatchupSummary } from "../_types";

export const amumu_rakan: MatchupSummary = {
  champs: ["amumu", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 라칸 W(돌진 단계), E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.\n단, 라칸 W의 도약 단계에서 아무무 Q에 맞으면 도약 단계가 발동하지 않음.", "아무무 R의 [[STUN]]로 라칸 W(돌진 단계), E를 끊을 수 있음.", "아무무 Q로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 R의 [[CHARM]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Rakan's W (dash phase) or E, but can follow him.\nHowever, [[STUN]] remains active.\nNote: If Amumu's Q hits Rakan during W's leap phase, the leap phase does not activate.", "Amumu's R [[STUN]] can interrupt Rakan's W (dash phase) and E.", "Amumu's Q is affected by Rakan's W [[AIRBORNE]] and R [[CHARM]], but can still move if the dash phase activates.\nHowever, damage is applied and R's [[CHARM]] remains active."],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
