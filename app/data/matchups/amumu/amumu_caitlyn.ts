// app/data/matchups/amumu/amumu_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const amumu_caitlyn: MatchupSummary = {
  champs: ["amumu", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 케틀 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 케틀 E를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 케틀 R(시전 집중)을 끊을 수 있음.", "아무무 Q로 케틀 W의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 아무무 Q를 시전하고 케틀 W(덫)을 밟았을 때 아무무 Q가 적에게 적중하면서 Q로 이동.\n단, 아무무 Q로 날아가는 도중 케틀 W(덫)을 밟으면 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 이 모든 상황에 케틀 W의 헤드샷은 유효하고 W의 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Caitlyn's E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Caitlyn's E.", "Amumu's Q and R [[STUN]] can interrupt Caitlyn's R (channeling).", "Amumu's Q is affected by Caitlyn's W [[ROOT]], but can still move if the dash phase activates.\nNote: If Amumu casts Q and then steps on Caitlyn's W (trap), Amumu can still move when Q hits the target.\nNote: If Amumu steps on Caitlyn's W (trap) during the Q dash, [[ROOT]] is applied but the dash phase can still activate.\nIn all cases, Caitlyn's W headshot is applied and W's [[ROOT]] remains active."],
    },
    caitlyn: {
      ko: ["케이틀린 W(덫)을 아무무가 밟으면 아무무가 Q(붕대)를 사용할 수 없음."],
      en: ["If Amumu steps on Caitlyn's W (trap), Amumu cannot use Q (Bandage Toss)."],
    },
  },
};
