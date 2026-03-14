// app/data/matchups/amumu/amumu_belveth.ts
import type { MatchupSummary } from "../_types";

export const amumu_belveth: MatchupSummary = {
  champs: ["amumu", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 벨베스 Q, R을 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 Q의 [[STUN]]로 벨베스 E를 끊을(멈출) 수 있음.", "아무무 R의 [[STUN]]로 벨베스 Q, E, R(이동만)를 끊을 수 있음.", "아무무 Q로 벨베스 W의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Bel'Veth's Q and R, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's Q [[STUN]] can interrupt (stop) Bel'Veth's E.", "Amumu's R [[STUN]] can interrupt Bel'Veth's Q, E, and R (movement only).", "Amumu's Q is affected by Bel'Veth's W [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    belveth: {
      ko: [],
      en: [],
    },
  },
};
