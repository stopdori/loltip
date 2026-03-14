// app/data/matchups/amumu/amumu_kayn.ts
import type { MatchupSummary } from "../_types";

export const amumu_kayn: MatchupSummary = {
  champs: ["amumu", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 케인(일반, 그암, 다르킨) Q, R(나오는 단계)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 케인 Q(돌진 단계), R(나오는 단계)를 끊을 수 있음.\n단, 케인 Q는 돌진 단계 데미지만 유효하고 회전 단계를 발동하지 않음.\n단, 케인 R은 스킬이 유효하고 이동만 끊음.", "아무무 Q로 케인(다르킨) W의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지가 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Kayn (base, Rhaast, Shadow Assassin) Q and R (exit phase), but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Kayn's Q (dash phase) and R (exit phase).\nNote: For Kayn's Q, only the dash phase damage applies and the spin phase is not triggered.\nNote: For Kayn's R, the skill effect applies and only the movement is interrupted.", "Amumu's Q is affected by Kayn (Rhaast) W [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
