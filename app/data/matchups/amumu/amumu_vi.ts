// app/data/matchups/amumu/amumu_vi.ts
import type { MatchupSummary } from "../_types";

export const amumu_vi: MatchupSummary = {
  champs: ["amumu", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 바이 Q(돌진 단계), R를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 바이 Q(돌진 단계)를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 바이 Q(시전 집중)을 끊을 수 있음.", "아무무 Q로 바이 Q의 [[STUN]]에 걸리지만 아무무 Q의 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 Q의 [[STUN]]도 남아있음.", "아무무 Q와 바이 R\n1. 서로 부딪힐때. 아무무 Q를 바이에게 시전하고 바이 R도 아무무에게 시전했을때 서로 만나면\n아무무는 데미지를 받고 [[AIRBORNE]]에 걸림\n바이는 데미지를 받고 [[STUN]]에 걸림.\n2. 아무무 Q를 다른 대상에게 투척하고 바이 R을 아무무가 맞았을 때 아무무 Q의 돌진 단계가 발동한다면,\n아무무가 데미지를 받고 바이는 아무무가 있던 자리에 착지하며, 아무무는 다른 대상에게 돌진.\n3. 아무무 Q를 다른 대상에게 투척하고 바이 R을 아무무가 맞기 전 아무무 Q의 돌진 단계가 발동한다면,\n바이가 아무무를 따라가서 내리꽂음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Vi's Q (dash phase) or R, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Vi's Q (dash phase).", "Amumu's Q and R [[STUN]] can interrupt Vi's Q (channeling).", "Amumu's Q is affected by Vi's Q [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and Q's [[STUN]] remains active.", "Amumu's Q vs Vi's R:\n1. When they collide: If Amumu casts Q at Vi and Vi casts R at Amumu and they meet,\nAmumu takes damage and is hit by [[AIRBORNE]], Vi takes damage and is hit by [[STUN]].\n2. If Amumu casts Q at another target and Vi's R hits Amumu, and then Amumu's Q dash activates,\nAmumu takes damage, Vi lands where Amumu was, and Amumu dashes to the other target.\n3. If Amumu casts Q at another target and Amumu's Q dash activates before Vi's R hits,\nVi follows Amumu and slams down on him."],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
